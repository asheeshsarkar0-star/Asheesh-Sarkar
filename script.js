function openMenu(){
  document.getElementById("mobileMenu").style.right="0";
}
function closeMenu(){
  document.getElementById("mobileMenu").style.right="-100%";
}

function openImg(src){
  document.getElementById("viewer").style.display="flex";
  document.getElementById("viewerImg").src=src;
}
function closeImg(){
  document.getElementById("viewer").style.display="none";
}

function sendMessage(e){
  e.preventDefault();
  alert("Message sent successfully!");
}
