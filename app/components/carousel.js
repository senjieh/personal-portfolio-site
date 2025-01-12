import { Caramel } from "next/font/google";
import React, { useRef, useState } from "react";
import Image from 'next/image';
import aboutData from "../config/aboutData";
import style from "../styles/Carousel.module.css"


/**
 * 
 * @param {List} carouselData - A list of objects that contains data about each item within carousel:
 * -- {string} name: Name of project that will be displayed onhover over carousel item
 * -- {string} imageLink: Link to image
 * -- {list} projectDescription: An object representing project description to be mapped into pop up modal
 * -- -- {string} type: Link to image to be displayed
 * -- -- {string} details: details of type: text, link to image
 * @returns 
 */


const Carousel = ({modalPipeline}) => {
  const carouselData = aboutData
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  // Mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Record the initial cursor position (relative to the container)
    setStartX(e.clientX);
    // Record the current scrollLeft of the container
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse up
  const handleMouseUp = () => {
    console.log("test");
    setIsDragging(false);
  };

  // Mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    // How far the mouse has moved from the initial X
    const x = e.clientX;
    const walk = x - startX; // negative if moving left, positive if moving right
    // Update scroll position in real-time
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll left button
  const scrollLeftFunc = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  // Scroll right button
  const scrollRightFunc = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={scrollLeftFunc}>{"<"}</button>
      
      {/* Carousel Container: FIXED width + overflow */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "hidden",        // Use 'auto' instead of 'scroll' if you want the scrollbar only when needed
          cursor: isDragging ? "grabbing" : "grab",
          width: "100%",           // Adjust to your desired width
          margin: "0 10px",
          // IMPORTANT: We remove scrollBehavior: "smooth" here so we get immediate movement on drag
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {carouselData.map((x, i) => (          
          <div
            key={i}
            style={{
              minWidth: "30%",     // Adjust item width
              width: "30%",
              height: "50vh",
              margin: "5px",
              backgroundColor: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
            onClick={()=> {
              console.log("tyeat");
              console.log(x)
              modalPipeline(x)
            }}
          >
              <div className={style.overlayDiv}>
                <p>
                  {x.name}
                </p>
              </div>
              <Image 
              className={style.carouselImg}
              src={x.imageLink}
              width={1000}
              height={1000}
              alt="img"
              draggable="false"
              />

          </div>))}

      </div>
      
      <button onClick={scrollRightFunc}>{">"}</button>
    </div>
  );
}

export default Carousel;
