"use client";
import Link from 'next/link';
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useState, useRef, useEffect } from 'react';

interface ArrowButtonProps {
  variant: 'plain' | 'filled';
  route: string;
  buttonText: string;
  onClick?: () => void;
}

const buttonBaseStyles = "group h-[40px] sm:h-[44px] flex-row text-[14px] sm:text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between transition-all duration-500 ease-in-out";

const buttonVariantStyles = {
  plain: "bg-white border-[1px] border-gray-300 text-gray-900 hover:bg-gray-700 hover:border-gray-700 hover:text-white",
  filled: "bg-gray-700 border-[1px] border-gray-700 text-white hover:bg-[#ec8123] hover:border-[#ec8123]"
};

const arrowContainerStyles = {
  plain: "bg-gray-700 rounded-full h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]",
  filled: "bg-white rounded-full h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45"
};

const ArrowIcon = ({ className, variant }: { className: string; variant: 'plain' | 'filled' }) => {
  return variant === 'plain' ? <ButtonArrowwhite className={className} /> : <ButtonArrow className={className} />;
};

const ArrowButton = ({ variant, route, buttonText, onClick }: ArrowButtonProps) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | 'auto'>('auto');
  const [isInitialized, setIsInitialized] = useState(false);

  const handleMouseEnter = () => {
    if (buttonRef.current && isInitialized) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth + 25);
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current && isInitialized) {
      const currentWidth = buttonRef.current.offsetWidth;
      setWidth(currentWidth - 25);
    }
  };

  useEffect(() => {
    // Initialize width after component mounts to ensure smooth transitions
    if (buttonRef.current && !isInitialized) {
      const initialWidth = buttonRef.current.offsetWidth;
      setWidth(initialWidth);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const handleClick = (e: React.MouseEvent) => {
    console.log('ArrowButton clicked, navigating to:', route);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={route} passHref onClick={handleClick}>
      <div
        ref={buttonRef} // Store the reference to the button
        id="button"
        className={`${buttonBaseStyles} ${buttonVariantStyles[variant]}`}
        style={{
          width: width === 'auto' ? 'fit-content' : `${width}px`, // Use fit-content initially, then numeric width
          transition: "width 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out", // Smooth transition for width
        }}
        onMouseEnter={handleMouseEnter} // Increase width on hover
        onMouseLeave={handleMouseLeave} // Reset width when hover is removed
      >
        <div className="mx-3 font-sans font-regular" style={{ whiteSpace: "nowrap" }}>
          {buttonText}
        </div>
        <div className={arrowContainerStyles[variant]}>
          <ArrowIcon className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" variant={variant} />
        </div>
      </div>
    </Link>
  );
};

export default ArrowButton;
