import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages(prevMessages => [...prevMessages, { sender: 'user', text: inputValue }]);

      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "I’m a simple bot. I don’t have real responses yet!" }]);
      }, 300); 

      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h2 className="chat-title">AI Assistant</h2>
      <div className="chat-window"> 
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message-wrapper ${message.sender}`}>
              {message.sender === 'bot' && (
                <img
                  className="avatar"
                  src={`${process.env.PUBLIC_URL}/logo512.png`}
                  alt="Bot Avatar"
                />
              )}
              <div className={`message ${message.sender}`}>
                <span>{message.text}</span>
              </div>
              {message.sender === 'user' && (
                <img
                  className="avatar"
                  src={`${process.env.PUBLIC_URL}/logo512.png`}
                  alt="User Avatar"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' ? handleSend() : null}
          placeholder="Type your message here"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
