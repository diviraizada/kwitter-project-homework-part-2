const firebaseConfig = {
    apiKey: "AIzaSyAF3HC-VOV9irgyGsXjLhtCbuoPJOiomXA",
    authDomain: "kwitter-84a2e.firebaseapp.com",
    databaseURL: "https://kwitter-84a2e-default-rtdb.firebaseio.com",
    projectId: "kwitter-84a2e",
    storageBucket: "kwitter-84a2e.appspot.com",
    messagingSenderId: "58334729982",
    appId: "1:58334729982:web:a1c2e67ccb988d023b37af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

