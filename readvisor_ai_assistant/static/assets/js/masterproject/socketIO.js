/*!
 * UZH Masterproject
 */

const socket = io();

let sendButton = document.getElementById("send-msg");
let messageInput = document.getElementById("msg");

function sendMessage() {
    let message = messageInput.value;
    socket.emit("message", message);
    messageInput.value = "";
}

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

socket.on("chat", function (jsonString) {
    const data = JSON.parse(jsonString);
    let div = document.getElementById("chat-messages");

    let li = document.createElement("li");
   

        let chatAvatar = document.createElement("div");
        chatAvatar.className = "chat-avatar";
        let avatarImg = document.createElement("img");
        
        avatarImg.className = "rounded";
        avatarImg.alt = data.user;

        if (data.user == 'assistant') {
            li.className = 'clearfix';
            avatarImg.src = "../static/assets/images/logo-icon.png"; // TODO
        } else {
            li.className = 'clearfix odd';
            avatarImg.src = "../static/assets/images/users/avatar-5.jpg"; // TODO
        }

        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let currentTime = `${hours}:${minutes}`;

        let time = document.createElement("i");
        time.textContent = currentTime;

        chatAvatar.appendChild(avatarImg);
        chatAvatar.appendChild(time);

        let conversationText = document.createElement("div");
        conversationText.className = "conversation-text";
        let ctextWrap = document.createElement("div");
        ctextWrap.className = "ctext-wrap";
        let userName = document.createElement("i");
        userName.textContent = data.user;
        let messageText = document.createElement("p");
        messageText.textContent = data.text;

        ctextWrap.appendChild(userName);
        ctextWrap.appendChild(messageText);
        conversationText.appendChild(ctextWrap);

        let conversationActions = document.createElement("div");
        conversationActions.className = "conversation-actions dropdown";
        let actionsButton = document.createElement("button");
        actionsButton.className = "btn btn-sm btn-link";
        actionsButton.setAttribute("data-bs-toggle", "dropdown");
        actionsButton.setAttribute("aria-expanded", "false");
        actionsButton.innerHTML = '<i class="uil uil-ellipsis-v"></i>';

        //let dropdownMenu = document.createElement("div");
        //dropdownMenu.className = "dropdown-menu dropdown-menu-end";
        //dropdownMenu.innerHTML = `
        //<a class="dropdown-item" href="#">Copy Message</a>
        //<a class="dropdown-item" href="#">Edit</a>
        //<a class="dropdown-item" href="#">Delete</a>`;

        conversationActions.appendChild(actionsButton);
        //conversationActions.appendChild(dropdownMenu);

        li.appendChild(chatAvatar);
        li.appendChild(conversationText);
        li.appendChild(conversationActions);

        div.appendChild(li);
        div.scrollTop = div.scrollHeight;
    })