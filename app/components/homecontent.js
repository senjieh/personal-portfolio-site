"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './LottieAnimation';
import introAnimationData from '../animations/intro.json';
import Link from 'next/link'

import axios from 'axios';


export default function HomeContent({igData}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showTextAnimation, setShowTextAnimation] = useState(false);
    console.log(igData[0].media_url);


  useEffect(() => {
    // Assuming you want to wait for images to load as well
    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages += 1;
      if (loadedImages === totalImages) {
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        imageLoaded();
      } else {
        images[i].addEventListener('load', imageLoaded);
        images[i].addEventListener('error', imageLoaded);
      }
    }

    // In case there are no images or they are already cached
    if (totalImages === 0 || loadedImages === totalImages) {
      setIsLoaded(true);
    }

    if (isLoaded) {

      // Set timeout for griddy animation to start after a delay
      const griddyTimer = setTimeout(() => {
        setShowTextAnimation(true);
      }, 1600); // Delay in milliseconds

      // Cleanup function
      return () => clearTimeout(griddyTimer);
    }
  }, [isLoaded]);

  return (
    <div>
        
        {isLoaded && (
            <main className="flex w-full flex-col items-center">
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
            <div className='absolute'>
                <div className="fixed items-center justify-center object-left-top top-0 left-0 bottom-0 right-0 flex z-40">
                <LottieAnimation animationData={introAnimationData} />
                </div>
            </div>
            <div className='h-screen w-full lg:w-2/3'>
                <Image src="/images/portpic.png" width={1000} height={1000} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"></Image>
                <div className='flex flex-row h-1/2 items-end justify-between'>
                    <h1 className='sm:h1sm h1lg'>jiesen</h1>
                    <h1 className='sm:h1sm  h1lg'>huang.</h1>
                </div>
                <div className='h-1/2'>
                    <div className='h-1/3 flex flex-row overflow-hidden justify-center'>
                        <div className='w-1/3 min-h-max pr-2.5 pb-2.5'>
                            <img src={igData[0].media_url} className="h-full w-full object-cover"
                            alt="Picture of the author"/> 
                        </div>
                        <div className='w-2/3 min-h-max pl-2.5 pb-2.5'>
                            <img src={igData[1].media_url} className="h-full w-full object-cover" 
                            alt="Picture of the author"/>
                        </div>
                    </div>
                    <div className='h-1/3 flex flex-row overflow-hidden justify-center'>
                        <div className='w-2/3 min-h-max pr-2.5 pb-2.5 pt-2.5'>
                            <img src={igData[2].media_url} className="h-full w-full object-cover"  
                            alt="Picture of the author"/>
                        </div>
                        <div className='w-1/3 min-h-max pl-2.5 pb-2.5 pt-2.5'>
                            <img src={igData[3].media_url} className="h-full w-full object-cover"  
                            alt="Picture of the author"/>
                        </div>
                    </div>
                    <div className='h-1/3 flex flex-row overflow-hidden justify-center'>
                        <div className='w-1/2 min-h-max pr-2.5 pb-2.5 pt-2.5'>
                            <img src={igData[4].media_url} className="h-full w-full object-cover"
                            alt="Picture of the author"/>
                        </div>
                        <div className='w-1/2 min-h-max pl-2.5 pb-2.5 pt-2.5  '>
                            <img src={igData[5].media_url} className="h-full w-full object-cover"    
                            alt="Picture of the author"/>
                        </div>
                    </div>
                </div>

            </div>
            </main>
        )}
        {!isLoaded && (
            <main className="flex min-h-screen w-full flex-col items-center justify-center" style={{backgroundColor: '#f5f3ed'}}>
            <h1 style={{color: '#1f1d1d', fontFamily: 'gleffy', fontSize: "2vw"}}>Loading...</h1>
            </main>
        )}
    </div>
  );
}