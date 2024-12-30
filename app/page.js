"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./components/nav"
import InstagramGrid from "./components/InstagramGrid";

import style from "./styles/Home.module.css"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);


  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    if ((!hasSeenAnimation) && isLoaded) {
      console.log("setShowAnimation = True")
      setShowAnimation(true);
      localStorage.setItem('hasSeenAnimation', true)
    } else {
      console.log("set to false");
      setShowAnimation(false);
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
          <div></div>
          <Nav animState ={showAnimation} />
          <div className={`${ showAnimation ? style.mainDivIntro : style.mainDivAnim  }`}>
            <Image
              src="/images/self.png"
              width={1000}
              height={1000}
              className={` ${ showAnimation ? style.pSelfImgIntro : style.pSelfImgAnim}`}
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
        <div className={`${style.centerAlign} `}>
          <div className={`${style.loadingTextDiv}`}>
            <h1 className={style.loadingText}>loading...</h1>
          </div>
        
        </div>
      ) }
      
    </main>
  );
    


};
