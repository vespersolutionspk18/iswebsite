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
  const [width, setWidth] = useState<number | 'auto'>('auto');

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth + 25);
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth - 25);
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
