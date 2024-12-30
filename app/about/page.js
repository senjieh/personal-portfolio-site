"use client"

import { useState, useEffect } from "react";
import Nav from "../components/nav"
import Carousel from "../components/carousel";
import Modal from "../components/modal"

import Link from 'next/link'
import style from "../styles/About.module.css"

export default function About() {

  const [modalData, setModalData] = useState(null);

  const closeModal = () =>{
    setModalData(null)
  }

  return (
    <main className={style.main}>
      <Nav />
      {Boolean(modalData) ? <Modal mData={modalData} onClose={closeModal} />: <></>}
      <div className={style.mainDiv}>

        <div className={style.headlinerContainerAnim}>
          <div className={style.headlinerContainer80}>
            <h1 className={`${style.headlinerTextAnim}, ${style.h1sm}`}>software engineer</h1>
            <div className={`${style.headlinerContainer20Bottom}`}>
              <h1 className={`${style.headlinerTextAnim}, ${style.h1sm}`}>for you</h1>
              <Link className={style.cvbutton} href="/docs/JieSenHuangResume2025.pdf" passHref>view CV</Link>
            </div>
          </div>
          <div className={style.headlinerContainer20}>
            <p>
            I am a software engineer with a knack for creating interactive and seamless software solutions. I’ve got a knack for design and an interest in creating engaging user interfaces and   experiences.
            </p>
          </div>

        </div>
        <div className={`${style.projectsContainer}, ${style.headlinerContainerAnim}`}>
          <Carousel modalPipeline={setModalData}/>
        </div>
      </div>
    </main>
  );

}
