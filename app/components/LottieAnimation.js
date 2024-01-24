"use client"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, delay = 0, ...props }) => {
    const animationContainer = useRef(null);
    const anim = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            anim.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice' // This setting ensures full coverage
                }
            });
            
        }, delay);

        return () => {
            if (anim.current) {
                anim.current.destroy();
            }
            clearTimeout(timer);
        };
    }, [delay, animationData]);

    return (
        <div 
            ref={animationContainer} 
            style={{ width: '100%', height: '100%' }} // Ensuring full width and height
            {...props}
        ></div>
    );
};

export default LottieAnimation;
