let usernamehtml = document.getElementById("username");
let goOnlinebtnhtml = document.getElementById("goOnline");
let goOfflinebtnhtml = document.getElementById("goOffline");
let contentmsghtml = document.getElementById("contentmsg");
let inputboxmsgcontenthtml = document.getElementById("msgcontent");
let sendbtnhtml = document.getElementById("sendbtn");
let statushtml = document.getElementById("status");
let msgCountHtml = document.getElementById("msgCount");



function chatSession(username) {
  let isOnline = false;
  let isTyping = false;
  let messageCount = 0;

  usernamehtml.innerText = username;

  function addSystemMsg(text) {
    contentmsghtml.innerHTML += `
      <div class="text-center text-xs text-gray-400">${text}</div>
    `;
    contentmsghtml.scrollTop = contentmsghtml.scrollHeight;
  }

  function addUserMsg(text) {
    contentmsghtml.innerHTML += `
      <div class="flex justify-end">
        <div class="bg-[#005c4b] text-white px-3 py-2 rounded-lg max-w-[70%] text-sm">
          <p>${text}</p>
          </p>
        </div>
      </div>
    `;
    contentmsghtml.scrollTop = contentmsghtml.scrollHeight;
  }

  return {
    goOnline() {
      isOnline = true;
      statushtml.innerText = "online";
      statushtml.className = "text-xs text-green-400";
      addSystemMsg(`${username} is online`);
    },

    goOffline() {
      isOnline = false;
      isTyping = false;
      statushtml.innerText = "offline";
      statushtml.className = "text-xs text-gray-400";
      addSystemMsg(`${username} is offline`);
    },

    startTyping() {
      if (!isOnline || isTyping) return;
      isTyping = true;
      statushtml.innerText = "typing...";
    },

    stopTyping() {
      if (!isTyping) return;
      isTyping = false;
      statushtml.innerText = "online";
    },

    sendMessage(message) {
      if (!isOnline) {
        addSystemMsg("You are offline. Message not sent.");
        return;
      }

      if (message.trim() === "") {
        addSystemMsg("Empty message not sent.");
        return;
      }

      messageCount++;
      msgCountHtml.innerText = messageCount;
      addUserMsg(message);
      inputboxmsgcontenthtml.value = "";
    }
  };
}

let Ajay = chatSession("Rubi");

/* EVENTS */
goOnlinebtnhtml.addEventListener("click", () => Ajay.goOnline());
goOfflinebtnhtml.addEventListener("click", () => Ajay.goOffline());

inputboxmsgcontenthtml.addEventListener("focus", () => Ajay.startTyping());
inputboxmsgcontenthtml.addEventListener("blur", () => Ajay.stopTyping());

sendbtnhtml.addEventListener("click", () => {
  Ajay.sendMessage(inputboxmsgcontenthtml.value);
});

inputboxmsgcontenthtml.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Ajay.sendMessage(inputboxmsgcontenthtml.value);
  }
});
