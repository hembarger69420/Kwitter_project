
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDAvDZu6wAtQpEXyV2kwgnIpTQP0Q2b1hc",
      authDomain: "kwitter-fard.firebaseapp.com",
      databaseURL: "https://kwitter-fard-default-rtdb.firebaseio.com",
      projectId: "kwitter-fard",
      storageBucket: "kwitter-fard.appspot.com",
      messagingSenderId: "746851091619",
      appId: "1:746851091619:web:0aca7fbf18856acbedeb16"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
   

    document.getElementById("user_name").innerHTML = " Welcome! " + user_name + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
