const PASSWORD = "asheesh@admin"; // 🔥 CHANGE THIS

function login() {
  const pass = document.getElementById("adminPass").value;
  if (pass === PASSWORD) {
    document.getElementById("panel").style.display = "block";
    alert("Login Successful");
  } else {
    alert("Wrong Password");
  }
}

function uploadMedia() {
  const url = document.getElementById("mediaUrl").value;
  const type = document.getElementById("mediaType").value;

  if (!url) return alert("Enter URL");

  db.ref("gallery").push({
    url,
    type,
    time: Date.now()
  });

  alert("Uploaded Successfully");
  document.getElementById("mediaUrl").value = "";
}
