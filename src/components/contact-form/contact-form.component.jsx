import { useState } from "react";

import SendMessage from "./send-message.component";

import { Form } from "../../styles/form/form.styles";

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  return (
    <>
      <Form id="contact-form" autoComplete="off">
        <label>Your Name:</label>
        <input
          className="capitalize"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <label>Your Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <label>Your Message:</label>
        <textarea type="text" name="message" onChange={handleChange} />
      </Form>

      <SendMessage {...{ formDetails, setFormDetails }} />
    </>
  );
};

export default ContactForm;
