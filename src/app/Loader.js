import React, { useState, useEffect } from "react";
import "./LoaderStyles.css"; // Your CSS for animations
import Image from "next/image";

const Loader = ({ onAnimationEnd }) => {
  // Simulate the animation duration with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd(); // Call parent function to switch to main app
    }, 3000); // Match this with the total animation duration
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="loader">
      <div className="logo">
        <Image src="/Untitled-1.svg" alt="Logo" width={150} height={150} className="logo-animation" />
      </div>
    </div>
  );
};


export default Loader;