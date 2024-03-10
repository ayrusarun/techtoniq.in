import React, { useState } from "react";
import "./contact.css";
import { Select } from 'antd';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [serviceType, setServiceType] = useState('Website Development'); // Default value
  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (value) => {
    console.log(value);
    setServiceType(value); // Update selected service type
  }

  const sendToWhatsapp = () => {
    // Check if required fields are filled
    if (!name || !email || !number || !message) {
      setAlertVisible(true); // Show the alert
      return;
    }

    const whatsappNumber = "+919789309138";
    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      "Name: " +
      name +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Mobile Number: " +
      number +
      "%0a" +
      "Service Type: " +
      serviceType.label +
      "%0a" +
      "Message: " +
      message +
      "%0a%0a";
    window.open(url, "_blank").focus();
  };

  return (
    <div id="contactPage">
      <div>
        <small>#Contact</small>
        <h1>Let's talk ||</h1>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={number}
          required
          onChange={(e) => {
            const inputNumber = e.target.value;
            if (inputNumber.length <= 12) {
              setNumber(inputNumber);
            }
          }}
        />
        <Select
          labelInValue
          defaultValue={{
            value: 'Website Development',
            label: 'Website Development',
          }}
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          options={[
            {
              value: 'Website Development',
              label: 'Website Development',
            },
            {
              value: 'Mobile App Development',
              label: 'Mobile App Development',
            },
            {
              value: 'E-Commerce',
              label: 'E-Commerce',
            },
          ]}
        />
        <textarea
          placeholder="Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {alertVisible && <div className="alert">Please fill all required fields.</div>}
        <button type="button" onClick={sendToWhatsapp} className="submitBtn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
