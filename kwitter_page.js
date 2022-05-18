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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        meassge:msg,
        like:0

    });
    document.getElementById("msg").value="";
    
}