// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD5pg9b7flLy0Abi5wLDRM4ZiOem_qhQuo",
  
    authDomain: "kwitter-f7766.firebaseapp.com",
  
    databaseURL: "https://kwitter-f7766-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-f7766",
  
    storageBucket: "kwitter-f7766.appspot.com",
  
    messagingSenderId: "865604787320",
  
    appId: "1:865604787320:web:a3e7c76cefac11905ce18d"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

function addUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"Adding User"
});
}