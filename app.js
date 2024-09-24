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

    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) 
        return "Hello! How can I help you today?";

    if (userInput.includes("how are you")) 
        return "I'm just a bot, but I'm doing great! How about you?";

    if (userInput.includes("bye") || userInput.includes("goodbye")) 
        return "Goodbye! Have a wonderful day!";
    
    if (userInput.includes("time")) {
        const currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    }
    if (userInput.includes("date") || userInput.includes("today's date")) {
        const currentDate = new Date().toLocaleDateString();
        return `Today's date is ${currentDate}.`;
    }
    if (userInput.includes("help") || userInput.includes("assist")) 
        return "Sure, I'm here to help! What do you need assistance with?";

    if (userInput.includes("who are you") || userInput.includes("what are you")) 
        return "I'm a simple chatbot here to assist you with your questions!";

    if (userInput.includes("weather")) 
        return "I can't check the weather right now, but you can look it up on a weather website!";

    if (userInput.includes("thank you") || userInput.includes("thanks")) 
        return "You're welcome! Happy to help.";

    return "I'm not sure I understand. Could you please rephrase?";
}

// Send message on pressing Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
