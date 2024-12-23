"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LottieAnimation from "./components/LottieAnimation";
import introAnimationData from "./animations/intro.json";
import Nav from "./components/nav"
import InstagramGrid from "./components/InstagramGrid";

/* Purpose of this is to wait for all images to load before starting the 
animation. */
function useImageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
        images[i].addEventListener("load", imageLoaded);
        images[i].addEventListener("error", imageLoaded);
      }
    }

    if (totalImages === 0 || loadedImages === totalImages) {
      setIsLoaded(true);
    }
  }, []);

  return isLoaded;
}


export default function Home() {
  const isLoaded = useImageLoader();

  return (
    <main className="flex flex-col items-center">
      <Nav />
      <div className="fixed inset-0 flex items-center justify-center z-40">
        {/* <LottieAnimation animationData={introAnimationData} /> */}
      </div>
      <div className="h-screen main-div">
        <Image
          src="/images/self.png"
          width={1000}
          height={1000}
          className="p-self-img absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"
          alt="Portfolio"
        />

        <div className="flex flex-row items-end justify-between headliner-container">
          <h1 className="h1lg headliner-text-anim">jiesen</h1>
          <h1 className="h1lg headliner-text-anim">huang</h1>
        </div>
        <div className="flex flex-row items-end justify-between ig-grid-container">
          <InstagramGrid/>
        </div>
      </div>
    </main>
    // <div>
    //   {isLoaded ? (
    //     <main className="flex w-full flex-col items-center">
    //       <Nav />
    //       <div className="fixed inset-0 flex items-center justify-center z-40">
    //         <LottieAnimation animationData={introAnimationData} />
    //       </div>
    //       <div className="h-screen w-full lg:w-2/3">
    //         <Image
    //           src="/images/self.png"
    //           width={1000}
    //           height={1000}
    //           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"
    //           alt="Portfolio"
    //         />
    //         <div className="flex flex-row h-1/2 items-end justify-between">
    //           <h1 className="text-lg sm:text-sm">jiesen</h1>
    //           <h1 className="text-lg sm:text-sm">huang.</h1>
    //         </div>
    //         <div className="flex flex-row h-1/2 items-end justify-between">
    //           <InstagramGrid/>
    //         </div>
    //       </div>
    //     </main>
    //   ) : (
    //     <main
    //       className="flex min-h-screen w-full flex-col items-center justify-center"
    //       style={{ backgroundColor: "#f5f3ed" }}
    //     >
    //       <h1 style={{ color: "#1f1d1d", fontFamily: "gleffy", fontSize: "2vw" }}>Loading...</h1>
    //     </main>
    //   )}
    // </div>
  );
}
