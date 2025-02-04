"use client";
import React, { useState } from "react";
import ButtonRight from "@/public/assets/right.svg";

const Faqsection = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "What types of business challenges can Integra Strategy help with?",
      answer:
        "Integra Strategy offers a range of consulting services designed to address diverse business challenges, including financial management, operational efficiency, market expansion, and organizational transformation. We work with businesses to develop strategies that improve profitability, enhance performance, and foster sustainable growth. Whether you are looking to optimize processes, implement new technologies, or drive strategic change, our team provides tailored solutions to meet your needs.",
    },
    {
      question: "How can Integra Strategy help my business improve financial performance?",
      answer:
        "Integra Strategy provides comprehensive Financial Advisory services, including tax planning, financial reporting, budgeting, and sales tax compliance. Our experts help businesses identify opportunities for cost savings, optimize cash flow, and ensure regulatory compliance. By partnering with Integra Strategy, you can enhance financial transparency, reduce risks, and make data-driven decisions for greater profitability.",
    },
    {
      question: " What sets Integra Strategy apart from other consulting firms?",
      answer:
        "Integra Strategy stands out due to our personalized approach, deep industry knowledge, and data-driven insights. We combine strategic thinking with hands-on expertise to deliver tailored solutions that align with your business goals. Whether you need financial guidance, operational support, or technology solutions, we focus on delivering measurable results and driving long-term success for your organization.",
    },
  ];

  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function
  const toggleSection = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex bg-ltonegray flex-col p-10 md:p-16 md:items-center mt-20">
      <h2 className="font-sans font-light text-4xl md:text-5xl text-[#ec8123]">
        Frequently Asked Questions
      </h2>
      <p className="font-sans mt-5 font-light text-md tracking-tight leading-tight md:text-lg text-gray-800 md:text-center">
        We prioritize your satisfaction, ensuring a secure financial future.
        Choose us for peace of mind
        <br />
        in your business endeavours.
      </p>
      <div className="w-full flex flex-col gap-5 mt-5">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`border-[1px] ${
        expandedIndex === index ? "border-gray-400" : "border-gray-300, bg-white: bg-ltonegray"
      } rounded-3xl p-3 md:p-5 flex flex-col transition-all duration-500`}
    >
      <div
        onClick={() => toggleSection(index)}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <h5 className={`font-sans
           ${ expandedIndex === index ? "text-black" : "text-gray-600"
      }
            font-light text-xl md:text-xl `}>
          {faq.question}
        </h5>
        <div
          className={`rounded-full md:h-[36px] p-1 ml-4 md:ml-0 md:p-0 md:w-[36px] flex items-center justify-center transition-all duration-500 ease-in-out ${
            expandedIndex === index
              ? "bg-[#ec8123] rotate-90"
              : "bg-ltonegray border-[1px] border-gray-300 rotate-0"
          }`}
        >
          <ButtonRight
            className={`md:h-[24px] md:w-[24px] h-[20px] w-[20px] transition-colors duration-500 ${
              expandedIndex === index ? "stroke-white" : "stroke-gray-700"
            }`}
            style={{ strokeWidth: 1.5 }}
          />
        </div>
      </div>
      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expandedIndex === index ? "max-h-[200px] mt-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-800 font-sans font-light text-lg">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Faqsection;
