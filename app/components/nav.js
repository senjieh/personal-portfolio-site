"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './LottieAnimation';
import introAnimationData from '../animations/intro.json';
import Link from 'next/link'

import axios from 'axios';


export default function Nav() {
  return (
    <nav className="nav"> 
        <div className="mx-10">
          <Link href="/" className="nav-link">HOME</Link>
        </div>
        <div className="mx-10">
          <Link href="/about" className="nav-link">ABOUT</Link>
        </div>
        <div className="mx-10">
          <Link href="/about" className="nav-link">SOCIALS</Link>
        </div>
        <div className="mx-10">
          <Link href="/contact" className="nav-link">CONTACT</Link>
        </div>
    </nav>
  );
}