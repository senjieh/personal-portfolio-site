"use client";

import NavNoAnimation from "../components/navNoAnimation";
import { useRouter } from "next/navigation";

// import styles from '../style/Contact.module.css';

export default function Contact() {
    const router = useRouter();

    function navToThankYou() {
        router.push('/thankyou');
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const access_key = process.env.NEXT_PUBLIC_WEB3FORM_KEY; // For Jason: create a .env.local file for your web3form access key (also make sure that access key is prepended with NEXT_PUBLIC)
        formData.append("access_key", access_key);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
                navToThankYou();
            } else {
                console.log("Form submission failed: ", result);
            }
        } catch (error) {
            console.log(" Error submitting form: ", error);
        }
    }

    

  return (
    <>
      {/* <NavNoAnimation/> */}
      <h1 className="call-to-action">Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input name="message" placeholder="Message" required/>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}