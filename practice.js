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

function addUser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).updated({
        purpose : "adding user"
    });
}