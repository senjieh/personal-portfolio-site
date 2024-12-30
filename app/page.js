"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./components/nav"
import InstagramGrid from "./components/InstagramGrid";

import style from "./styles/Home.module.css"



export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);


  const handleAnimationFinish = () => {
    localStorage.setItem('hasSeenAnimation', 'true');
    console.log("setShowAnimation = False")
    setShowAnimation(false);
  };


  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    if (!hasSeenAnimation && isLoaded) {
      console.log("setShowAnimation = True")
      setShowAnimation(true);

      const animStateSet = setTimeout(() => {
        handleAnimationFinish();
      }, 4000);
    }
  }, [isLoaded]);



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

  return (
    <main className={`${style.main}, ${style.centerAlign}`}>
      {isLoaded ? (
        <div className={`${style.centerAlign}`}>
          <Nav />
          <div className={`${ showAnimation ? style.mainDivIntro : style.mainDivAnim  }`}>
            <Image
              src="/images/self.png"
              width={1000}
              height={1000}
              className="p-self-img absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"
              alt="Portfolio"
            />

            <div className={` ${ showAnimation ? style.headlinerContainerIntro : style.headlinerContainerAnim}`}>
              <h1 className={`${ showAnimation ? style.headlinerTextIntro : style.headlinerTextAnim}`}>jiesen</h1>
              <h1 className={`${ showAnimation ? style.headlinerTextIntro : style.headlinerTextAnim}`}>huang</h1>
            </div>
            <div className={`${ showAnimation ? style.igGridContainerIntro : style.igGridContainerAnim}`}>
              <InstagramGrid animState ={showAnimation}/>
            </div>
          </div>
        </div>
      ): (
        <div>
          <h1 style={{ color: "#1f1d1d", fontFamily: "gleffy", fontSize: "2vw" }}>Loading...</h1>
        </div>
      ) }
      
    </main>
  );
    



  
  // return (
  //   <main className={"flex min-h-screen w-full flex-col items-center justify-center"}>
  //     {isLoaded ? (
  //       <div className="flex min-h-screen w-full flex-col items-center ">
  //         <Nav />
  //         <div className="h-screen main-div">
  //           <Image
  //             src="/images/self.png"
  //             width={1000}
  //             height={1000}
  //             className="p-self-img absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"
  //             alt="Portfolio"
  //           />

  //           <div className="flex flex-row items-end justify-between headliner-container">
  //             <h1 className="h1lg headliner-text-anim">jiesen</h1>
  //             <h1 className="h1lg headliner-text-anim">huang</h1>
  //           </div>
  //           <div className="flex flex-row items-end justify-between ig-grid-container">
  //             <InstagramGrid onFinish={handleAnimationFinish} animState ={showAnimation}/>
  //           </div>
  //         </div>
  //       </div>
  //     ): (
  //       <div>
  //         <h1 style={{ color: "#1f1d1d", fontFamily: "gleffy", fontSize: "2vw" }}>Loading...</h1>
  //       </div>
  //     ) }
      
  //   </main>
  // );
    
};
