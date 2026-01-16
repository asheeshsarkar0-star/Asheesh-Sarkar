function upload(){
  const file=document.getElementById("file").files[0];
  const type=document.getElementById("type").value;

  const ref=storage.ref("media/"+Date.now()+file.name);
  ref.put(file).then(()=>{
    ref.getDownloadURL().then(url=>{
      db.ref("media").push({url,type});
      alert("Uploaded");
    });
  });
}
