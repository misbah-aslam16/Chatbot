// Handle sending the message
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    displayMessage(userInput, "user");

    document.getElementById('userInput').value = "";

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot");
    }, 500);
}

// Display message function
function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat', `${sender}-message`);
    messageElement.innerText = message;

    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle basic responses
function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();
    
    if (userInput.includes("hello")) return "Hi there! How can I assist you today?";
    if (userInput.includes("hi")) return "Hi there! How can I assist you today?";
    if (userInput.includes("how are you")) return "I'm just a bot, but I'm doing great! Thanks for asking.";
    if (userInput.includes("bye")) return "Goodbye! Have a great day!";
    
    return "I'm not sure I understand. Could you please rephrase?";
}

// Send message on pressing Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
