import React from 'react'
import { PiMedalThin } from "react-icons/pi";
import { SiFuturelearn } from "react-icons/si";
import { TbArrowBounce } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";
import { PiHandshakeLight } from "react-icons/pi";
import { GiLaurels } from "react-icons/gi";

const AboutBody = () => {
  return (
    <div className="flex flex-col gap-5 xl:gap-16 font-sans font-light text-black">
        
            
        <div className="flex flex-col gap-5 xl:gap-16 px-10 py-5 xl:px-32 xl:py-16">
        <h2 className=" text-2xl xl:text-3xl font-light text-justify">Integra Strategy is a consulting firm dedicated to helping organizations navigate complexity, drive efficiency, and achieve sustainable growth. We partner with businesses to tackle their most pressing challenges and unlock new opportunities through strategic insight and hands-on execution.</h2>
       
       <div>
           <p className="font-light text-justify text-lg ">Integra Strategy is more than just a consulting firm—<span className="font-normal text-integrayellow">we are strategic partners</span> in transformation. Our mission is to help businesses overcome complex challenges, optimize their operations, and <span className="font-normal text-integrayellow">achieve sustainable growth</span> through innovative solutions. We work closely with our clients to provide tailored strategies that drive measurable impact, whether it&apos;s through business consulting, financial management, digital transformation, or operational efficiency.<br></br><br></br>With <span className="font-normal text-integrayellow">deep expertise</span> across multiple industries, we bring both strategic vision and hands-on implementation to every engagement. Our approach is not just about identifying problems; it&apos;s about crafting solutions that lead to <span className="font-normal text-integrayellow">real, lasting change</span>. From navigating regulatory complexities to leveraging emerging technologies, Integra Strategy equips organizations with the tools they need to succeed in a fast-evolving business environment.</p>
       </div>
       <div className="flex  flex-row gap-3 xl:gap-16 justify-center">
           <div className="flex flex-col  xl:gap-5 justify-between">
               <h4 className="text-3xl xl:text-5xl text-integrayellow text-center font-medium">10+</h4>
               <p className="text-lg text-center font-light">Years of Experience</p>
           </div>
           <div className="flex flex-col xl:gap-5 justify-between">
               <h4 className="text-3xl xl:text-5xl text-integrayellow text-center font-medium">&gt;100</h4>
               <p className="text-lg text-center font-light">Happy Clients</p>
           </div>
           <div className="flex flex-col gap-5 justify-between">
               <h4 className="text-3xl xl:text-5xl text-integrayellow text-center font-medium">18</h4>
               <p className="text-lg text-center font-light">Countries We Work In</p>
           </div>
           <div className="flex flex-col gap-5 justify-between">
               <h4 className="text-3xl xl:text-5xl text-integrayellow text-center font-medium">34</h4>
               <p className="text-lg text-center font-light">Field Experts</p>
           </div>
           

       </div>
      <div className="flex xl:flex-row  xl:gap-12 mt-10 xl:mt-16">
      <div id="our mission" className="flex flex-col">
           <h4 className="text-2xl xl:text-5xl text-gray-700   font-medium xl:font-light">Our Mission</h4>
           <p className="text-lg mt-2 xl:mt-5 font-light text-justify">
           At Integra Strategy, we believe that success is built on a foundation of clarity, agility, and execution. Our mission is to empower businesses with the insights, strategies, and tools they need to navigate change, capitalize on new opportunities, and stay ahead of the curve.
           <br></br><br></br>We are not just advisors; we are enablers of transformation. Whether a business is looking to streamline operations, optimize financial structures, implement cutting-edge ERP systems, or drive a full-scale digital transformation, we provide the expertise to turn strategy into action.
           <br></br><br></br>Through our work, we strive to:
           </p>
           <ul className="text-lg list-disc pl-16"> 
 <li className="mt-5"><b>Enhance Operational Efficiency:</b> We refine business processes, eliminate inefficiencies, and implement best practices that drive productivity and cost-effectiveness.</li>
 <li><b>Ensure Compliance and Financial Integrity:</b> Our deep understanding of taxation, audit, and financial management helps organizations maintain transparency and adhere to regulatory requirements.</li>
 <li><b>Drive Digital Transformation:</b> We help businesses harness the power of technology to modernize operations, improve customer experiences, and unlock new revenue streams.</li>
 <li><b>Support Sustainable Growth:</b> Our strategies are designed not just for immediate results but for long-term success, ensuring that businesses remain resilient and competitive in an evolving marketplace.</li>
</ul>

       </div>
       <div className="w-[0px] xl:w-full xl:px-16 xl:py-32 h-auto rounded-2xl bg-cover bg-left" style={{backgroundImage: `url('/assets/herosecond.jpg')`}}></div>
      </div>
        </div>
       {/*<div id="our guiding values" className="flex flex-col p-16    gap-10 xl:mt-16">
            <h4 className="text-5xl  text-gray-800   font-light"><span className=" text-integrayellow">Our Guiding Principles:</span> A Commitment to Excellence and Integrity</h4>
            <p className="text-lg font-light text-justify">
            At Integra Strategy, our work is driven by a set of guiding principles that shape how we serve our clients and how we operate as a firm. These principles define our approach and set us apart as a trusted partner for businesses seeking transformative change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      <div className="flex flex-col gap-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="border-[1px] border-gray-200 p-5 flex flex-col gap-3 rounded-xl ">
            <h3 className="text-2xl  text-integrayellow font-medium">Challenging the Status Quo</h3>
            <p className="mt-2 text-lg   text-black">
              We believe that progress begins with asking the right questions. By challenging traditional 
              thinking and exploring new perspectives, we uncover innovative solutions to complex business 
              challenges. Our analytical rigor allows us to identify inefficiencies, rethink processes, and 
              introduce strategies that drive real impact.
            </p>
          </div>

          <div className="border-[1px] border-gray-200 p-5 flex flex-col gap-3 rounded-xl">
            <h3 className="text-2xl text-integrayellow font-medium">Creating Lasting Impact</h3>
            <p className="mt-2 text-lg    text-black">
              Our goal is not just to solve immediate problems but to create long-term value. We work with 
              businesses to implement sustainable strategies that continue to deliver results long after our 
              engagement ends. By focusing on the bigger picture, we help organizations future-proof their 
              operations and remain competitive in an ever-changing landscape.
            </p>
          </div>
        </div>

        <div className="border-[1px] border-gray-200 p-5 rounded-xl flex flex-col gap-3">
          <h3 className="text-2xl font-medium text-integrayellow">Mastering Complexity</h3>
          <p className="mt-2 text-black text-lg  ">
            In today&apos;s business world, challenges are rarely straightforward. Whether navigating regulatory 
            frameworks, optimizing supply chains, or implementing enterprise-wide digital solutions, we specialize 
            in making sense of complexity. Our expertise allows us to identify hidden opportunities, mitigate risks, 
            and develop solutions that provide businesses with a competitive edge.
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-5">
 
        <div className="border-[1px] border-gray-200 p-5 flex flex-col gap-3 rounded-xl ">
          <h3 className="text-2xl font-medium text-integrayellow">Leading with Integrity</h3>
          <p className="mt-2 text-black text-lg">
            Trust and transparency are at the core of everything we do. We believe in open, honest communication 
            with our clients and remain committed to ethical business practices. By upholding the highest standards 
            of professionalism and integrity, we ensure that our solutions are not only effective but also aligned 
            with the best interests of our clients and stakeholders.
          </p>
        </div>

        <div className="border-[1px] border-gray-200 p-5 flex flex-col gap-3 rounded-xl  h-auto md:flex-grow">
          <h3 className="text-2xl font-medium text-integrayellow">Growing by Empowering Others</h3>
          <p className="mt-2 text-black text-lg">
            We succeed when our clients succeed. That&apos;s why we focus on empowering organizations with the knowledge, 
            tools, and capabilities they need to continue growing long after our engagement. Through hands-on 
            collaboration and knowledge-sharing, we enable businesses to build internal expertise and drive their 
            own success.
          </p>
          <p className="mt-2 text-black text-lg">
            Our approach extends beyond just consultation—we embed ourselves in our clients&apos; teams, working 
            alongside them to implement solutions that lead to real transformation. By fostering a culture 
            of continuous learning and upskilling, we ensure that businesses are not just adapting to change, 
            but leading it.
          </p>
          <p className="mt-2 text-black text-lg">
            
          </p>
        </div>
      </div> 
    </div>

        </div>*/}

<div className="flex flex-row px-10 py-5 gap-5 xl:px-32 xl:py-16 xl:gap-12 ">

      <div id="our mission" className="flex flex-col">
           <h4 className="xl:text-5xl text-2xl text-gray-700   font-light"><span className="font-medium text-integrayellow">Our Guiding Principles: </span>A Commitment to Excellence and Integrity</h4>
           <p className="text-lg mt-5 font-light text-justify">
           At Integra Strategy, our work is driven by a set of guiding principles that shape how we serve our clients and how we operate as a firm. These principles define our approach and set us apart as a trusted partner for businesses seeking transformative change.
           </p>
           <div className="flex flex-col xl:gap-5 mt-5 xl:mt-10">
            <h5 className="text-xl xl:text-3xl text-integrayellow font-medium">1. Challenging the Status Quo</h5>
            <p className="text-lg text-black font-light">We believe that progress begins with asking the right questions. By challenging traditional thinking and exploring new perspectives, we uncover innovative solutions to complex business challenges. Our analytical rigor allows us to identify inefficiencies, rethink processes, and introduce strategies that drive real impact.</p>
           </div>
           <div className="flex flex-col xl:gap-5 mt-5 xl:mt-10">
            <h5 className="xl:text-3xl text-xl text-integrayellow font-medium">2. Creating Lasting Impact</h5>
            <p className="text-lg text-black font-light">Our goal is not just to solve immediate problems but to create long-term value. We work with businesses to implement sustainable strategies that continue to deliver results long after our engagement ends. By focusing on the bigger picture, we help organizations future-proof their operations and remain competitive in an ever-changing landscape.</p>
           </div>
           <div className="flex flex-col xl:gap-5 mt-5 xl:mt-10">
            <h5 className="text-xl xl:text-3xl text-integrayellow font-medium">3. Mastering Complexity</h5>
            <p className="text-lg text-black font-light">In today&apos;s business world, challenges are rarely straightforward. Whether navigating regulatory frameworks, optimizing supply chains, or implementing enterprise-wide digital solutions, we specialize in making sense of complexity. Our expertise allows us to identify hidden opportunities, mitigate risks, and develop solutions that provide businesses with a competitive edge.</p>
           </div>
           <div className="flex flex-col xl:gap-5 mt-5 xl:mt-10">
            <h5 className="text-xl xl:text-3xl text-integrayellow font-medium">5. Growing by Empowering Others</h5>
            <p className="text-lg text-black font-light">We succeed when our clients succeed. That&apos;s why we focus on empowering organizations with the knowledge, tools, and capabilities they need to continue growing long after our engagement. Through hands-on collaboration and knowledge-sharing, we enable businesses to build internal expertise and drive their own success.</p>
           </div>

       </div>
      
      </div>
      <div className="p-5 xl:px-16 xl:py-16 ">
      <div className="flex flex-row gap-5 xl:gap-12 bg-orangegrey p-5 xl:p-16 rounded-xl">
      <div id="our mission" className="flex  flex-col ">
           <h4 className="text-2xl xl:text-5xl text-gray-700 font-medium  xl:font-light">Our Values</h4>
           <p className="text-lg mt-2 xl:mt-5 font-light text-justify">
           Integra Strategy is built on a strong foundation of values that guide our approach to every client engagement. These values define who we are and how we operate:
           </p>
           <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-5 mt-5 xl:mt-10">
  <div className="flex flex-col xl:gap-3 items-center">
    <PiMedalThin className="w-10 h-10 xl:w-24 xl:h-24 fill-integrayellow" />
    <h5 className="text-gray-700 text-xl xl:text-2xl font-medium text-center">Client-Centric Focus</h5>
    <p className="text-center text-lg text-gray-600 font-light">We prioritize our clients&apos; success above all else, tailoring our solutions to their specific needs and goals.</p>
  </div>
  <div className="flex flex-col xl:gap-3 items-center">
    <TbArrowBounce className="h-10 w-10 xl:w-24 xl:h-24 stroke-integrayellow" />
    <h5 className="text-gray-700 text-xl xl:text-2xl font-medium text-center">Innovation & Agility</h5>
    <p className="text-center text-lg text-gray-600 font-light">We embrace change and continuously seek new ways to drive efficiency, growth, and competitive advantage.</p>
  </div>
  <div className="flex flex-col xl:gap-3 items-center">
    <TfiTarget className="h-10 w-10 xl:w-24 xl:h-24 fill-integrayellow" />
    <h5 className="text-gray-700 text-2xl font-medium text-center">Excellence & Precision</h5>
    <p className="text-center text-lg text-gray-600 font-light">We hold ourselves to the highest standards, ensuring that every strategy we develop is grounded in expertise and meticulous execution.</p>
  </div>
  <div className="flex flex-col xl:gap-3 items-center">
    <PiHandshakeLight className="h-10 w-10 xl:w-24 xl:h-24 fill-integrayellow" />
    <h5 className="text-gray-700 text-xl xl:text-2xl font-medium text-center">Collaboration & Partnership</h5>
    <p className="text-center text-lg text-gray-600 font-light">We believe in working side by side with our clients, fostering strong relationships built on trust, transparency, and shared success.</p>
  </div>
  <div className="flex flex-col xl:gap-3 items-center">
    <SiFuturelearn className="h-10 w-10 xl:w-24 xl:h-24 fill-integrayellow" />
    <h5 className="text-gray-700 text-xl xl:text-2xl font-medium text-center">Continuous Improvement</h5>
    <p className="text-center text-lg text-gray-600 font-light">We periodically review and refine our Code of Conduct to align with evolving best practices in corporate ethics and governance.</p>
  </div>
  <div className="flex flex-col xl:gap-3 items-center">
    <GiLaurels className="w-10 h-10 xl:w-24 xl:h-24 fill-integrayellow" />
    <h5 className="text-gray-700 text-xl xl:text-2xl font-medium text-center">Ethical Responsibility</h5>
    <p className="text-center text-lg text-gray-600 font-light">Integrity and ethical business practices are non-negotiable—we hold ourselves accountable to the highest standards.</p>
  </div>
</div>

       </div>
      </div>
      </div>
        
    </div>
  )
}

export default AboutBody