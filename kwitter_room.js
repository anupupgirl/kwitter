var firebaseConfig = {
  apiKey: "AIzaSyCgjljjd53JL61_YrULRTpjvQmj5Xk692o",
  authDomain: "kwitter-854f2.firebaseapp.com",
  databaseURL: "https://kwitter-854f2-default-rtdb.firebaseio.com",
  projectId: "kwitter-854f2",
  storageBucket: "kwitter-854f2.appspot.com",
  messagingSenderId: "77410149412",
  appId: "1:77410149412:web:b61865b5fd0a9a4c45a4b1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("room_name=" + Room_names);
        row =
          "<div class='room_name'id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
