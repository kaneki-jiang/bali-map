const DAY_COLORS = ['#64748b','#d97706','#2563eb','#0891b2','#dc2626','#7c3aed','#334155'];
const ROUTE_DAYS = [
  {
    "date": "9/29",
    "title": "落地 · 直达乌布",
    "stay": "住：乌布 · 第1晚（推荐）",
    "path": "机场 → 乌布酒店",
    "detail": "推荐落地后直接去乌布，连住三晚，减少一次搬行李。深夜入住与接机需提前落实，第二天不安排早场。",
    "note": "首晚直达为推荐选择；若航班严重延误或非常疲倦，可改机场附近过渡。水明漾不是必经停留。",
    "timeline": [
      [
        "20:00—21:00",
        "抵达巴厘岛机场"
      ],
      [
        "落地后约1—2小时",
        "入境、取行李、出关接车"
      ],
      [
        "接车后约1.5—2小时",
        "直接前往乌布，具体按酒店位置与交通调整"
      ],
      [
        "约23:00—次日01:00",
        "抵达酒店休息；实际到达随入境和车程顺延"
      ]
    ],
    "points": [
      {
        "name": "登巴萨机场 DPS",
        "lat": -8.7467,
        "lng": 115.1668,
        "kind": "transport",
        "photoKey": "airport"
      },
      {
        "name": "乌布酒店（区域示意）",
        "lat": -8.512,
        "lng": 115.266,
        "kind": "hotel",
        "photoKey": "ubud-hotel",
        "note": "推荐9/29、9/30、10/1同酒店连住三晚；照片为Maya Ubud住宿风格参考，尚未选定酒店。"
      }
    ]
  },
  {
    "date": "9/30",
    "title": "乌布 · 经典景点待筛选",
    "stay": "住：乌布 · 第2晚",
    "path": "乌布酒店 ↔ 经典备选景点（尚未排顺序）",
    "detail": "先看照片再挑想去的地方。皇宫、圣猴森林、市场、莲花寺、梯田、圣泉寺等均可选，不再沿用旧的景点限制。",
    "note": "“乌布备选”中的地点全部是候选，勾选不会自动排满一天。确定取舍后再按片区和酒店位置安排。",
    "timeline": [
      [
        "09:00—10:00",
        "早餐，不强制早起"
      ],
      [
        "上午至下午",
        "乌布经典景点与活动待筛选；每半天集中一个片区"
      ],
      [
        "下午或傍晚",
        "为酒店泳池、休息留一段时间"
      ],
      [
        "晚上",
        "乌布或酒店晚餐"
      ]
    ],
    "points": [
      {
        "name": "乌布酒店（区域示意）",
        "lat": -8.512,
        "lng": 115.266,
        "kind": "hotel",
        "photoKey": "ubud-hotel",
        "note": "推荐9/29、9/30、10/1同酒店连住三晚；照片为Maya Ubud住宿风格参考，尚未选定酒店。"
      }
    ]
  },
  {
    "date": "10/1",
    "title": "乌布 · 风景与活动待筛选",
    "stay": "住：乌布 · 第3晚",
    "path": "乌布酒店 ↔ 周边备选景点（尚未排顺序）",
    "detail": "北部梯田、圣泉寺、ATV、漂流及热门瀑布先列为备选，按你们最终选择分配半天。ATV与漂流不默认都安排。",
    "note": "不再北上罗威纳，不安排海豚。Cretya泡泳池或漂流各会占较长时间，不能与全部经典景点同时叠加。",
    "timeline": [
      [
        "早餐后",
        "按最终选点决定出发时间"
      ],
      [
        "白天",
        "优先同一区域的2—3个点，具体待筛选"
      ],
      [
        "傍晚",
        "返回同一家酒店休息"
      ],
      [
        "晚上",
        "晚餐，整理次日上岛行李"
      ]
    ],
    "points": [
      {
        "name": "乌布酒店（区域示意）",
        "lat": -8.512,
        "lng": 115.266,
        "kind": "hotel",
        "photoKey": "ubud-hotel",
        "note": "推荐9/29、9/30、10/1同酒店连住三晚；照片为Maya Ubud住宿风格参考，尚未选定酒店。"
      }
    ]
  },
  {
    "date": "10/2",
    "title": "佩尼达 · 东线与过夜",
    "stay": "住：佩尼达北岸",
    "path": "乌布 → 沙努尔 ⇢ 佩尼达 → Diamond → Atuh → 北岸酒店",
    "detail": "早餐后去码头，以10:30左右快船为目标。上岛后吃饭、寄存行李，下午走东线，晚上住岛上，为第二天早场浮潜留出空间。",
    "note": "Diamond以观景为主，Atuh再考虑下海滩，不强求两处都爬到底。树屋可替换部分停留；北岸酒店和港口均为区域示意。",
    "points": [
      {
        "name": "乌布酒店（区域示意）",
        "lat": -8.512,
        "lng": 115.266,
        "kind": "hotel",
        "photoKey": "ubud-hotel",
        "note": "推荐9/29、9/30、10/1同酒店连住三晚；照片为Maya Ubud住宿风格参考，尚未选定酒店。"
      },
      {
        "name": "沙努尔码头",
        "lat": -8.6718,
        "lng": 115.2632,
        "kind": "transport",
        "photoKey": "sanur-port"
      },
      {
        "name": "Banjar Nyuh码头（示意）",
        "lat": -8.6738,
        "lng": 115.4864,
        "kind": "transport",
        "note": "实际上下船港口按所订船公司确认。",
        "viaSea": true,
        "photoKey": "penida-port"
      },
      {
        "name": "Diamond 钻石海滩",
        "lat": -8.7761,
        "lng": 115.6186,
        "note": "14:00—15:00观景拍照，默认不全程下到沙滩。",
        "photoKey": "diamond"
      },
      {
        "name": "Atuh 海滩",
        "lat": -8.7725,
        "lng": 115.6225,
        "note": "15:00—16:30，体力合适时下去坐坐；需预留上下台阶时间。",
        "photoKey": "atuh"
      },
      {
        "name": "佩尼达北岸住宿区",
        "lat": -8.676,
        "lng": 115.503,
        "kind": "hotel",
        "note": "10/2住一晚，选择方便次日浮潜集合的住宿；具体酒店待选。",
        "photoKey": "penida-hotel"
      }
    ],
    "timeline": [
      [
        "06:45—07:45",
        "早餐、退房"
      ],
      [
        "07:45—09:30",
        "包车往沙努尔码头；偏远酒店需更早出发"
      ],
      [
        "09:30—10:30",
        "报到、行李交接、候船，以10:30左右去程船为核对目标"
      ],
      [
        "10:30—11:15左右",
        "快船上岛，船程受海况影响"
      ],
      [
        "11:15—12:30",
        "下船、接司机，行李交由确认好的酒店/车辆保管，午餐"
      ],
      [
        "12:30—14:00",
        "往东线，按约1.5小时预留，实际看港口与路况"
      ],
      [
        "14:00—15:00",
        "Diamond钻石海滩观景、拍照；主方案不全程下到沙滩"
      ],
      [
        "15:00—16:30",
        "Atuh海滩，体力与台阶情况合适时下去坐坐；两处不都爬到底"
      ],
      [
        "16:30—18:30",
        "返回北岸酒店、正式入住，给返程交通留余量"
      ],
      [
        "18:30—20:00",
        "附近晚餐、海边或酒店休息"
      ]
    ]
  },
  {
    "date": "10/3",
    "title": "Manta · 精灵断崖 · 返主岛",
    "stay": "住：金巴兰度假村 · 第1晚",
    "path": "北岸 ⇢ Manta浮潜 ⇢ 北岸 → 精灵断崖 → 码头 ⇢ 沙努尔 → 度假村",
    "detail": "争取08:00左右早场浮潜，洗漱午餐后只锁定精灵断崖崖顶。按16:30左右返程船倒推回港时间，晚上入住金巴兰度假村。",
    "note": "08:00浮潜尚未预订，是本日关键衔接。若只能订更晚场次，需重排陆地行程；破碎海滩和天神浴池不硬塞。Manta Point与Bay订前须区分。",
    "points": [
      {
        "name": "佩尼达北岸住宿区",
        "lat": -8.676,
        "lng": 115.503,
        "kind": "hotel",
        "note": "10/2住一晚，选择方便次日浮潜集合的住宿；具体酒店待选。",
        "photoKey": "penida-hotel"
      },
      {
        "name": "Banjar Nyuh码头（示意）",
        "lat": -8.6738,
        "lng": 115.4864,
        "kind": "transport",
        "note": "实际上下船港口按所订船公司确认。",
        "photoKey": "penida-port"
      },
      {
        "name": "Manta Point（海域示意）",
        "lat": -8.79547,
        "lng": 115.52553,
        "viaSea": true,
        "img": "images/snorkel.jpg",
        "note": "约08:00—11:00浮潜；此处标注Point，不代表Bay，实际点位按套餐及海况确认，不能保证遇见魔鬼鱼。"
      },
      {
        "name": "Banjar Nyuh码头（示意）",
        "lat": -8.6738,
        "lng": 115.4864,
        "kind": "transport",
        "note": "实际上下船港口按所订船公司确认。",
        "viaSea": true,
        "photoKey": "penida-port"
      },
      {
        "name": "精灵断崖 Kelingking",
        "lat": -8.7523,
        "lng": 115.4726,
        "img": "images/kelingking.jpg",
        "note": "13:30—14:15崖顶观景，不下海滩。"
      },
      {
        "name": "Banjar Nyuh码头（示意）",
        "lat": -8.6738,
        "lng": 115.4864,
        "kind": "transport",
        "note": "实际上下船港口按所订船公司确认。",
        "photoKey": "penida-port"
      },
      {
        "name": "沙努尔码头",
        "lat": -8.6718,
        "lng": 115.2632,
        "kind": "transport",
        "viaSea": true,
        "photoKey": "sanur-port"
      },
      {
        "name": "金巴兰度假村（区域示意）",
        "lat": -8.7862167,
        "lng": 115.1392722,
        "kind": "hotel",
        "photoKey": "jimbaran-resort",
        "photoCaption": "AYANA金巴兰度假区实景 · 住宿参考，酒店未选定",
        "note": "10/3、10/4同酒店连住两晚。点位以AYANA所在区域示意，照片为AYANA度假区参考；不是已预订酒店。"
      }
    ],
    "timeline": [
      [
        "06:30—07:15",
        "早餐、退房，行李寄存/交司机，需预先落实"
      ],
      [
        "07:15—08:00",
        "到浮潜集合点、装备与说明"
      ],
      [
        "08:00—11:00左右",
        "浮潜，优先核对Manta Point早场；Point/Bay明确区别，海况决定实际点位"
      ],
      [
        "11:00—12:15",
        "洗澡、换衣、午餐"
      ],
      [
        "12:15—13:30",
        "赴精灵断崖，按路况调整"
      ],
      [
        "13:30—14:15",
        "精灵断崖崖顶观景，不下海滩"
      ],
      [
        "14:15—15:30/15:45",
        "回实际返程码头，取行李交接安排在既定路线内"
      ],
      [
        "15:30/15:45—16:30",
        "报到候船，以16:30左右返程为核对目标"
      ],
      [
        "16:30—17:15左右",
        "快船回沙努尔"
      ],
      [
        "17:15—18:00",
        "下船、取行李、接车"
      ],
      [
        "18:00—20:00左右",
        "前往金巴兰度假村并办理入住，车程按最终酒店确认"
      ],
      [
        "入住后",
        "晚餐、休息"
      ]
    ]
  },
  {
    "date": "10/4",
    "title": "把一整天留给度假村",
    "stay": "住：金巴兰同一家度假村 · 第2晚",
    "path": "酒店早餐 → 泳池与海景 → 午休 / SPA → 日落与晚餐",
    "detail": "这是完整的酒店体验日，不强制早起。最多选一次短途外出，按最终酒店位置与体力决定。",
    "note": "酒店为主。金巴兰海滩晚餐为可选，其他南部景点可在“全岛景点”比较，不默认叠加。",
    "points": [
      {
        "name": "金巴兰度假村（区域示意）",
        "lat": -8.7862167,
        "lng": 115.1392722,
        "kind": "hotel",
        "photoKey": "jimbaran-resort",
        "photoCaption": "AYANA金巴兰度假区实景 · 住宿参考，酒店未选定",
        "note": "10/3、10/4同酒店连住两晚。点位以AYANA所在区域示意，照片为AYANA度假区参考；不是已预订酒店。"
      },
      {
        "name": "金巴兰海滩晚餐（可选）",
        "lat": -8.7849,
        "lng": 115.1585,
        "img": "images/jimbaran.jpg",
        "optional": true,
        "branch": true,
        "note": "可替换酒店晚餐，先确认餐厅与实际酒店之间的交通。"
      }
    ],
    "timeline": [
      [
        "08:30—10:00",
        "早餐，不设强制起床时间"
      ],
      [
        "10:00—12:30",
        "泳池、酒店海景设施、拍照、休息"
      ],
      [
        "12:30—14:00",
        "午餐"
      ],
      [
        "14:00—16:30",
        "午休、SPA、酒店设施；活动按酒店实际开放与预约"
      ],
      [
        "16:30—18:30",
        "酒店日落或一次附近短途外出"
      ],
      [
        "18:30—20:00",
        "晚餐"
      ],
      [
        "20:00以后",
        "自由休息"
      ]
    ]
  },
  {
    "date": "10/5",
    "title": "慢慢收尾 · 晚间返程",
    "stay": "晚间离岛 · 航班时刻待补",
    "path": "度假村早餐 → 退房寄存 → 附近休息 → 机场",
    "detail": "上午继续享受酒店，约中午按酒店规定退房、寄存行李。下午在酒店或附近休息，按确切航班倒推送机。",
    "note": "计划起飞前约4—5小时离店、约3小时到机场，航空公司要求优先。22:00航班仅为时间表中的示例，不是已知航班。",
    "points": [
      {
        "name": "金巴兰度假村（区域示意）",
        "lat": -8.7862167,
        "lng": 115.1392722,
        "kind": "hotel",
        "photoKey": "jimbaran-resort",
        "photoCaption": "AYANA金巴兰度假区实景 · 住宿参考，酒店未选定",
        "note": "10/3、10/4同酒店连住两晚。点位以AYANA所在区域示意，照片为AYANA度假区参考；不是已预订酒店。"
      },
      {
        "name": "登巴萨机场 DPS",
        "lat": -8.7467,
        "lng": 115.1668,
        "kind": "transport",
        "photoKey": "airport"
      }
    ],
    "timeline": [
      [
        "08:30—10:00",
        "早餐"
      ],
      [
        "10:00—11:30",
        "泳池/附近散步，收拾行李"
      ],
      [
        "约12:00",
        "按酒店规定退房、寄存行李"
      ],
      [
        "12:00—14:00",
        "午餐"
      ],
      [
        "下午至送机前",
        "在酒店或附近休息，退房后设施和洗澡使用政策需确认"
      ],
      [
        "起飞前约4—5小时",
        "从酒店出发去机场；按最终酒店、交通和航空公司要求倒推"
      ],
      [
        "起飞前约3小时",
        "以到达机场办理国际航班手续为规划目标，航空公司要求优先"
      ]
    ]
  }
];
const EXTRA_POINTS = [];

const routeLayer = L.layerGroup();
const itineraryPanel = document.getElementById('itineraryPanel');
const legend = document.querySelector('.legend');
const spotsToggle = document.getElementById('spotsToggle');
const routeToggle = document.getElementById('routeToggle');
const viewSubtitle = document.getElementById('viewSubtitle');
let selectedDay = null;
let currentView = 'route';

function popupFor(point, day) {
  return `<div class="route-popup">${photoMarkup(point)}<strong>${point.name}</strong><span>${day.date} · ${day.title}</span>${point.note?`<p>${point.note}</p>`:''}${point.mapUrl?`<a href="${point.mapUrl}" target="_blank" rel="noopener">在 Google 地图查看位置 ↗</a>`:''}</div>`;
}

function addArrow(from,to,color) {
  const lat=(from.lat+to.lat)/2, lng=(from.lng+to.lng)/2;
  const angle=Math.atan2(to.lng-from.lng,-(to.lat-from.lat))*180/Math.PI;
  return L.marker([lat,lng],{interactive:false,icon:L.divIcon({className:'route-arrow',html:`<span style="color:${color};transform:rotate(${angle}deg)">➤</span>`,iconSize:[22,22],iconAnchor:[11,11]})});
}

function drawRoute(dayIndex=null) {
  routeLayer.clearLayers();
  const routeBounds = L.latLngBounds();
  const days=dayIndex===null?ROUTE_DAYS:[ROUTE_DAYS[dayIndex]];
  days.forEach((day)=>{
    const i=ROUTE_DAYS.indexOf(day), color=DAY_COLORS[i];
    const routePoints=day.points.filter(p=>!p.branch);
    routePoints.forEach((p,j)=>{
      if(j===0) return;
      const from=routePoints[j-1];
      L.polyline([[from.lat,from.lng],[p.lat,p.lng]],{color,weight:dayIndex===null?4:6,opacity:.86,dashArray:p.viaSea?'9 7':null,lineCap:'round'}).addTo(routeLayer);
    });
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
  const mobile=window.innerWidth<768;
  const options=mobile
    ? {paddingTopLeft:[35,135],paddingBottomRight:[35,itineraryPanel.getBoundingClientRect().height+45],maxZoom:dayIndex===null?9:12}
    : {paddingTopLeft:[440,145],paddingBottomRight:[40,40],maxZoom:dayIndex===null?9:12};
  map.fitBounds(routeBounds,options);
}

function renderPanel() {
  itineraryPanel.innerHTML=`
    <div class="trip-eyebrow">2026.09.19 更新 · 六晚参考行程</div>
    <h2>乌布、佩尼达、金巴兰</h2>
    <p class="trip-intro">不再看海豚 · 乌布经典先看图筛选 · 佩尼达确定过夜 · 最后两晚度假村</p>
    <div class="trip-badges"><span>乌布 3晚</span><span>佩尼达 1晚</span><span>金巴兰 2晚</span></div>
    <button type="button" class="open-ubud" onclick="setView('ubud')">查看12个乌布备选 →</button>
    <p class="trip-note">当地时间＝北京时间 · 场次与船班待预订</p>
    <details class="map-help"><summary>地图与时间说明</summary><p class="route-key">以下为规划窗口，选定酒店后微调。路线为地理示意，不代表实际公路或航线；虚线为海上转场。◇ 是备选，不连入主线。住宿点是区域示意，具体酒店待选。</p></details>
    <div class="timeline-tools"><button type="button" id="toggleTimelines" aria-expanded="false">展开全部时间表</button><span>7天 · 6晚 · 3处住宿</span></div>
    <div class="day-tabs"><button data-day="all" aria-pressed="true">全部</button>${ROUTE_DAYS.map((d,i)=>`<button data-day="${i}" aria-pressed="false">${d.date}</button>`).join('')}</div>
    <div class="day-list">${ROUTE_DAYS.map((d,i)=>`
      <article class="day-card" data-card="${i}">
        <button class="day-heading" data-focus="${i}"><span class="day-dot" style="background:${DAY_COLORS[i]}"></span><strong>${d.date} · ${d.title}</strong><small>定位地图</small></button>
        <p class="day-path">${d.path}</p><span class="day-stay">${d.stay}</span>
        <p class="day-detail">${d.detail}</p>
        <details class="day-schedule"><summary>查看完整时间表 · ${d.timeline.length}个时段</summary><ol class="timeline">${d.timeline.map(([time,activity])=>`<li><span class="timeline-time">${time}</span><span class="timeline-activity">${activity}</span></li>`).join('')}</ol></details>
        <p class="day-note">${d.note}</p>
      </article>`).join('')}</div>
    <details class="trip-extras"><summary>佩尼达两天怎么分</summary><p>10/2早餐后从乌布去沙努尔，以10:30左右快船上岛，下午走Diamond＋Atuh东线，住北岸。10/3从岛上参加早场浮潜，再看精灵断崖，下午返主岛。两天一晚并非两个整日，破碎海滩与天神浴池不硬塞。</p></details>
    <details class="trip-extras"><summary>乌布为什么暂不排死</summary><p>皇宫、寺庙、梯田、森林、瀑布与活动都可以比较。请先在“乌布备选”选出想去的点，再按片区组合进9/30和10/1。取消罗威纳后不为Aling-Aling专程北上；水明漾仅保留在全岛资料中。</p></details>
    <details class="trip-extras"><summary>订票前要落实的时间</summary><p>首晚直达乌布的接机与深夜入住；乌布选点和活动场次；10/2去程船；10/3约08:00浮潜及16:30返程船；岛上行李寄存交接。若浮潜只能订更晚场次，需重排陆地与回港时间。10/5航班时刻待补。</p><p><a href="https://oceanspeedfastboat.com/price-schedule" target="_blank" rel="noopener">船班参考 ↗</a> · <a href="photo-credits.html" target="_blank" rel="noopener">图片来源与授权 ↗</a></p></details>`;
  itineraryPanel.querySelectorAll('[data-day]').forEach(btn=>btn.addEventListener('click',()=>focusDay(btn.dataset.day)));
  itineraryPanel.querySelectorAll('[data-focus]').forEach(btn=>btn.addEventListener('click',()=>focusDay(btn.dataset.focus)));
  const toggle=itineraryPanel.querySelector('#toggleTimelines');
  toggle.addEventListener('click',()=>{
    const open=toggle.getAttribute('aria-expanded')!=='true';
    itineraryPanel.querySelectorAll('.day-schedule').forEach(d=>d.open=open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'收起全部时间表':'展开全部时间表';
  });
}

function focusDay(value) {
  selectedDay=value==='all'?null:Number(value);
  itineraryPanel.querySelectorAll('[data-day]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.day==='all'&&selectedDay===null)||Number(b.dataset.day)===selectedDay)));
  itineraryPanel.querySelectorAll('[data-card]').forEach(c=>c.hidden=selectedDay!==null&&Number(c.dataset.card)!==selectedDay);
  if(selectedDay!==null){
    itineraryPanel.querySelector(`[data-card="${selectedDay}"] .day-schedule`).open=true;
  }
  drawRoute(selectedDay);
  itineraryPanel.querySelector('.day-tabs').scrollIntoView({block:'start'});
}

function setView(view) {
  currentView=view;
  hideCard();
  const route=view==='route';
  const ubud=view==='ubud';
  document.body.classList.toggle('route-view',route);
  document.body.classList.toggle('ubud-view',ubud);
  itineraryPanel.classList.remove('catalog-expanded');
  routeToggle.setAttribute('aria-pressed',String(route));
  spotsToggle.setAttribute('aria-pressed',String(view==='spots'));
  document.getElementById('ubudToggle').setAttribute('aria-pressed',String(ubud));
  itineraryPanel.hidden=view==='spots';
  legend.hidden=view!=='spots';
  for(const layer of [spotsLayer,routeLayer,ubudLayer])if(map.hasLayer(layer))map.removeLayer(layer);
  if(route){selectedDay=null;renderPanel();routeLayer.addTo(map);drawRoute();viewSubtitle.textContent='9.29—10.5 · 乌布3晚 · 佩尼达1晚 · 金巴兰2晚';}
  else if(ubud){renderUbudPanel();ubudLayer.addTo(map);drawUbudOptions();viewSubtitle.textContent='12个经典与热门备选 · 看图比较，再排路线';}
  else {spotsLayer.addTo(map);map.setView([-8.42,115.32],10);viewSubtitle.textContent='全岛资料库 · 照片与玩法 · 不等于本次行程';}
  setTimeout(()=>map.invalidateSize(),50);
}

spotsToggle.addEventListener('click',()=>setView('spots'));
routeToggle.addEventListener('click',()=>setView('route'));
