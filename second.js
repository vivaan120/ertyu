var firebaseConfig = {
  apiKey: "AIzaSyB7DwKlxGvckWScMCeooXCjc4uOySLGn6I",
  authDomain: "let-s-chat-2dc93.firebaseapp.com",
  databaseURL: "https://let-s-chat-2dc93-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-2dc93",
  storageBucket: "let-s-chat-2dc93.appspot.com",
  messagingSenderId: "51185969473",
  appId: "1:51185969473:web:c4eebc2d6fd840b38a59c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

user_name = localStorage.getItem("user_name");
document.getElementById("balaaa").innerHTML="Welcome "+ user_name+"!!"; 

function addRoom() {
  room_name=document.getElementById("add_room").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log(Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='gotoroom(this.id)'>"+Room_names+"</div>";
  document.getElementById("output").innerHTML+=row;
  });});}
getData();

function gotoroom(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="third.html";
}
