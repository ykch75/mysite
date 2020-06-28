var database = firebase.database();
let room = "chat_room";
const send = document.getElementById("send");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("output");

const firebaseConfig = {
    apiKey: "AIzaSyBS_AX_xTJxCQYLIsntlBrmVt18gD6NSGo",
    authDomain: "chan-711c9.firebaseapp.com",
    databaseURL: "https://chan-711c9.firebaseio.com",
    projectId: "chan-711c9",
    storageBucket: "chan-711c9.appspot.com",
    messagingSenderId: "106474645077",
    appId: "1:106474645077:web:0f8bf8e94b8f796f8ad6dc",
    measurementId: "G-V6EYLK93GZ"
  };

//送信処理
send.addEventListener('click', function() {
   var now = new Date();
   database.ref(room).push({
       name: name.value,
       message: message.value,
       date: now.getFullYear() + '年' + now.getMonth()+1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
   });
   message.value="";
   name.value="";
});

//受信処理
database.ref(room).on("child_added", function(data) {
   const v = data.val();
   const k = data.key;
   let str = "";
   str += '<div class="name">Title：'+v.name+'</div>';
   str += '<div class="text">Data：'+v.date+'</div>';
   str += '<div class="text">Contents：'+v.message+'</div><hr>';
   output.innerHTML += str;
});
