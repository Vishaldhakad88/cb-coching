import React from 'react'
import { useState } from 'react';
// import './Inquiry2'; 

function Inquiry() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const sendToWtsp = () => {
      const number = "+918821991572"; // WhatsApp number
      const message = `Name: ${name}
                       %0aEmail: ${email}  
                       %0aPhone: ${phone}
                       %0aMessage: ${msg}%0a%0a`;
// %0a is use for jump in next line -------------------
      const url = `https://wa.me/${number}?text=${message}`;
      window.open(url, '_blank').focus();
  };
  return (
<div class="container-fluid text-center Inquiry">
   <h1>Quick  <span> Inquiry</span></h1>
   <div className="InquiryBox">
    <div className="InquiryForm">
      <br />
   <input
type="text"
id="name"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
   <br /><br />
   <input 
   type="email"
   id="email"
   placeholder="Enter your email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
   />
   <br /><br />
   <input 
   type="number" 
   placeholder='Enter your Phone Number'
   value={phone}
   onChange={(e)=>setPhone(e.target.value)}
   />
   <br /><br />
   <input 
   id="msg"
   placeholder="Enter your message"
   value={msg}
   onChange={(e) => setMsg(e.target.value)}
   />
   <br /><br />   
   <button type="button" class="btn btn-danger" onClick={sendToWtsp}>SUBMIT</button>

    </div>
    <div className="InquiryImg">
      <img src="https://codebetter.in/images/enquiry_page.png" alt="" />
    </div>
   </div>

    </div>
  )
}

export default Inquiry