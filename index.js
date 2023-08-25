var firebaseConfig = {
    apiKey: "AIzaSyCtoFG0U0oKWLpuLB_IcJu-2wNTWy0HLVg",
    authDomain: "chat-93660.firebaseapp.com",
    databaseURL: "https://chat-93660-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-93660",
    storageBucket: "chat-93660.appspot.com",
    messagingSenderId: "654283406396",
    appId: "1:654283406396:web:581576964b6217f3279739"
};

firebase.initializeApp(firebaseConfig);


var database = firebase.database()
const submitButton = document.querySelector("#submit")
const chat = document.querySelector(".chat")
var ID;
database.ref("ID/ID").on("value", (snapshot) => {
    ID = snapshot.val()
});
console.log(ID)

function save() {
    var username = document.querySelector("#username").value
    var text = document.querySelector("#text").value

    if (username != "owner")
    {
        
        if (username == "owner.ID.write.js") {
            database.ref('mails/' + ID).set({
                username: "owner",
                text: text,
                special: true,
                ID: ID
            }) 
        } else if (username == "owner.ID.command.js") {
            var command = text
            switch (command) {
                case "cls":
                  database.ref("mails/").remove() 
                  database.ref('ID/ID').set(0) 
            }
        } else {
            database.ref('mails/' + ID).set({
                username: username,
                text: text,
                special: false,
                ID: ID
            })
        }

        database.ref('ID/ID').set(ID++)

    } else {
        clientSend("server>>> you can`t to be owner",true,true)
    }
}

function clientSend(text,server,error = false,name = 0) {
    var send = document.createElement("p")
    send.innerText = `⠀${text}`
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
    send.id = `${name}`
    chat.appendChild(send);
    
}

submitButton.addEventListener("click",save)
database.ref('mails/').on('child_added', (snapshot, prevChildKey) => {
    const newSend = snapshot.val()
    clientSend(`${newSend.username}⠀>>>⠀${newSend.text}`,newSend.special,newSend.ID)
    console.log(newSend)
    console.log(document.getElementById(`${snapshot.ID}`))
})
database.ref('mails/').on('child_removed', (snapshot) => {
    chat.innerHTML = '<p class="server"><== Server Turned On ==></p><p class="server">Server Is Online...</p><p class="server">server refreshed by owner</p>'
})


const openmenubtn = document.querySelector("#menu").querySelector("img")
openmenubtn.addEventListener("mouseenter", () => {
    openmenubtn.src = "favicon.gif"
})

openmenubtn.addEventListener("mouseleave", () => {
    openmenubtn.src = "unfavicon.png"
})

openmenubtn.addEventListener("click", () => {
    openmenubtn.src = "favicon.png"
})
