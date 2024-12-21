"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './LottieAnimation';
import introAnimationData from '../animations/intro.json';
import Link from 'next/link'

import axios from 'axios';


export default function NavNoAnimation() {
  return (
    <nav className="nav"> 
        <div id="link1-noAni" className="mx-10">
          <Link href="/" className="nav-link">HOME</Link>
        </div>
        <div id="link2-noAni" className="mx-10">
          <Link href="/about" className="nav-link">ABOUT</Link>
        </div>
        <div id="link3-noAni" className="mx-10">
          <Link href="/about" className="nav-link">SOCIALS</Link>
        </div>
        <div id="link4-noAni" className="mx-10">
          <Link href="/contact" className="nav-link">CONTACT</Link>
        </div>
    </nav>
  );
}