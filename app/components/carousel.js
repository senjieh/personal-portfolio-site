import React, { useRef, useState } from "react";

const Carousel = () => {
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
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Scroll right button
  const scrollRightFunc = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button>Left</button>
      
      {/* Carousel Container: FIXED width + overflow */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",       // Prevent items from wrapping 
          overflowX: "auto",        // or "scroll"
          width: "100%",           // <-- fixed container width
          border: "1px solid #ccc",
          margin: "0 10px",
          cursor: "grab",
        }}
        // onMouseDown, onMouseMove, etc.
      >
        {/* Carousel Items */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              minWidth: "200px",     // Adjust item width
              height: "100px",
              margin: "5px",
              backgroundColor: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      
      <button>Right</button>
    </div>
  );
}

export default Carousel;
