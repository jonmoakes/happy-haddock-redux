// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import isEmail from "validator/lib/isEmail";

// import ContactFormError from "./contact-form-error.component";
// import EmailError from "../email-error/email-error.component";

// import {
//   Form,
//   ContactFormButton,
//   DisabledContactButton,
// } from "../styles/form/form.styles";
// import "../styles/confirm.css";

// import {
//   successMessage,
//   emailResponseTimeMessage,
//   okMessage,
//   emptyContactFormErrorMessage,
// } from "../../strings/strings";

// import { email, name, text, message } from "../../strings/options-strings";

// const EmailSender = () => {
//   const [emailError, setEmailError] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const swal = withReactContent(Swal);
//   const [formDetails, setFormDetails] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // if email field is empty or it is not a valid email
//   useEffect(() => {
//     if (formDetails.email === "" || isEmail(formDetails.email)) {
//       setEmailError(false);
//     } else {
//       setEmailError(true);
//     }
//   }, [formDetails.email]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormDetails({ ...formDetails, [name]: value });
//   };

//   const sendEmail = async () => {
//     if (formDetails.name !== "" && !emailError && formDetails.message !== "") {
//       setIsProcessing(true);

//       const name = formDetails.name;
//       const email = formDetails.email;
//       const message = formDetails.message;

//       // email that owner will receive when contact form is submitted
//       const emailToSend = `______________________________________________

// REMINDER:
// TO REPLY TO THE CUSTOMER BY EMAIL,
// PLEASE CLICK ON THEIR EMAIL LINK BELOW.
// DO NOT REPLY TO THIS VERY MESSAGE
// AS THE CUSTOMER WILL NOT RECEIVE IT
// ______________________________________________

// Name:
// ${name}

// Email:
// ${email}

// Message:
// ${message}
// `;

//       // post data to server
//       await axios
//         .post("/send-message", {
//           emailToSend,
//         })
//         .then(
//           (response) => {
//             if (response.data === "OK") {
//               setIsProcessing(false);
//               swal
//                 .fire({
//                   title: `${successMessage}`,
//                   text: `${emailResponseTimeMessage}`,
//                   background: "black",
//                   backdrop: `
//             rgba(0,0,123,0.8)`,
//                   icon: "success",
//                   confirmButtonColor: "#3085d6",
//                   confirmButtonText: `${okMessage}`,
//                   customClass: "confirm",
//                   allowOutsideClick: false,
//                 })
//                 .then(setIsProcessing(false))
//                 .then(document.getElementById("contact-form").reset())
//                 .then(setFormDetails({ name: "", email: "", message: "" }))
//                 .then(setErrorMessage(""));
//             }
//           },
//           (error) => {
//             setIsProcessing(false);
//             setErrorMessage(error.message);
//             setFormDetails({ name: "", email: "", message: "" });
//           }
//         );
//     } else {
//       setErrorMessage(emptyContactFormErrorMessage);
//       return;
//     }
//   };

//   return (
//     <>
//       <ContactFormError errorMessage={errorMessage} />
//       <Form id="contact-form" autoComplete="off">
//         <label>Your Name:</label>
//         <input type={text} name={name} onChange={handleChange} />
//         <label>Your Email:</label>
//         <input type={email} name={email} onChange={handleChange} />

//         {emailError && <EmailError />}

//         <label>Your Message:</label>
//         <textarea type={text} name={message} onChange={handleChange} />
//       </Form>

//       <div>
//         {!isProcessing ? (
//           <ContactFormButton onClick={sendEmail}>
//             Send Message
//           </ContactFormButton>
//         ) : (
//           <DisabledContactButton>please wait...</DisabledContactButton>
//         )}
//       </div>
//     </>
//   );
// };

// export default EmailSender;
