
var firebaseConfig = {
      apiKey: "AIzaSyAFC7Ka2nkzilvH5pKSDhk_ltXUz5ibuq4",
      authDomain: "kwitter-ee4b8.firebaseapp.com",
      databaseURL: "https://kwitter-ee4b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee4b8",
      storageBucket: "kwitter-ee4b8.appspot.com",
      messagingSenderId: "987694590254",
      appId: "1:987694590254:web:aa2b6827e391ba2dc872bf",
      measurementId: "G-5DH0E6T9BQ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name'id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function Addroom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , Room_name);

      window.location = "index.html";
}
