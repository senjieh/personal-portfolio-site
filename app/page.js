
import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './components/LottieAnimation';
import introAnimationData from './animations/intro.json';
import griddyAnimationData from './animations/griddy.json';
import AnimatedText from './components/AnimatedText';
import AnimatedWho from "./components/AnimationWho";
import Link from 'next/link'

import axios from 'axios';

export default async function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);

  const fetchInstagramFeed = async () => {
    const token = '';
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`;
    
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching Instagram feed:", error);
      return [];
    }
  };


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

  const test = await fetchInstagramFeed()
  console.log(test);

  return (
    <div>
      {isLoaded && (
        <main className="flex min-h-screen w-full flex-col items-center">
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
          <div className='h-screen w-2/3'>
            <div></div>
            <div className='flex flex-row h-1/2 items-end justify-between'>
              <h1 >jiesen</h1>
              <h1 >huang.</h1>
            </div>
            <div className='h-1/2'>
              <div className='h-1/3'>
                <div></div>
                <div></div>
              </div>
              <div className='h-1/3'>
                <div></div>
                <div></div>
              </div>
              <div className='h-1/3'>
                <div></div>
                <div></div>
              </div>
            </div>

          </div>
        </main>
      )}
      {!isLoaded && (
        <main className="flex min-h-screen w-full flex-col items-center justify-center" style={{backgroundColor: '#f5f3ed'}}>
          <h1 style={{color: '#1f1d1d', fontFamily: 'gleffy'}}>Loading...</h1>
        </main>
      )}
    </div>
  );
}
