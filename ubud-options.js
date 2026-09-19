// 全部为备选；勾选只用于比较，不会自动排入某一天。
const UBUD_OPTIONS = [
  {id:'palace',name:'乌布皇宫',group:'镇内经典',duration:'30—45分钟',lat:-8.5069,lng:115.2625,img:'images/ubudpalace.jpg',label:'经典地标',play:'巴厘式宫门、石雕和庭院；就在镇中心，适合和市场、莲花寺一起逛。',fit:'想认识乌布的经典建筑，停留短、容易组合。',bad:'开放参观区域不大；白天参观与晚间舞蹈演出是两种体验，演出场次另查。',refs:['ubudguide']},
  {id:'monkey',name:'圣猴森林',group:'镇内经典',duration:'1—1.5小时',lat:-8.5187,lng:115.2589,img:'images/monkey.jpg',label:'经典自然景点',play:'古树、苔藓石桥、林间寺庙外观和长尾猕猴，重点是森林环境与动物。',fit:'乌布第一次游玩的代表性景点，适合步行探索。',bad:'猴子会靠近随身物品，不喂食、不触摸；官网目前09:00—18:00开放，17:00最后入场。',refs:['monkeyofficial']},
  {id:'market',name:'乌布集市',group:'镇内经典',duration:'30—60分钟',lat:-8.5075,lng:115.263,img:'images/ubud-market.jpg',label:'经典街区',play:'藤编包、木雕、布艺和纪念品摊位；看手工艺、随意逛店。',fit:'和皇宫一起顺路逛，不需要单独占半天。',bad:'商品与报价差异大，按喜欢程度比价；不以购物数量作为行程目标。',refs:['ubudguide']},
  {id:'saraswati',name:'莲花寺 / 乌布水宫',oldName:'乌布水宫',group:'镇内经典',duration:'30—45分钟',lat:-8.5067,lng:115.2605,img:'images/waterpalace-detail.jpg',label:'经典建筑',play:'莲池、石桥、精细雕刻的门廊。游客主要看Saraswati寺庙外院的水宫景观。',fit:'喜欢建筑和照片，和皇宫、市场集中在同一片区。',bad:'不是东部的Tirta Gangga水上皇宫；内部寺庙不对游客开放，按现场要求着装。',refs:['waterpalaceofficial']},
  {id:'campuhan',name:'Campuhan 山脊步道',group:'镇内经典',duration:'45—90分钟',lat:-8.4996,lng:115.2532,img:'images/campuhan.jpg',label:'经典散步线',play:'沿绿色山脊走路，看谷地、椰树和开阔天空，适合轻松散步。',fit:'想在景点之间加一点步行和自然风景。',bad:'部分路段缺少遮阴；清晨或傍晚较合适，不必走完全程。',refs:['ubudguide']},
  {id:'terraces',name:'德格拉朗梯田',group:'北部经典',duration:'1—1.5小时',lat:-8.4312,lng:115.2778,img:'images/tegallalang.jpg',label:'经典风景',play:'层层梯田、椰树、田埂步道和观景台，是乌布周边有代表性的景观。',fit:'第一次来乌布、想看田园风景或拍照。',bad:'台阶和付费拍照设施较多；秋千另计时间，梯田观景不等于Cretya泳池套餐。',refs:['ubudnorth']},
  {id:'tirta',name:'圣泉寺',group:'北部经典',duration:'参观约1小时',lat:-8.416,lng:115.3153,img:'images/tirta-pools.jpg',label:'经典文化景点',play:'圣泉池、泉眼与巴厘传统寺庙建筑；可以参观当地净化仪式。',fit:'想看巴厘文化与寺庙，通常和德格拉朗组合。',bad:'参观不等于必须下水；若参加净化仪式，应另留排队与更衣时间。',refs:['ubudnorth']},
  {id:'cretya',name:'Alas Harum / Cretya Ubud',group:'北部经典',duration:'观景1.5小时／泡泳池半天',lat:-8.4394,lng:115.2794,img:'images/cretya.webp',label:'热门日间俱乐部',play:'梯田景观、设计泳池、餐饮和拍照设施；Cretya是日间俱乐部体验。',fit:'更想边看梯田边喝东西、泡泳池，愿意花半天体验。',bad:'园区门票、秋千、泳池与座位消费可能不同；别把它当作免费的自然梯田，也别和酒店泳池安排重复。',refs:['cretyaofficial']},
  {id:'tegenungan',name:'Tegenungan 瀑布',group:'热门瀑布',duration:'1—1.5小时',lat:-8.5756,lng:115.2897,img:'images/waterfall.jpg',label:'经典瀑布',play:'开阔河谷中的瀑布、观景台与下到河谷的阶梯，水量影响观感。',fit:'希望加入一处知名瀑布，偏向看整体风景。',bad:'往返有台阶；雨后水况变化大，是否下水听现场指引。',refs:['gobaligo']},
  {id:'kanto',name:'Kanto Lampo 瀑布',group:'热门瀑布',duration:'约1小时，排队另计',lat:-8.5327,lng:115.3329,img:'images/kanto-lampo.jpg',label:'热门拍照瀑布',play:'水流铺在层叠的黑色岩石上，画面和传统直落瀑布不同。',fit:'更看重瀑布照片与岩石水流的画面。',bad:'拍照点可能排队；岩石湿滑，不按固定停留时间保证能拍到同款照片。',refs:['kantoofficial']},
  {id:'atv',name:'Kuber ATV 越野',group:'活动体验',duration:'整块约3小时',lat:-8.46,lng:115.3,img:'images/kuber.jpg',label:'你们已感兴趣',play:'骑四轮越野车穿过泥地、隧道与林间线路；不是单纯站着看景。',fit:'四人一起玩活动；具体基地和线路选定后再定接送。',bad:'骑行时长随套餐约1—1.5小时；换衣、洗澡、午餐和等待需另计。地图位置为基地参考。',refs:['kuber官方']},
  {id:'rafting',name:'阿勇河漂流',group:'活动体验',duration:'约半天',lat:-8.478,lng:115.245,img:'images/rafting.jpg',label:'经典户外活动',play:'沿河谷漂流，看雨林、河岸石刻和水流，实际河上通常约2小时。',fit:'想要更多参与感的活动；与ATV比较后选择是否都玩。',bad:'上下河谷和接送也花时间；选择它就应让出半天，不和所有经典景点同时叠加。',refs:['raftingofficial']}
];

const POI_PHOTO_KEYS = {
 '水明漾':'seminyak','Melasti 海滩':'melasti','海神庙':'tanah-lot','Pandawa 海滩':'pandawa',
 'SPA（乌布/全岛）':'ubud-spa','Tukad Cepung 洞穴瀑布':'tukad-cepung','乌布集市':'ubud-market',
 'Kuber ATV 越野':'kuber','彭丽普兰村':'penglipuran','天空之门 Lempuyang':'lempuyang',
 '蒂尔塔冈加水上皇宫':'tirta-gangga','巴杜尔火山 · 金塔马尼':'batur','布拉坦湖水神庙':'ulun-danu',
 '罗威纳追海豚':'lovina','钻石海滩':'diamond','Atuh 海滩':'atuh','蓝梦岛 · 恶魔的眼泪':'devils-tears',
 '金银岛 · 黄桥':'yellow-bridge','✈ 登巴萨机场 DPS':'airport'
};

function preparePhotoPois(pois, notes) {
  for(const p of pois)if(p.img)LEGACY_PHOTOS[p.img]={src:p.img,source:notes[p.refs?.[0]]?.u||'',credit:'前期小红书参考图，相关笔记见景点资料',license:'图片版权归原作者',kind:'前期实景参考图'};
  Object.assign(notes,{
    ubudguide:{t:'印尼旅游官网 · 乌布经典景点',u:'https://www.indonesia.travel/th/en/destination/bali-nusa-tenggara/bali/ubud'},
    ubudnorth:{t:'印尼旅游官网 · 乌布周边与圣泉寺',u:'https://www.indonesia.travel/gb/en/travel-ideas/adventure/5-fun-destinations-to-visit-around-ubud-bali'},
    monkeyofficial:{t:'圣猴森林官网',u:'https://monkeyforestubud.com/visit/'},
    waterpalaceofficial:{t:'乌布水宫官网 · 参观范围',u:'https://ubudwaterpalace.com/do-dont/'},
    cretyaofficial:{t:'Alas Harum / Cretya官网',u:'https://alasharum.com/en'},
    kantoofficial:{t:'Kanto Lampo官网',u:'https://kantolampo.com/'},
    'kuber官方':{t:'Kuber ATV官网',u:'https://kuberbaliatv.com/'},
    raftingofficial:{t:'Sobek阿勇河漂流官网',u:'https://www.balisobek.com/rafting-ayung/'}
  });
  for(const p of pois) if(POI_PHOTO_KEYS[p.name]) {p.photoKey=POI_PHOTO_KEYS[p.name];p.img=PHOTO_LIBRARY[p.photoKey].src;}
  for(const c of UBUD_OPTIONS){
    const old=pois.find(p=>p.name===c.name||p.name===c.oldName);
    if(old) {c.photoSource=notes[old.refs?.[0]]?.u||'';Object.assign(old,c,{region:'ubud'});}
    else pois.push({...c,region:'ubud'});
  }
  const dolphins=pois.find(p=>p.name==='罗威纳追海豚');
  if(dolphins){dolphins.play='罗威纳海岸与海豚出海体验；本次已取消，不在行程中。';dolphins.fit='仅保留全岛资料供比较';dolphins.bad='不必为本次路线北上；照片为罗威纳海岸，不代表海豚一定出现。';}
  const spa=pois.find(p=>p.name==='SPA（乌布/全岛）');
  if(spa){spa.play='按摩、放松与酒店SPA，照片为Maya Ubud场景参考。';spa.fit='活动结束后休息，具体店家待选';spa.bad='价格、疗程与预约按实际店家确认，未指定照片中的酒店。';}
}
