import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { poppins, archivo } from "../fonts/fonts";
import Image from "next/image";
// import GradualSpacing from "@/components/ui/gradual-spacing";

const HeroSection = ({ theme, setTheme }) => {
  const [videoSrc, setVideoSrc] = useState(theme);
  const heading = "Aimpire Digitech";
  const subheading =
    "This is a sample subheading with bunch of words. This line is long enough that it will wrap to the next line.";

  useEffect(() => {
    // Update the video source when the theme changes
    setVideoSrc(theme === "light" ? "/bg_dark.mp4" : "/bg_light.mp4");
  }, [theme]);

  return (
    <div className="relative mx-auto w-full">
      {/* Video Background */}
      <video
        key={theme} // This forces the video to re-render when the theme changes
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 blur-[1px] -z-10"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="flex justify-between w-full">
          <div className="basis-1/2"></div>
          <div className="flex justify-center gap-10 items-center">
            <div className="flex flex-col p-20 gap-6 w-2/3">
              <div
                className={`${archivo.className} mt-8 font-bold text-6xl text-CosmosBlue dark:text-TheNewBlack`}
              >
                {heading.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`animate-fade-up ${
                      index * 300
                    }`}
                    style={{ animationDelay: `${index * 300 + 500}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </div>

              <p className={`${poppins.className} text-lg text-wrap`}>
                This is a hero section. Here you can add some text. To check the
                theme, click on the navbar.
              </p>
            </div>
            <div className="w-[6px] border h-1/3 rounded-full overflow-hidden">
              <div className="h-3/3 origin-top bg-black/75 dark:bg-white/75 rounded-full animate-grow-shrink"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
