// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtoFG0U0oKWLpuLB_IcJu-2wNTWy0HLVg",
    authDomain: "chat-93660.firebaseapp.com",
    databaseURL: "https://chat-93660-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-93660",
    storageBucket: "chat-93660.appspot.com",
    messagingSenderId: "654283406396",
    appId: "1:654283406396:web:581576964b6217f3279739"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()
const submitButton = document.querySelector("#submit")
const chat = document.querySelector(".chat")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function save() {
    var username = document.querySelector("#username").value
    var text = document.querySelector("#text").value
    var ID = getRandomInt(99999999).toString()

    if (username != "owner")
    {
        if (username != "owner.ID.write.js") {
            database.ref('mails/' + ID).set({
                username: username,
                text: text,
                special: false
            })
        } else {
            database.ref('mails/' + ID).set({
                username: "owner",
                text: text,
                special: true
            }) 
        }


        
    } else {
        clientSend("server>>> you can`t to be owner",true,true)
    }
}

function clientSend(text,server,error = false) {
    var send = document.createElement("p")
    send.innerText = text
    if (server === true)
    {
        send.classList.add("server");
        if (error === true) 
        {
            send.classList.add("client-error")
        }
    } else {
        send.classList.add("message");
    }
    chat.appendChild(send);
}

var i = 0;

submitButton.addEventListener("click",save)
database.ref('mails/').on('child_added', (snapshot, prevChildKey) => {
    const newSend = snapshot.val()
    clientSend(`${newSend.username}>>>${newSend.text}`,newSend.special)
})