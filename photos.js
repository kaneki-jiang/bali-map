const LEGACY_PHOTOS={};
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function photoInfo(point){
  const found=point.photoKey?PHOTO_LIBRARY[point.photoKey]:(Object.values(PHOTO_LIBRARY).find(p=>p.src===point.img)||LEGACY_PHOTOS[point.img]);
  const source=found?.source || point.photoSource || (point.refs&&typeof NOTES!=='undefined'?NOTES[point.refs[0]]?.u:'');
  return {...found,src:found?.src||point.img,caption:point.photoCaption||found?.caption||point.name,source,credit:found?.credit||'前期小红书参考图，相关笔记见景点资料',license:found?.license||'图片版权归原作者',kind:found?.kind||'前期实景参考图'};
}
function photoMarkup(point){
  const p=photoInfo(point);
  if(!p.src) return '<p class="photo-missing">图片资料待补</p>';
  return `<figure class="place-photo"><button type="button" class="photo-open" data-full-photo="${escapeHtml(p.src)}" data-photo-caption="${escapeHtml(p.caption)}" data-photo-source="${escapeHtml(p.source)}" data-photo-credit="${escapeHtml(p.credit+' · '+p.license)}" aria-label="查看${escapeHtml(point.name)}大图"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.caption)}" loading="lazy" decoding="async"><span>查看大图 ↗</span></button><figcaption>${escapeHtml(p.caption)}${p.source?` <a href="${escapeHtml(p.source)}" target="_blank" rel="noopener">图片来源</a>`:''}</figcaption></figure>`;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-full-photo]');
  if(!button) return;
  const dialog=document.getElementById('photoDialog');
  dialog.querySelector('img').src=button.dataset.fullPhoto;
  dialog.querySelector('img').alt=button.dataset.photoCaption;
  dialog.querySelector('.photo-dialog-caption').textContent=button.dataset.photoCaption;
  dialog.querySelector('.photo-dialog-credit').textContent=button.dataset.photoCredit;
  const source=dialog.querySelector('a');source.href=button.dataset.photoSource||'#';source.hidden=!button.dataset.photoSource;
  dialog.showModal();
});
document.addEventListener('DOMContentLoaded',()=>{
  const dialog=document.getElementById('photoDialog');
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
});
