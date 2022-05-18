var firebaseConfig = {
    apiKey: "AIzaSyB_gdxXtHi7lPpjMr50jpjgEbRLniKIL7c",
    authDomain: "project-93-94-95-96-47538.firebaseapp.com",
    databaseURL: "https://project-93-94-95-96-47538-default-rtdb.firebaseio.com",
    projectId: "project-93-94-95-96-47538",
    storageBucket: "project-93-94-95-96-47538.appspot.com",
    messagingSenderId: "177001370953",
    appId: "1:177001370953:web:c1ed24c5ac68311c0fb698"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addroom(){
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("room_name",roomname);
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

    
}