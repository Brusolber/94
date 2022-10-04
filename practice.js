
//AÑADE LOS ENLACES FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyB9AEcwe4nF_5gT1RZKSSUtCUTaCkZ2Q3k",
    authDomain: "pruebaclase-a3199.firebaseapp.com",
    databaseURL: "https://pruebaclase-a3199-default-rtdb.firebaseio.com",
    projectId: "pruebaclase-a3199",
    storageBucket: "pruebaclase-a3199.appspot.com",
    messagingSenderId: "93793309282",
    appId: "1:93793309282:web:ea4a7aa8d88c433a0df73b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser()
  {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
  }