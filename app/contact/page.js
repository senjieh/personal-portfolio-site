"use client";

import NavNoAnimation from "../components/navNoAnimation";
import {useRouter} from 'next/router';

// import styles from '../style/Contact.module.css';

export default function Contact() {
    const router = useRouter();
    
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const access_key = process.env.NEXT_PUBLIC_WEB3FORM_KEY; // For Jason: create a .env.local file for environment variables
        formData.append("access_key", access_key);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

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
        }
    }

    function navToThankYou() {
        router.push('/thankyou');
    }

  return (
    <>
      {/* <NavNoAnimation/> */}
      <h1 className="call-to-action">Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input name="message" placeholder="Message"/>
        <button type="submit" onClick={navToThankYou}>Submit Form</button>
      </form>
    </>
  );
}