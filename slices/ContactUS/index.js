import React, { useState } from "react";
import { Bounded } from "../../components/Bounded";

const ContactUs = ({slice}) => {
  // States for contact form fields
 const [fullname, setFullname] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");

 //   Form validation state
 const [errors, setErrors] = useState({});

 //   Setting button text on form submission
 const [buttonText, setButtonText] = useState("Send");

 // Setting success or failure messages states
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [showFailureMessage, setShowFailureMessage] = useState(false);

 // Validation check methods
 const handleValidation = () => {

   let tempErrors = {};
   let isValid = true;

   if (fullname.length <= 0) {
     tempErrors["fullname"] = true;
     isValid = false;
   }
   if (email.length <= 0) {
     tempErrors["email"] = true;
     isValid = false;
   }
   if (subject.length <= 0) {
     tempErrors["subject"] = true;
     isValid = false;
   }
   if (message.length <= 0) {
     tempErrors["message"] = true;
     isValid = false;
   }

   setErrors({ ...tempErrors });
   console.log("errors", errors);
   return isValid;
 };

 //   Handling form submit

 const handleSubmit = async (e) => {
   e.preventDefault();

   let isValidForm = handleValidation();
   console.log("isValidForm",isValidForm);
   if (isValidForm) {
     setButtonText("Sending");
     const res = await fetch("/api/sendgrid", {
       body: JSON.stringify({
         email: email,
         fullname: fullname,
         subject: subject,
         message: message,
       }),
       headers: {
         "Content-Type": "application/json",
       },
       method: "POST",
     });

     const { error } = await res.json();
     if (error) {
       console.log(error);
       setShowSuccessMessage(false);
       setShowFailureMessage(true);
       setButtonText("Send");
       return;
     }
     setShowSuccessMessage(true);
     setShowFailureMessage(false);
     setButtonText("Send");
   }

 };
  return (
    <Bounded as="section">
    <div className="md:grid md:grid-cols-2 md:gap-6">
    <div>
      <div className="px-4 sm:px-0">

      </div>
    </div>
    <div className="mt-5 md:mt-0">
    <form
        onSubmit={handleSubmit}
        className="rounded-lg sh-lilac shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
      >
      <h1 class="text-2xl font-bold dark:text-gray-50">{slice.primary.header}</h1>

      <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />


          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />


          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>

          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-lemon-color ink-color rounded-md text-lg flex flex-row items-center"
            >
              Submit
              <i class="pl-2 fa-solid fa-paper-plane ink-color"></i>
            </button>
      </div>
    </form>
    </div>
    </div>
    </Bounded>
  );
}

export default ContactUs
