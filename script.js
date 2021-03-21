let openChatBtn = document.querySelector('.chat-icon');
let chatContainer = document.querySelector('.chat-container');
let inputForm = document.querySelector('.input-form');
let inputMessage = document.querySelector('.input-field');
let chatBoard = document.querySelector('.chat-board');

function openChat() {
    chatContainer.classList.toggle('chat-container_opened');
}
function addMessage(evt) {
    evt.preventDefault();
    chatBoard.insertAdjacentHTML('beforeend', '<div class="messages"></div>');
    let messagesArray = document.querySelectorAll('.messages');
    let messagesLength = messagesArray.length;
    let lastDiv = messagesArray[messagesLength - 1];
    console.log(lastDiv);
    lastDiv.textContent = inputMessage.value;
    inputMessage.value = '';
}

openChatBtn.addEventListener('click', openChat);
inputForm.addEventListener('submit', addMessage);
