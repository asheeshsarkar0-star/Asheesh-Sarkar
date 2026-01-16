function openMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(0)";
}
function closeMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(100%)";
}

const gallery=document.getElementById("gallery");

db.ref("media").on("value",snap=>{
  gallery.innerHTML="";
  snap.forEach(item=>{
    const d=item.val();
    if(d.type==="image")
      gallery.innerHTML+=`<img src="${d.url}" style="width:100%">`;
    if(d.type==="audio")
      gallery.innerHTML+=`<audio controls src="${d.url}"></audio>`;
    if(d.type==="video")
      gallery.innerHTML+=`<video controls src="${d.url}"></video>`;
  });
});
