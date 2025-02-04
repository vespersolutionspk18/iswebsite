import React from "react";
import { Button } from "@/components/ui/button";
import ArrowButton from "@/components/ui/ArrowButton";
const ProgramsToElevate = () => {
  return (
    <div className=" font-sans font-light flex flex-col items-center bg-ltonegray xl:pt-28 pt-20 pb-20  px-16 gap-5">
      <h3 className="text-5xl font-light  text-center">
      Strategic Solutions for <br></br>Business Excellence
      </h3>
      <p className="text-lg text-gray-800">
      Transforming operations, financial management, and digital capabilities for sustainable growth and long-term success.
      </p>
      <div className="flex w-full xl:flex-row flex-col gap-5">
        <div className="xl:w-1/2 rounded-3xl bg-white border-[1px] border-gray-200 p-8 flex flex-col gap-3">
          <p className="text-integrayellow text-lg font-medium">
            Empowering Businesses with Strategy
          </p>
          <h4 className="text-2xl font-medium text-gray-800">
            Comprehensive Consulting for Sustainable Growth
          </h4>
          <p className="xl:mt-3 text-lg text-gray-700 text-justify tracking-tight leading-tight">
            Success requires more than just execution—it demands foresight,
            adaptability, and strategic alignment. At Integra Strategy, we help
            businesses navigate complex challenges with data-driven insights,
            robust planning, and transformative solutions. Our expertise ensures
            that every decision is backed by precision, setting the foundation
            for long-term resilience and competitive advantage.
          </p>
        </div>
        <div className="xl:w-1/2 rounded-3xl bg-white border-[1px] border-gray-200 p-8 flex flex-col gap-3">
          <p className="text-integrayellow text-lg font-medium">
            Seamless Digital Transformation
          </p>
          <h4 className="text-2xl font-medium text-gray-800">
            Innovative Technology for a Future-Ready Business
          </h4>
          <p className="xl:mt-3 text-lg text-gray-700 text-justify tracking-tight leading-tight">
            The digital era demands agility and innovation. We empower
            organizations with cutting-edge technology solutions, from cloud
            computing to AI-driven automation, ensuring seamless integration and
            operational efficiency. Our tailored digital strategies help
            businesses scale, optimize workflows, and stay ahead in an
            ever-evolving landscape.
          </p>
        </div>
      </div>
      <div className="flex w-full xl:flex-row flex-col gap-5">
        <div className="xl:w-1/2 rounded-3xl bg-white border-[1px] border-gray-200 p-8 flex flex-col gap-3">
          <p className="text-integrayellow text-lg font-medium">
            Maximizing Financial Performance
          </p>
          <h4 className="text-2xl font-medium text-gray-800">
            Expert Financial Management & Compliance
          </h4>
          <p className="xl:mt-3 text-lg text-gray-700 text-justify tracking-tight leading-tight">
            From bookkeeping to tax compliance, we provide end-to-end financial
            solutions that ensure accuracy, efficiency, and strategic oversight.
            Our approach enhances transparency, mitigates risks, and aligns
            financial operations with business goals, allowing companies to
            focus on growth while maintaining financial integrity and regulatory
            compliance.
          </p>
        </div>
        <div className="xl:w-1/2 rounded-3xl bg-white border-[1px] border-gray-200 p-8 flex flex-col gap-3">
          <p className="text-integrayellow text-lg font-medium">
            Driving Measurable Business Impact
          </p>
          <h4 className="text-2xl font-medium text-gray-800">
            Optimized Operations for Scalable Success
          </h4>
          <p className="xl:mt-3 text-lg text-gray-700 text-justify tracking-tight leading-tight">
            Every process should contribute to business success. Our expertise
            in system design, ERP consulting, and business process optimization
            ensures streamlined operations, improved efficiency, and strategic
            scalability. We transform organizational workflows into
            high-performance ecosystems that drive sustainable growth and
            measurable impact.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProgramsToElevate;
