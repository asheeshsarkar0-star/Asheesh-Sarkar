function openMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(0)";
}
function closeMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(100%)";
}

function sendMessage(e){
  e.preventDefault();
  alert("Message sent successfully!");
}

/* FIREBASE MEDIA LOAD */
const gallery = document.getElementById("gallery");

firebase.database().ref("media").on("value", snap=>{
  gallery.innerHTML="";
  snap.forEach(item=>{
    const d=item.val();

    if(d.type==="image"){
      gallery.innerHTML += `<img src="${d.url}" style="width:100%;border-radius:12px">`;
    }

    if(d.type==="video"){
      gallery.innerHTML += `<video controls style="width:100%"><source src="${d.url}"></video>`;
    }

    if(d.type==="audio"){
      gallery.innerHTML += `<audio controls style="width:100%"><source src="${d.url}"></audio>`;
    }
  });
});
