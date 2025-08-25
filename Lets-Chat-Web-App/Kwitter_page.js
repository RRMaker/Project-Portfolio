// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCdlAQgObSYHgm78xFL3vX35QcAqIs1Clk",
  
    authDomain: "lets-chat-web-app-b7794.firebaseapp.com",
  
    projectId: "lets-chat-web-app-b7794",
  
    storageBucket: "lets-chat-web-app-b7794.appspot.com",
  
    messagingSenderId: "618173011767",
  
    appId: "1:618173011767:web:7fce8ba66f944f7f152cb2",
  
    measurementId: "G-FSSM8WLDKW"
  
  };
  
  
// Initialize Firebase

initializeApp(firebaseConfig);

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}