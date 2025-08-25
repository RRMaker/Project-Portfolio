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

firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name = "+Room_names);
row = "<div class='room_name' id ='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData(); 

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}