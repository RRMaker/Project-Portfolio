// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

      apiKey: "AIzaSyC9c9WUeVq7DE46Dl-iuMgFIZnPvJtjFqw",
    
      authDomain: "kwitter2-168ca.firebaseapp.com",
    
      databaseURL: "https://kwitter2-168ca-default-rtdb.firebaseio.com",
    
      projectId: "kwitter2-168ca",
    
      storageBucket: "kwitter2-168ca.appspot.com",
    
      messagingSenderId: "328621234627",
    
      appId: "1:328621234627:web:3d4b0a2c35e891ad064576",
    
      measurementId: "G-KM2ETE5XCF"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
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

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}