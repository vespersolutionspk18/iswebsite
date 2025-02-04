import React from 'react'
import IntegraFooterLogo from "@/public/assets/integra-logo-white.svg"; 
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white mt-16">
       {/* <div className="flex flex-col md:flex-row p-5 md:p-10 justify-between">
            <div className="w-full md:w-[46%] pr-0 md:pr-10 flex flex-col gap-5">
                <IntegraFooterLogo className="h-[90px] w-[220px]" />
                <h3 className="font-sans font-light text-lg md:text-2xl">Your trusted source for expert services. Explore what we have to offer.</h3>
            </div>
            <div className="flex gap-4 md:gap-0 flex-row w-full md:w-[54%] justify-between  md:justify-start mt-5 md:mt-0">
               {/* <div className="w-full md:w-[30%] flex flex-col justify-between font-sans font-light">
                    <p className="text-white text-lg md:text-xl font-normal">Navigation</p>
                    <ul className="text-gray-100 text-md md:text-lg">
                 
                        <Link href="/about"><li className="mt-2">About Us</li></Link>
                        <Link href="/contact"><li className="mt-2">Contact Us</li></Link>
                    </ul>
                </div>
               
                <div className="w-full md:w-[30%] flex flex-col justify-between font-sans font-light">
                    <p className="text-white text-lg md:text-xl font-normal">Company</p>
                    <ul className="text-gray-100 text-md md:text-lg">
         
                        <li className="mt-2">Terms of Use</li>
                        <li className="mt-2">Privacy Policy</li>
                    </ul>
                </div> 
            </div>
        </div> */}
        <div className="pl-5 pr-5 pb-2 ">
            <Separator className="border-gray-500 border-[0.5px]" />
        </div>
        <div className="pr-5 pl-5 pt-2 pb-5 font-light font-sans text-gray-200">
            &#169; Integra Strategy (Pvt.) Ltd. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer