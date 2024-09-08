import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => { 

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (!input) return;

        setMessages([...messages,{role:"user",content:input}]);

        try{
            const response = await axios.post('https://node-completition.onrender.com/api/chat',{
                message:input
            });

            const botMessage = response.data.choices[0].message;

            setMessages([...messages,{role:"user",content:input},botMessage]);

        } catch(error){
            console.error();
        }

        setInput("");

    }

    return(

        <div>
       
        <div className="chat-box">
            
            {messages.map((msg, index) => (
                <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
            ))}
        </div>

        
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update 'input' state with the current value
                placeholder="Type a message..." // Placeholder text when the input is empty
            />

            
            <button type="submit">Send</button>
        </form>
    </div>
    );
};

export default Chatbot;