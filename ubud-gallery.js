const ubudLayer=L.layerGroup();
const UBUD_STORAGE='bali-ubud-wishlist-v1';
let savedUbud=[];
try{const saved=JSON.parse(localStorage.getItem(UBUD_STORAGE)||'[]');if(Array.isArray(saved))savedUbud=saved;}catch{}
const ubudSelected=new Set(savedUbud.filter(id=>UBUD_OPTIONS.some(p=>p.id===id)));
let ubudFilter='全部';
let wishPersisted=true;

function filteredUbud(){return UBUD_OPTIONS.filter(p=>ubudFilter==='全部'||(ubudFilter==='已选'?ubudSelected.has(p.id):p.group===ubudFilter));}
function fitUbud(points){
  if(!points.length)return;
  const mobile=window.innerWidth<768;
  map.fitBounds(L.latLngBounds(points.map(p=>[p.lat,p.lng])),mobile?{paddingTopLeft:[30,130],paddingBottomRight:[30,Math.min(itineraryPanel.getBoundingClientRect().height+40,window.innerHeight-220)],maxZoom:points.length===1?14:12}:{paddingTopLeft:[460,145],paddingBottomRight:[35,40],maxZoom:points.length===1?14:12});
}
function drawUbudOptions(fit=true){
  ubudLayer.clearLayers();
  const options=filteredUbud();
  options.forEach(p=>{
    const selected=ubudSelected.has(p.id);
    const marker=L.marker([p.lat,p.lng],{title:p.name,icon:L.divIcon({className:'candidate-marker',html:`<span class="${selected?'selected':''}">${selected?'✓':'◇'}</span>`,iconSize:[30,30],iconAnchor:[15,15]})});
    marker.addTo(ubudLayer).bindTooltip(p.name,{direction:'top'}).on('click',e=>{L.DomEvent.stopPropagation(e);showSpot({...p,region:'ubud'});});
  });
  if(fit)fitUbud(options);
}
function renderUbudPanel(){
  const expanded=itineraryPanel.classList.contains('catalog-expanded');
  const options=filteredUbud();
  itineraryPanel.innerHTML=`
    <div class="trip-eyebrow">乌布候选清单 · 尚未排入日期</div>
    <h2>先看景色，再选想去的</h2>
    <p class="trip-intro">皇宫、寺庙、梯田都可选。下面12个地点与体验全部是备选，不必全去；选好后再组合进乌布两天。</p>
    <div class="catalog-toolbar"><span class="wish-count" aria-live="polite">已选 ${ubudSelected.size} / 12</span><button type="button" id="expandCatalog" aria-expanded="${expanded}">${expanded?'收起列表':'展开看图'}</button><button type="button" id="showSelected">只看已选</button></div>
    <div class="candidate-filters" aria-label="乌布备选分类">${['全部','镇内经典','北部经典','热门瀑布','活动体验'].map(g=>`<button type="button" data-group="${g}" aria-pressed="${g===ubudFilter}">${g}</button>`).join('')}</div>
    <p class="wishlist-note">选择保存在本浏览器，方便一起筛选；“加入想去”不等于已排进路线或预订。</p>
    <div class="candidate-list">${options.map(p=>`<article class="candidate-card" data-option="${p.id}">${photoMarkup(p)}<div class="candidate-body"><div class="candidate-kicker">${p.group} · ${p.label}</div><h3>${p.name}</h3><span class="option-duration">建议 ${p.duration}</span><p>${p.play}</p><p class="candidate-tradeoff">${p.bad}</p><div class="candidate-actions"><button type="button" class="wish-button" data-wish="${p.id}" aria-pressed="${ubudSelected.has(p.id)}">${ubudSelected.has(p.id)?'已加入想去 ✓':'加入想去'}</button><button type="button" data-locate-option="${p.id}">定位地图</button><button type="button" data-detail-option="${p.id}">详情</button></div></div></article>`).join('')||'<p class="empty-selection">还没有选中景点。先点“全部”，看图挑几个想去的吧。</p>'}</div>
    <p class="catalog-footer"><a href="photo-credits.html" target="_blank" rel="noopener">图片来源与授权</a> · 停留时间为建议，排队和接送另计。</p>`;
  itineraryPanel.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{ubudFilter=b.dataset.group;renderUbudPanel();drawUbudOptions();}));
  itineraryPanel.querySelector('#showSelected').addEventListener('click',()=>{ubudFilter=ubudFilter==='已选'?'全部':'已选';renderUbudPanel();drawUbudOptions();});
  itineraryPanel.querySelector('#expandCatalog').addEventListener('click',()=>{
    const expanded=itineraryPanel.classList.toggle('catalog-expanded');
    const button=itineraryPanel.querySelector('#expandCatalog');button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'收起列表':'展开看图';
  });
  itineraryPanel.querySelectorAll('[data-locate-option]').forEach(b=>b.addEventListener('click',()=>{
    const p=UBUD_OPTIONS.find(p=>p.id===b.dataset.locateOption);itineraryPanel.classList.remove('catalog-expanded');
    const expand=itineraryPanel.querySelector('#expandCatalog');expand.textContent='展开看图';expand.setAttribute('aria-expanded','false');fitUbud([p]);showSpot({...p,region:'ubud'});
  }));
  itineraryPanel.querySelectorAll('[data-detail-option]').forEach(b=>b.addEventListener('click',()=>showSpot({...UBUD_OPTIONS.find(p=>p.id===b.dataset.detailOption),region:'ubud'})));
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-wish]');if(!button)return;
  const id=button.dataset.wish;if(!UBUD_OPTIONS.some(p=>p.id===id))return;
  if(ubudSelected.has(id))ubudSelected.delete(id);else ubudSelected.add(id);
  try{localStorage.setItem(UBUD_STORAGE,JSON.stringify([...ubudSelected]));wishPersisted=true;}catch{wishPersisted=false;}
  document.querySelectorAll('[data-wish]').forEach(b=>{const on=ubudSelected.has(b.dataset.wish);b.setAttribute('aria-pressed',String(on));b.textContent=on?'已加入想去 ✓':'加入想去';});
  const count=document.querySelector('.wish-count');if(count)count.textContent=`已选 ${ubudSelected.size} / 12`;
  if(!wishPersisted){const note=document.querySelector('.wishlist-note');if(note)note.textContent='浏览器未允许保存；本次打开期间仍可筛选，关闭后可能丢失。';}
  if(currentView==='ubud'){if(ubudFilter==='已选'){const scroll=itineraryPanel.scrollTop;renderUbudPanel();itineraryPanel.scrollTop=scroll;}drawUbudOptions(false);}
});
document.getElementById('ubudToggle').addEventListener('click',()=>setView('ubud'));
setView('ubud');
