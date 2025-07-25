"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import ArrowButton from "@/components/ui/ArrowButton";

const Hero = () => {
  const [scope, animate] = useAnimate();

  // Words to animate
  const words = "Empowering Excellence through Management Consulting";

  // Split words for rendering
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [animate]); // Add animate to the dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`opacity-0 ${idx < 2 ? "text-integrayellow" : "text-black"}`} // Apply text-integrayellow to first two words
            style={{
              filter: "blur(10px)", // Start with blurred words
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 p-6 sm:p-8 md:p-12 xl:p-16 mt-[64px] font-sans text-light">
      <div className="xl:w-1/2 flex flex-col gap-6 sm:gap-8 xl:gap-10 justify-center">
      <motion.div
  initial={{
    x: -480,
    y: -10,
    opacity: 0,
    filter: "blur(30px)", // Start with a blur of 3px
  }}
  animate={{
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)", // End with no blur
  }}
  transition={{
    duration: 0.5, // Duration for the entire animation
    delay: 0.2,    // Delay before the animation starts
    ease: "easeInOut", // Smooth transition easing
  }}
>


          <div className="py-1 px-2 text-gray-600 max-w-fit flex text-md rounded-full border-[1px] border-gray-300">
            Management Consultants
          </div>
        </motion.div>

        {/* Parent motion for the heading */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-gray-800 font-light">
          {/* Render the animated words */}
          {renderWords()}
        </motion.h1>

        {/* Fade-in animation for the paragraph */}
        <motion.p
          className="text-base sm:text-lg text-black font-light tracking-tight leading-tight"
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Target opacity
          transition={{ duration: 1, delay: 1 }} // Animation duration and delay
        >
          Our expert training and consulting solutions pave the way for your
          organization&apos;s success by driving continuous improvement,
          innovation, and exceptional performance.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 xl:mt-4">
        <motion.div
      initial={{ opacity: 0, x: -50 }} // Start off with slight opacity and moved to the left
      animate={{ opacity: 1, x: 0 }}    // Fade in and move to its original position
      transition={{ duration: 0.7,delay:1.2, ease: "easeIn" }} // Duration and easing for smoothness
    >
      <ArrowButton
        variant="filled"
        route="/about"
        buttonText="Learn More About Us"
      />
    </motion.div>
          <motion.div
      initial={{ opacity: 0, x: 50 }} // Start off with slight opacity and moved to the left
      animate={{ opacity: 1, x: 0 }}    // Fade in and move to its original position
      transition={{ duration: 0.7, delay:1.2, ease: "easeIn" }} // Duration and easing for smoothness
    >
      <ArrowButton variant="plain" route="/contact" buttonText="Get In Touch" />
    </motion.div>
        </div>

        <motion.div 
  className="w-full xl:mt-5 flex flex-col sm:flex-row border-[1px] border-gray-200 rounded-xl items-center justify-between gap-4 sm:gap-5 py-6 sm:py-8 px-4 sm:px-6"
  initial={{ opacity: 0, y: 50 }}  // Start below the final position
  animate={{ opacity: 1, y: 0 }}  // Move upwards to the final position
  transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }} // Duration and easing for smoothness
>

          <div className="flex transition-all duration-500 ease-in-out hover:scale-110 flex-row gap-3 font-light text-lg sm:text-xl">
            <GoPerson className="h-6 w-6 sm:h-7 sm:w-7 stroke-gray-500 fill-integrayellow" />
            <p>Individuals</p>
          </div>
          <div className="flex flex-row transition-all duration-500 ease-in-out hover:scale-110 gap-3 font-light text-lg sm:text-xl">
            <GoPeople className="h-6 w-6 sm:h-7 sm:w-7 stroke-gray-500 fill-integrayellow" />
            <p>Scaling Companies</p>
          </div>
          <div className="flex flex-row transition-all duration-500 ease-in-out hover:scale-110 gap-3 font-light text-lg sm:text-xl">
            <HiOutlineBuildingOffice className="h-6 w-6 sm:h-7 sm:w-7 stroke-integrayellow" />
            <p>Enterprise</p>
          </div>
        </motion.div>
      </div>

      {/* Right section with background images */}
      <div className="xl:w-1/2 xl:-my-10 flex flex-col gap-3 sm:gap-5">
      <motion.div
      className="w-full h-[250px] sm:h-[300px] md:h-[350px] xl:h-2/3 bg-cover rounded-2xl bg-black/15 bg-blend-multiply"
      style={{ backgroundImage: `url('/assets/heroimage3.jpg')` }}
      initial={{ opacity: 0, scale: 0.95 }} // Start with opacity animation
      animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
      transition={{ duration: 0.6, delay:1, ease: "easeInOut" }} // Duration and easing for smooth effect
    ></motion.div>
        <motion.div
  className="w-full h-[150px] sm:h-[180px] md:h-[200px] xl:h-1/3 bg-top bg-cover rounded-2xl"
  style={{ backgroundImage: `url('/assets/herothird.jpg')` }}
  initial={{ opacity: 0, scale: 0.95 }} // Start with opacity animation
  animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
  transition={{ duration: 0.6, delay:1, ease: "easeInOut" }}

></motion.div>

      </div>
    </div>
  );
};

export default Hero;
