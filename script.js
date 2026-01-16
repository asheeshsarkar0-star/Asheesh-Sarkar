// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
}
});

// LOAD GALLERY
const gallery = document.getElementById("gallery");

if (gallery) {
  db.ref("gallery").on("value", snap => {
    gallery.innerHTML = "";
    snap.forEach(item => {
      const data = item.val();
      if (data.type === "image") {
        gallery.innerHTML += `<img src="${data.url}" style="width:100%;border-radius:15px">`;
      } else {
        gallery.innerHTML += `<iframe src="${data.url}" style="width:100%;height:200px;border-radius:15px"></iframe>`;
      }
    });
  });
}
