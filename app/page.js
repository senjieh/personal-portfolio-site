"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import LottieAnimation from './components/LottieAnimation';
import introAnimationData from './animations/intro.json';
import griddyAnimationData from './animations/griddy.json';
import AnimatedText from './components/AnimatedText';
import AnimatedWho from "./components/AnimationWho";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);

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
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          <div className="fixed items-center justify-center object-left-top top-0 left-0 bottom-0 right-0 flex z-50">
            <LottieAnimation animationData={introAnimationData} />
          </div>
          <div className='flex items-center justify-center content-center justify-items-center z-10'>
            
            {showTextAnimation && (
              <div className='flex flex-col content-center'>
                <div className='mb-10'>
                  <button className='animatedButton'>Hello! My name is</button>
                </div>
        
                <AnimatedText text="JIE SEN"/>
                <AnimatedText text="HUANG"/>
                <div className="mt-20">
                  <AnimatedWho
                    precursorText="I am a "
                    texts={["Developer", "Designer", "Editor", "Entrepreneur"]}
                    fontSize="2em"
                  />
                </div>
              </div>
            )}
            <div className='main-portfolio-image'>
              <Image
                src="/images/portpic.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="fixed items-center justify-center object-left-top top-0 left-0 bottom-0 right-0 flex z-0">
            <LottieAnimation animationData={griddyAnimationData} delay={1600} />
          </div>
        </main>
      )}
      {!isLoaded && (
        <main className="flex min-h-screen w-full flex-col items-center justify-center" style={{backgroundColor: '#07111a'}}>
          <h1 style={{color: '#ffffff', fontFamily: 'SEQUEL100'}}>Loading...</h1>
        </main>
      )}
    </div>
  );
}
