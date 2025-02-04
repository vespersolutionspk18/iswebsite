import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import Link from 'next/link';

const GetinTouchSection = () => {
  return (
    <div className="mt-10 md:mt-20 p-8 bg-white">
        <div className="flex flex-col md:flex-row p-7 md:p-10 ">
        <div className="md:ml-10 ml-0 w-full  md:w-1/2 font-sans font-light text-gray-700 text-3xl md:text-4xl">
    Empowering Businesses<br></br>     <b className="text-[#ec8123]">Driving Transformation</b><br></br>Delivering Impact
        </div>
        <div className="mr-0 md:mr-10  mt-5 md:mt-0 w-full md:w-1/2 flex flex-col">
        <p className="font-light text-lg md:text-xl text-gray-700 font-sans text-justify">
            Integra: A global leader in financial, business, and advisory services, united in expertise, and cultural understanding to deliver exceptional, tailored solutions in revenue, tech, tax, financial advisory, consulting and other services
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-5 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h5 className="font-sans font-light text-3xl text-gray-700">34</h5>
        <p className="font-sans font-light text-xl text-gray-700">Experts in the field</p>
        
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h5 className="font-sans font-light text-3xl text-gray-700">18</h5>
        <p className="font-sans font-light text-xl text-gray-700">Countries we work in </p>
        
        </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-10">
                <div className="flex flex-col md:gap-5">
                    <Link href="/contact">
                    <div id="button"
                        className="group bg-white h-[44px] flex-row border-[1px] border-gray-300 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer">
                        <div className="mx-3 font-sans font-regular">Get In Touch</div>
                        <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
                            <ButtonArrowwhite className="h-[24px] w-[24px]"/>
                        </div>
                    </div></Link>
                </div>
                <div className="hidden md:flex flex-col md:gap-5">
                <Link href="/about/why-choose-us">
                    <div id="button"
                        className="group bg-gray-700 h-[44px] flex-row border-[1px] border-gray-700 text-white text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-[#ec8123] hover:border-[#ec8123] hover:text-white hover:cursor-pointer">
                        <div className="mx-3 font-sans font-regular">Why Us</div>
                        <div className="bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                            <ButtonArrow className="h-[24px] w-[24px]"/>
                        </div>
                    </div></Link>
                </div>
                </div>
                
        </div>
    </div>
    
    </div>
  )
}

export default GetinTouchSection