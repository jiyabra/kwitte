//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() 
{
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:message,
         like:0   
      });
      document.getElementById("msg").value = " ";
}
