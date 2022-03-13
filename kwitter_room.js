user_name = localStorage.getItem("user_name");
document.getElementById("user_nameh").innerHTML=USer_name;

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAbx0YyQwEoDDka-fTkoO_oBG6BrMXYZU8",
    authDomain: "kwitter-d4eed.firebaseapp.com",
    databaseURL: "https://kwitter-d4eed-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4eed",
    storageBucket: "kwitter-d4eed.appspot.com",
    messagingSenderId: "1069997693399",
    appId: "1:1069997693399:web:af90a13c74572394bc5392"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
