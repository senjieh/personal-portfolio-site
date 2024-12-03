"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './LottieAnimation';
import introAnimationData from '../animations/intro.json';
import Link from 'next/link'

import axios from 'axios';


export default function Nav() {
  return (
    <nav className="fixed flex z-50 -mb-20"> 
        <div className="mx-10">
        <Link href="/">HOME</Link>
        </div>
        <div className="mx-10">
        <Link href="/about">ABOUT</Link>
        </div>
        <div className="mx-10">
        <Link href="/about">SOCIALS</Link>
        </div>
        <div className="mx-10">
        <Link href="/contact">CONTACT</Link>
        </div>
    </nav>
  );
}