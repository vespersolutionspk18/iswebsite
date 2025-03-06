"use client";
import Link from 'next/link';
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useState, useRef, useEffect } from 'react';

interface ArrowButtonProps {
  variant: 'plain' | 'filled';
  route: string;
  buttonText: string;
}

const ArrowButton = ({ variant, route, buttonText }: ArrowButtonProps) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState('auto'); // Start with auto width

  const buttonBaseStyles = "group h-[44px] flex-row border-[1px] text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between transition-all duration-500 ease-in-out hover:cursor-pointer overflow-hidden"; // Ensure no overflow

  const buttonVariantStyles = {
    plain: "bg-white border-gray-300 text-gray-900 hover:bg-gray-700 hover:border-gray-700 hover:text-white",
    filled: "bg-gray-700 border-gray-700 text-white hover:bg-[#ec8123] hover:border-[#ec8123]",
  };

  const arrowContainerStyles = {
    plain: "bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]",
    filled: "bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45",
  };

  const ArrowIcon = variant === "plain" ? ButtonArrowwhite : ButtonArrow;

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth + 25); // Increase width by 25px on hover
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth - 25); // Reset width when hover is removed
    }
  };

  useEffect(() => {
    // Initialize width when component mounts
    if (buttonRef.current) {
      setWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  return (
    <Link href={route} passHref>
      <div
        ref={buttonRef} // Store the reference to the button
        id="button"
        className={`${buttonBaseStyles} ${buttonVariantStyles[variant]}`}
        style={{
          width: width, // Set width dynamically based on state
          minWidth: 'fit-content', // Allow content to set the width
          transition: "width 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out", // Smooth transition for width
        }}
        onMouseEnter={handleMouseEnter} // Increase width on hover
        onMouseLeave={handleMouseLeave} // Reset width when hover is removed
      >
        <div className="mx-3 font-sans font-regular" style={{ whiteSpace: "nowrap" }}>
          {buttonText}
        </div>
        <div className={arrowContainerStyles[variant]}>
          <ArrowIcon className="h-[24px] w-[24px]" />
        </div>
      </div>
    </Link>
  );
};

export default ArrowButton;
