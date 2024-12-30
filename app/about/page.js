"use client"

import { useState, useEffect } from "react";
import aboutData from "../config/aboutData";
import Image from "next/image";
import Nav from "../components/nav"
import Carousel from "../components/carousel";

export default function About() {

  return (
    <main className="flex flex-col items-center">
      <Nav />
      <div className="h-screen w-2/3">

        <div className="flex flex-row headliner-container justify-items-center">
          <div className="headliner-container-80 flex flex-col items-start justify-end headliner-container">
            <h1 className="h1sm headliner-text-anim">software engineer</h1>
            <div className="flex flex-row w-full">
              <h1 className="h1sm headliner-text-anim">for you</h1>
              <button className="cvbutton">view CV</button>
            </div>
          </div>
          <div className="headliner-container-20 flex flex-col justify-end">
            <p>
            I am a software engineer with a knack for creating interactive and seamless software solutions. I’ve got a knack for design and an interest in creating engaging user interfaces and   experiences.
            </p>
          </div>

        </div>
        <div className="projects-container">
          <Carousel carouselData={aboutData}/>
        </div>
      </div>
    </main>
  );
}
