import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./formualire.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9ec7of4",
        "template_h8w0xam",
        {
          name: name,
          email: email,
          message: message,
        },
        "AuvPU_VhNt0EpSpUx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="formContact" className="container mb-5 pb-5">
    <h1 className="title is-size-5 has-text-light">Contact</h1>
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label  has-text-light">Nom :</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label has-text-light">Email :</label>
        <div className="control">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="field has-text-light">
        <label className="label has-text-light">Message :</label>
        <div className="control">
          <textarea
            className="textarea "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="control">
        <button className="button is-primary" type="submit">Envoyer</button>
      </div>
    </form>
    {isEmailSent && <p>Email envoyé avec succès !</p>}
  </div>
  );
};

export default ContactForm;
