const DAY_COLORS = ['#64748b','#d97706','#2563eb','#0891b2','#dc2626','#7c3aed','#334155'];
const ROUTE_DAYS = [
  {
    date:'9/29', title:'落地 · 水明漾', stay:'住：水明漾',
    path:'机场 → 水明漾酒店',
    detail:'20:00—21:00 抵达。办完入境、取行李后直接入住；当晚只安排附近晚餐。水明漾适合第一晚的餐饮和度假氛围，但这时已经天黑，不把“看海”算作当晚任务。',
    points:[
      {name:'登巴萨机场 DPS',lat:-8.7467,lng:115.1668,kind:'transport'},
      {name:'水明漾住宿区',lat:-8.6905,lng:115.1603,kind:'hotel'}
    ]
  },
  {
    date:'9/30', title:'ATV · 北上罗威纳', stay:'住：罗威纳',
    path:'水明漾 → Kuber ATV → 罗威纳黑沙滩',
    detail:'早上退房，约 10:30 开始 ATV。含准备、骑行、洗漱和午餐预留约 3 小时；下午包车北上，傍晚到罗威纳。当天不再塞皇宫、寺庙或射击。',
    points:[
      {name:'水明漾住宿区',lat:-8.6905,lng:115.1603},
      {name:'Kuber ATV',lat:-8.4600,lng:115.3000,img:'',note:'雨林、隧道、泥地线路；以最终确认的基地为准。'},
      {name:'罗威纳黑沙滩',lat:-8.1597,lng:115.0278,kind:'hotel',note:'黑沙滩与追海豚合并，不再单独绕去 Saba。'}
    ]
  },
  {
    date:'10/1', title:'日出海豚 · 回南部', stay:'住：沙努尔',
    path:'罗威纳出海 → 早餐休息 → 沙努尔',
    detail:'清晨约 06:00 出海；海豚是野生动物，不能保证出现。选不围堵、不追逐的船家。早餐后休息，再包车回沙努尔，晚上留白。',
    points:[
      {name:'罗威纳出海',lat:-8.1450,lng:115.0250,note:'选择尊重野生动物的船家。'},
      {name:'沙努尔住宿区',lat:-8.6970,lng:115.2630,kind:'hotel',note:'次日从沙努尔码头去佩尼达最顺。'}
    ]
  },
  {
    date:'10/2', title:'佩尼达 · 海陆双线', stay:'住：沙努尔',
    path:'沙努尔码头 ⇢ Manta 浮潜 ⇢ 精灵断崖 ⇢ 破碎海滩（可选）⇢ 沙努尔',
    detail:'Manta 浮潜和精灵断崖是当天两个核心。选海陆组合团，优先真 Manta Point；若船程或海况不合适则改 Manta Bay。精灵断崖只看崖顶；破碎海滩和天神浴池按路况、船班与体力决定。魔鬼鱼为野生动物，不能保证出现。',
    sea:true,
    points:[
      {name:'沙努尔码头',lat:-8.6718,lng:115.2632,kind:'transport'},
      {name:'Manta Point / Bay 浮潜',lat:-8.7930,lng:115.5270,note:'固定项目；具体点位由当天海况与船家决定，魔鬼鱼不能保证出现。'},
      {name:'精灵断崖 Kelingking',lat:-8.7523,lng:115.4726,img:'images/kelingking.jpg',note:'核心必看；崖顶观景。'},
      {name:'破碎海滩（可选）',lat:-8.7336,lng:115.4453,img:'images/broken.jpg',optional:true,note:'西线顺路的海蚀拱门；时间不足时先删这里。'},
      {name:'沙努尔码头',lat:-8.6718,lng:115.2632,kind:'transport'}
    ]
  },
  {
    date:'10/3', title:'Saba 可选 · 入住度假村', stay:'住：金巴兰高端度假区',
    path:'沙努尔 → Saba 黑沙滩骑马（可选）→ 金巴兰度假村',
    detail:'上午退房后可向东绕去 Saba：只有想骑马或拍黑沙大片时才去；随后横穿南部前往金巴兰。射击是靠近沙努尔的另一备选，两者二选一。建议15:00左右入住，下午留给泳池、Kubu Beach和日落。',
    points:[
      {name:'沙努尔住宿区',lat:-8.6970,lng:115.2630},
      {name:'Saba 黑沙滩骑马（可选）',lat:-8.6133409,lng:115.3211878,optional:true,note:'湿黑沙、海浪与骑马是重点；单纯看海不值得绕路。',mapUrl:'https://www.google.com/maps/search/?api=1&query=-8.6133409,115.3211878'},
      {name:'AYANA / 金巴兰度假区',lat:-8.7862167,lng:115.1392722,kind:'hotel',note:'推荐作为最后两晚的高端度假锚点；与原来的南部住宿安排属于同一大区。',mapUrl:'https://www.google.com/maps/search/?api=1&query=-8.7862167,115.1392722'},
      {name:'射击（另一备选）',lat:-8.7055,lng:115.2520,optional:true,branch:true,note:'靠近沙努尔；与Saba骑马二选一，不纳入主路线连线。'}
    ]
  },
  {
    date:'10/4', title:'度假村 · 悬崖海岸', stay:'住：金巴兰高端度假区',
    path:'度假村上午 → 滑翔伞（可选）→ Malini 悬崖午餐 → Suluban → 度假村',
    detail:'上午先使用度假村设施；想玩滑翔伞再约Timbis，否则中午直接去Malini。下午看Suluban岩洞、海浪和冲浪，傍晚返回酒店。无需进入乌鲁瓦图寺。',
    points:[
      {name:'AYANA / 金巴兰度假区',lat:-8.7862167,lng:115.1392722,kind:'hotel'},
      {name:'Timbis 滑翔伞（可选）',lat:-8.8450,lng:115.1800,optional:true,note:'天气和风况决定能否起飞。'},
      {name:'Malini 悬崖餐厅',lat:-8.8322,lng:115.0870,note:'固定午餐候选；重点是悬崖海景，订位时确认靠海座位与低消。'},
      {name:'Suluban / Blue Point',lat:-8.8188,lng:115.0882,note:'岩洞、悬崖、冲浪和日落；不是寺庙。'},
      {name:'AYANA / 金巴兰度假区',lat:-8.7862167,lng:115.1392722,kind:'hotel'}
    ]
  },
  {
    date:'10/5', title:'留白 · 晚班机', stay:'晚间离岛',
    path:'酒店/附近海滩 → 机场',
    detail:'退房后寄存行李。根据确切起飞时间，在酒店、Balangan 或金巴兰附近休息；不安排离岛和北部活动。国际航班按航空公司要求预留到场时间。',
    points:[
      {name:'AYANA / 金巴兰度假区',lat:-8.7862167,lng:115.1392722,kind:'hotel'},
      {name:'Balangan（时间够再去）',lat:-8.7927,lng:115.1232,optional:true,note:'白沙、悬崖和日落视野。'},
      {name:'登巴萨机场 DPS',lat:-8.7467,lng:115.1668,kind:'transport'}
    ]
  }
];

const routeLayer = L.layerGroup();
const routeBounds = L.latLngBounds();
const itineraryPanel = document.getElementById('itineraryPanel');
const legend = document.querySelector('.legend');
const spotsToggle = document.getElementById('spotsToggle');
const routeToggle = document.getElementById('routeToggle');
const viewSubtitle = document.getElementById('viewSubtitle');
let selectedDay = null;
let currentView = 'route';

function popupFor(point, day) {
  return `<div class="route-popup"><strong>${point.name}</strong><span>${day.date} · ${day.title}</span>${point.note?`<p>${point.note}</p>`:''}${point.mapUrl?`<a href="${point.mapUrl}" target="_blank" rel="noopener">在 Google 地图查看位置 ↗</a>`:''}${point.img?`<img src="${point.img}" alt="${point.name}">`:''}</div>`;
}

function addArrow(from,to,color) {
  const lat=(from.lat+to.lat)/2, lng=(from.lng+to.lng)/2;
  const angle=Math.atan2(to.lng-from.lng,-(to.lat-from.lat))*180/Math.PI;
  return L.marker([lat,lng],{interactive:false,icon:L.divIcon({className:'route-arrow',html:`<span style="color:${color};transform:rotate(${angle}deg)">➤</span>`,iconSize:[22,22],iconAnchor:[11,11]})});
}

function drawRoute(dayIndex=null) {
  routeLayer.clearLayers();
  const days=dayIndex===null?ROUTE_DAYS:[ROUTE_DAYS[dayIndex]];
  days.forEach((day)=>{
    const i=ROUTE_DAYS.indexOf(day), color=DAY_COLORS[i];
    const routePoints=day.points.filter(p=>!p.branch);
    const latlngs=routePoints.map(p=>[p.lat,p.lng]);
    L.polyline(latlngs,{color,weight:dayIndex===null?4:6,opacity:.86,dashArray:day.sea?'9 7':null,lineCap:'round'}).addTo(routeLayer);
    day.points.forEach((p,j)=>{
      const icon=L.divIcon({className:'route-marker',html:`<span style="background:${p.optional?'#fff':color};color:${p.optional?color:'#fff'};border-color:${color}">${p.optional?'◇':i+1}</span>`,iconSize:[28,28],iconAnchor:[14,14]});
      L.marker([p.lat,p.lng],{icon}).bindPopup(popupFor(p,day)).addTo(routeLayer);
      routeBounds.extend([p.lat,p.lng]);
    });
    routePoints.forEach((p,j)=>{ if(j<routePoints.length-1) addArrow(p,routePoints[j+1],color).addTo(routeLayer); });
  });
  if(dayIndex===null) map.fitBounds(routeBounds,window.innerWidth<768?{paddingTopLeft:[20,125],paddingBottomRight:[20,280],maxZoom:8}:{paddingTopLeft:[370,145],paddingBottomRight:[35,35],maxZoom:9});
  else map.fitBounds(L.latLngBounds(ROUTE_DAYS[dayIndex].points.map(p=>[p.lat,p.lng])),{padding:[75,75],maxZoom:11});
}

function renderPanel() {
  itineraryPanel.innerHTML=`
    <div class="trip-eyebrow">ROUTE DRAFT · 6 NIGHTS</div>
    <h2>先北上，最后住进度假村</h2>
    <p class="trip-intro">四位同学 · 海景优先 · ATV、海豚、Manta 浮潜与精灵断崖为核心 · 射击可删</p>
    <div class="trip-badges"><span>水明漾 1晚</span><span>罗威纳 1晚</span><span>沙努尔 2晚</span><span>金巴兰度假区 2晚</span></div>
    <p class="route-key">路线为地理连线，用来理解每天在哪个区域，不代表实际公路或船舶航线。◇ 是可选点。</p>
    <div class="day-tabs"><button data-day="all" aria-pressed="true">全部</button>${ROUTE_DAYS.map((d,i)=>`<button data-day="${i}" aria-pressed="false">${d.date}</button>`).join('')}</div>
    <div class="day-list">${ROUTE_DAYS.map((d,i)=>`
      <article class="day-card" data-card="${i}">
        <button class="day-heading" data-focus="${i}"><span class="day-dot" style="background:${DAY_COLORS[i]}"></span><strong>${d.date} · ${d.title}</strong><small>定位地图</small></button>
        <p class="day-path">${d.path}</p><span class="day-stay">${d.stay}</span>
        <p class="day-detail">${d.detail}</p>
      </article>`).join('')}</div>
    <details class="trip-extras"><summary>为什么没有“天空之境”</summary><p><b>乌鲁瓦图</b>是南部悬崖海岸区域；“天空之门倒影照”在东部的 Lempuyang 寺，两者相距很远。这条路线保留的是 Melasti、Suluban 等海岸，不安排天空之门，也不要求进乌鲁瓦图寺。</p></details>`;
  itineraryPanel.querySelectorAll('[data-day]').forEach(btn=>btn.addEventListener('click',()=>focusDay(btn.dataset.day)));
  itineraryPanel.querySelectorAll('[data-focus]').forEach(btn=>btn.addEventListener('click',()=>focusDay(btn.dataset.focus)));
}

function focusDay(value) {
  selectedDay=value==='all'?null:Number(value);
  itineraryPanel.querySelectorAll('[data-day]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.day==='all'&&selectedDay===null)||Number(b.dataset.day)===selectedDay)));
  itineraryPanel.querySelectorAll('[data-card]').forEach(c=>c.hidden=selectedDay!==null&&Number(c.dataset.card)!==selectedDay);
  drawRoute(selectedDay);
}

function setView(view) {
  currentView=view;
  hideCard();
  const route=view==='route';
  document.body.classList.toggle('route-view',route);
  routeToggle.setAttribute('aria-pressed',String(route));
  spotsToggle.setAttribute('aria-pressed',String(!route));
  itineraryPanel.hidden=!route;
  legend.hidden=route;
  if(route){ if(map.hasLayer(spotsLayer)) map.removeLayer(spotsLayer); routeLayer.addTo(map); drawRoute(selectedDay); viewSubtitle.textContent='9.29 晚抵达 — 10.5 晚离开 · 四位同学 · 六晚'; }
  else { if(map.hasLayer(routeLayer)) map.removeLayer(routeLayer); spotsLayer.addTo(map); map.setView([-8.42,115.32],10); viewSubtitle.textContent='点击景点查看小红书真实体验、玩法和避雷'; }
  setTimeout(()=>map.invalidateSize(),50);
}

spotsToggle.addEventListener('click',()=>setView('spots'));
routeToggle.addEventListener('click',()=>setView('route'));
renderPanel();
setView('route');
