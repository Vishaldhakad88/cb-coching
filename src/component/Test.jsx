// Filename - App.js

import React, { useState, useEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    return 
        
};

export default App;




// --------------------------------------------------------
import React, { useState } from 'react';

const WhatsAppForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const sendToWtsp = () => {
        const number = "+916261119739"; // WhatsApp number
        const message = `name: ${name}%0aemail: ${email}%0amessage: ${msg}%0a%0a`;

        const url = `https://wa.me/${number}?text=${message}`;
        window.open(url, '_blank').focus();
    };

    return (
      <div className="Inquiry">
        <div className='InquiryForm'>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                id="msg"
                placeholder="Enter your message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button onClick={sendToWtsp}>Send to WhatsApp</button>


        </div>

        
        </div>
    );
};

export default WhatsAppForm;



// map section ==================
<div className="InquiryMap">
<div className="adrs">
 <br />
 <h3><b>CodeBetter <span>Indore</span></b></h3>
 <i className="bi bi-geo-alt-fill"></i><p>
 Plot No - 64, Scheme 54, PU-4, Behind C21
shopping mall Near Hotel Holiday, AB Road,
Indore, Madhya Pradesh -452001
 </p>
</div>
<div className="loc">

</div>
</div>
