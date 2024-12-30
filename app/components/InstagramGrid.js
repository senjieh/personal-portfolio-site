import React, { useEffect, useRef } from 'react';

const InstagramGrid = ({ animState }) => {

    const image_files = [
        "/images/0.jpg",
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg"
    ]

  
    return (
      <div className="instagram-grid">
        <div className="igr">
          <div className="igr1c1">
            <img
              src={image_files[0]}
              alt={`Instagram Image 0`}

            />
          </div>
          <div className="igr1c2">
            <img
              src={image_files[1]}
              alt={`Instagram Image 0`}
            />
          </div>
        </div>
        <div className="igr2">
          <div className="igr1c2">
            <img
              src={image_files[2]}
              alt={`Instagram Image 0`}

            />
          </div>
          <div className="igr1c1">
            <img
              src={image_files[3]}
              alt={`Instagram Image 0`}
            />
          </div>
        </div>
        <div className="igr">
          <div className="igr1c1">
            <img
              src={image_files[4]}
              alt={`Instagram Image 0`}

            />
          </div>
          <div className="igr1c2">
            <img
              src={image_files[5]}
              alt={`Instagram Image 0`}
            />
          </div>
        </div>
      </div>
  );
  }

export default InstagramGrid;