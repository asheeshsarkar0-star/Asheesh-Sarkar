function openMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(0)";
}
function closeMenu(){
  document.getElementById("mobileMenu").style.transform="translateX(100%)";
}

function openItem(name){
  alert(name + " open hoga (future me full page / upload system)");
}

function sendMessage(e){
  e.preventDefault();
  alert("Message sent successfully!");
}
