const firebaseConfig={
  apiKey:"YOUR_KEY",
  authDomain:"PROJECT.firebaseapp.com",
  projectId:"PROJECT",
  storageBucket:"PROJECT.appspot.com",
  databaseURL:"https://PROJECT.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.database();
const storage=firebase.storage();
