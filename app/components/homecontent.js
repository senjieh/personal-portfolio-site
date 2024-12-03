"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LottieAnimation from "./LottieAnimation";
import introAnimationData from "../animations/intro.json";
import Nav from "./nav"

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

function InstagramGrid({ igData }) {
  if (!igData || igData.length < 6) {
    return <p>Error: Invalid Instagram data.</p>;
  }

  const layouts = [
    [1 / 3, 2 / 3],
    [2 / 3, 1 / 3],
    [1 / 2, 1 / 2],
  ];

  return (
    <div className="instagram-grid">
      {layouts.map((layout, rowIndex) => (
        <div key={rowIndex} className="flex flex-row justify-center overflow-hidden h-1/3">
          {layout.map((width, colIndex) => (
            <div key={colIndex} className={`w-${width * 3}/3 min-h-max p-2.5`}>
              <img
                src={igData[rowIndex * 2 + colIndex].media_url}
                alt={`Instagram Image ${rowIndex * 2 + colIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function HomeContent({ igData }) {
  const isLoaded = useImageLoader();

  return (
    <div>
      {isLoaded ? (
        <main className="flex w-full flex-col items-center">
          <Nav />
          <div className="fixed inset-0 flex items-center justify-center z-40">
            <LottieAnimation animationData={introAnimationData} />
          </div>
          <div className="h-screen w-full lg:w-2/3">
            <Image
              src="/images/portpic.png"
              width={1000}
              height={1000}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-screen object-contain"
              alt="Portfolio"
            />
            <div className="flex flex-row h-1/2 items-end justify-between">
              <h1 className="text-lg sm:text-sm">jiesen</h1>
              <h1 className="text-lg sm:text-sm">huang.</h1>
            </div>
            <InstagramGrid igData={igData} />
          </div>
        </main>
      ) : (
        <main
          className="flex min-h-screen w-full flex-col items-center justify-center"
          style={{ backgroundColor: "#f5f3ed" }}
        >
          <h1 style={{ color: "#1f1d1d", fontFamily: "gleffy", fontSize: "2vw" }}>Loading...</h1>
        </main>
      )}
    </div>
  );
}
