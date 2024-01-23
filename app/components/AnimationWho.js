"use client"
import React, { useState, useEffect, useRef } from 'react';

const AnimatedWho = ({ precursorText, texts, fontSize }) => {
    const [height, setHeight] = useState(0);
    const containerRef = useRef();
    const textRef = useRef(); // Ref for a single text element

    useEffect(() => {
        if (textRef.current) {
            // Set the height to the height of a single text element
            setHeight(textRef.current.offsetHeight);
        }
    }, [fontSize, texts]);

    const containerStyle = {
        overflow: 'hidden',
        fontSize: fontSize,
        height: `${height}px`, // Set the height to match one line of text
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Poppins',
    };

    const stringStyle = {
        animation: `move ${1 * texts.length}s infinite`, // Duration depends on the number of texts
        transform: 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: '20px',
    };

    return (
        <div style={containerStyle}>
            {precursorText && <h1>{precursorText}</h1>}
            <div style={stringStyle} ref={containerRef}>
                {texts.map((text, index) => (
                    // Use ref only on the first element
                    <h1 key={index} ref={index === 0 ? textRef : null}>{text}</h1>
                ))}
            </div>
        </div>
    );
};

export default AnimatedWho;