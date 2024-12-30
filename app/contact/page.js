"use client"
import style from '../styles/Contact.module.css';
import { useState, useEffect } from "react";
import Nav from "../components/nav"
import Carousel from "../components/carousel";
import Modal from "../components/modal"


export default function Contact() {

  const [modalData, setModalData] = useState(null);

  const closeModal = () =>{
    setModalData(null)
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const access_key = process.env.EMAIL_TOKEN; 
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
    <main className={style.main}>
      <Nav />
      {Boolean(modalData) ? <Modal mData={modalData} onClose={closeModal} />: <></>}
      <div className={style.mainDiv}>

        <div className={style.headlinerContainerAnim}>
          <div className={style.headlinerContainer80}>
            <h1 className={`${style.headlinerTextAnim}, ${style.h1sm}`}>Get in</h1>
            <h1 className={`${style.headlinerTextAnim}, ${style.h1sm}`}>Touch</h1>
          </div>

          <div className={`${style.projectsContainer}`}>
            <form onSubmit={handleSubmit} >
              <input type="text" name="name" placeholder="Name" required/>
              <input type="email" name="email" placeholder="Email" required/>
              <textarea name="message" placeholder="Message" required/>
              <button type="submit" className={style.cvbutton}>Submit Form</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );

}

// export default function Contact() {
//     async function handleSubmit(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         const access_key = process.env.EMAIL_TOKEN; 
//         formData.append("access_key", access_key);

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                   Accept: "application/json"
//                 },
//                 body: json
//             });
//             const result = await response.json();
//             if (result.success) {
//                 console.log(result);
//                 navToThankYou();
//             } else {
//                 console.log("Form submission failed: ", result);
//             }
//         } catch (error) {
//             console.log(" Error submitting form: ", error);
//         }
//     }

    

//   return (
//     <>
//       {/* <NavNoAnimation/> */}
//       <h1 className="call-to-action">Get In Touch</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" required/>
//         <input type="email" name="email" placeholder="Email" required/>
//         <input name="message" placeholder="Message" required/>
//         <button type="submit">Submit Form</button>
//       </form>
//     </>
//   );
// }