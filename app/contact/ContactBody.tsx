"use client"

import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const ContactBody = () => {
  const { toast } = useToast();

  return (
    <>
      <div className="font-sans font-light flex flex-col items-center p-5 lg:p-16">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl text-center">
            Send Us A{" "}
            <span className="text-integrayellow font-normal">Message</span>
          </h2>
          <p className="text-lg text-black text-center">
            Ready to make your company scale faster? Let&apos;s chat about how we can help.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 w-2/3">
            <div className="flex flex-col xl:flex-row justify-between xl:mt-10 xl:gap-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">First Name</label>
                    <Input type="text" placeholder="First Name" className="w-full" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">Last Name</label>
                    <Input type="text" placeholder="Last Name" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between xl:gap-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">Work Email</label>
                    <Input type="email" placeholder="Email" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between xl:gap-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">Phone Number</label>
                    <Input type="phone" placeholder="Phone Number" className="w-full" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">Company</label>
                    <Input type="text" placeholder="Company" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between xl:gap-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-black text-lg font-normal">Your Message</label>
                    <Textarea  placeholder="Your Message" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:mt-5 xl:gap-5 w-full">
                <div 
                    id="button"
                    className="group bg-white h-[44px] flex-row border-[1px] border-gray-300 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer"
                    onClick={() => {
                        toast({
                            title: "Form has been submitted!",
                            description: "Someone from our team will be in touch shortly.",
                            action: (
                                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                            ),
                            style: { zIndex: 9999 } // Adjust z-index here if using inline styles
                        });
                    }}
                >
                    <div className="mx-3 font-sans font-regular">Submit</div>
                    <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
                        <ButtonArrowwhite className="h-[24px] w-[24px]"/>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default ContactBody;
