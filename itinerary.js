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
    date:'9/30', title:'水明漾 · 慢启动', stay:'住：乌布',
    path:'水明漾海滩 → 冲浪/SPA/Beach Club → 晚间乌布',
    detail:'睡到自然醒。上午安排1.5—2小时初级冲浪或海边散步，中午早午餐，下午从SPA、Potato Head或逛店里选一项。若想看日落可18:30后出发，预计20:30左右抵达乌布；不追求日落则16:30前走，避开一部分拥堵。',
    points:[
      {name:'水明漾住宿区',lat:-8.6905,lng:115.1603},
      {name:'水明漾海滩 · 初级冲浪',lat:-8.6913,lng:115.1572,note:'上午浪况合适时上1.5—2小时体验课；以当天教练判断为准。'},
      {name:'Potato Head / SPA（择一）',lat:-8.6796,lng:115.1484,optional:true,note:'下午轻松收尾；Beach Club、SPA和逛店不必全塞。'},
      {name:'乌布住宿区',lat:-8.5069,lng:115.2625,kind:'hotel',note:'只住一晚，为次日ATV＋漂流和北上罗威纳做衔接。'}
    ]
  },
  {
    date:'10/1', title:'乌布 · 活动日', stay:'住：罗威纳',
    path:'乌布 → ATV → 阿勇河漂流 → 晚间罗威纳',
    detail:'这一天不逛皇宫、寺庙和梯田。ATV实际骑行约1.5小时，但加准备、洗澡和午餐约3小时；阿勇河漂流实际下水约2小时，整套再占3—4小时。建议订联票协调接送，16:00—16:30结束后北上，约19:30—20:30入住罗威纳。',
    points:[
      {name:'乌布住宿区',lat:-8.5069,lng:115.2625,kind:'hotel'},
      {name:'Kuber ATV',lat:-8.4600,lng:115.3000,note:'雨林、隧道和泥地线路；整个体验块约3小时。'},
      {name:'阿勇河漂流',lat:-8.4780,lng:115.2450,note:'推荐补充项目；下水约2小时，适合四人活动日。'},
      {name:'罗威纳黑沙滩住宿区',lat:-8.1597,lng:115.0278,kind:'hotel',note:'晚间抵达，只吃饭休息，为次日清晨出海。'}
    ]
  },
  {
    date:'10/2', title:'海豚 · 瀑布 · 南下', stay:'住：沙努尔',
    path:'罗威纳出海 → Aling-Aling瀑布 → 沙努尔',
    detail:'约05:30—08:00出海看日出和海豚，早餐后退房。约10:00到Aling-Aling，安排2.5—3小时向导线路，可选天然滑道和不同高度跳水；不想跳也能只走瀑布。午餐后南下，傍晚入住沙努尔。海豚是野生动物，不能保证出现。',
    points:[
      {name:'罗威纳出海追海豚',lat:-8.1450,lng:115.0250,note:'选择不围堵、不追逐的船家。'},
      {name:'Aling-Aling瀑布',lat:-8.1977,lng:115.1048,note:'距罗威纳约40分钟；向导带领天然滑道与跳水，按个人胆量选择高度。'},
      {name:'沙努尔住宿区',lat:-8.6970,lng:115.2630,kind:'hotel',note:'次日从沙努尔码头去佩尼达。'}
    ]
  },
  {
    date:'10/3', title:'佩尼达 · 海陆双线', stay:'住：金巴兰高端度假区',
    path:'沙努尔码头 ⇢ Manta浮潜 ⇢ 精灵断崖 ⇢ 破碎海滩（可选）⇢ 金巴兰',
    detail:'早船去佩尼达，上午优先Manta Point/Bay浮潜：整个浮潜块通常约2.5—3.5小时，实际下水约1.5—2小时。午餐后去精灵断崖崖顶；这是日游不可避免的拥挤时段，但Manta更应抢早晨平静海况。破碎海滩和天神浴池按时间取舍，17:00左右回沙努尔后直接入住金巴兰。',
    sea:true,
    points:[
      {name:'沙努尔码头',lat:-8.6718,lng:115.2632,kind:'transport'},
      {name:'Manta Point / Bay浮潜',lat:-8.7930,lng:115.5270,note:'优先早晨；海况不适合Manta Point时改Manta Bay，魔鬼鱼不能保证出现。'},
      {name:'精灵断崖 Kelingking',lat:-8.7523,lng:115.4726,img:'images/kelingking.jpg',note:'只看崖顶，预留45—60分钟；不下沙滩。'},
      {name:'破碎海滩（可选）',lat:-8.7336,lng:115.4453,img:'images/broken.jpg',optional:true,note:'时间不足时先删这里和天神浴池。'},
      {name:'沙努尔码头',lat:-8.6718,lng:115.2632,kind:'transport'},
      {name:'AYANA / 金巴兰度假区',lat:-8.7862167,lng:115.1392722,kind:'hotel',note:'晚间入住，接下来一天半以度假村和南部海岸为主。'}
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

const EXTRA_POINTS = [
  {name:'Saba黑沙滩骑马（未排入）',lat:-8.6133409,lng:115.3211878,note:'位置在沙努尔东北、与金巴兰反方向。若临时放弃Aling-Aling或南部海岸，可再考虑；单纯看沙不值得专程绕路。',mapUrl:'https://www.google.com/maps/search/?api=1&query=-8.6133409,115.3211878'},
  {name:'Bali Fire射击（未排入）',lat:-8.7055,lng:115.2520,note:'靠近沙努尔，目前优先级低于水明漾、乌布活动和佩尼达。'}
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
  if(dayIndex===null){
    EXTRA_POINTS.forEach(p=>{
      const icon=L.divIcon({className:'route-marker',html:'<span style="background:#fff;color:#64748b;border-color:#64748b">◇</span>',iconSize:[28,28],iconAnchor:[14,14]});
      L.marker([p.lat,p.lng],{icon}).bindPopup(popupFor(p,{date:'全程备选',title:'未排入主路线'})).addTo(routeLayer);
      routeBounds.extend([p.lat,p.lng]);
    });
  }
  if(dayIndex===null) map.fitBounds(routeBounds,window.innerWidth<768?{paddingTopLeft:[20,125],paddingBottomRight:[20,280],maxZoom:8}:{paddingTopLeft:[370,145],paddingBottomRight:[35,35],maxZoom:9});
  else map.fitBounds(L.latLngBounds(ROUTE_DAYS[dayIndex].points.map(p=>[p.lat,p.lng])),{padding:[75,75],maxZoom:11});
}

function renderPanel() {
  itineraryPanel.innerHTML=`
    <div class="trip-eyebrow">ROUTE DRAFT · 6 NIGHTS</div>
    <h2>先北上，最后住进度假村</h2>
    <p class="trip-intro">四位同学 · 海景与活动优先 · 水明漾慢启动 · 乌布ATV＋漂流 · 海豚与佩尼达为核心</p>
    <div class="trip-badges"><span>水明漾 1晚</span><span>乌布 1晚</span><span>罗威纳 1晚</span><span>沙努尔 1晚</span><span>金巴兰度假区 2晚</span></div>
    <p class="route-key">路线为地理连线，用来理解每天在哪个区域，不代表实际公路或船舶航线。◇ 是可选点。</p>
    <div class="day-tabs"><button data-day="all" aria-pressed="true">全部</button>${ROUTE_DAYS.map((d,i)=>`<button data-day="${i}" aria-pressed="false">${d.date}</button>`).join('')}</div>
    <div class="day-list">${ROUTE_DAYS.map((d,i)=>`
      <article class="day-card" data-card="${i}">
        <button class="day-heading" data-focus="${i}"><span class="day-dot" style="background:${DAY_COLORS[i]}"></span><strong>${d.date} · ${d.title}</strong><small>定位地图</small></button>
        <p class="day-path">${d.path}</p><span class="day-stay">${d.stay}</span>
        <p class="day-detail">${d.detail}</p>
      </article>`).join('')}</div>
    <details class="trip-extras"><summary>佩尼达为什么只去一天</summary><p>第二天可以补东线Diamond Beach与Atuh Beach，但必须住岛上才比较顺；这会占掉10月4日的度假村时间。当前按你更在意的Manta与精灵断崖，集中做一日海陆组合。</p></details>
    <details class="trip-extras"><summary>Saba和射击去哪了</summary><p>两处继续显示在“全部路线”的灰色◇备选点中，但不连入主线。Saba在沙努尔东北，射击靠近沙努尔；当前行程已经由水明漾、乌布活动和佩尼达补满。</p></details>`;
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
