import React from 'react'

import ArrowButton from '@/components/ui/ArrowButton'

const AboutSection = () => {
  return (
    <div className="font-sans font-light flex flex-col items-center bg-ltonegray py-20 px-[52px] gap-5">
      <div className="flex flex-col w-full gap-8 items-center">
        <h2 className="text-5xl font-normal xl:mt-8 text-center w-2/3 text-gray-800">Strategic <span className=" text-integrayellow">Business Consulting</span> Designed for Your Success</h2>
        <p className="text-lg tracking-tight leading-tight font-normal  text-center w-2/3 text-gray-700">ith a focus on actionable insights and measurable results, we partner with you to optimize performance, streamline operations, and drive long-term growth.</p>
      </div>
      <div className="flex xl:mt-10 flex-col w-full px-3 gap-10 xl:flex-row ">
        <div className="xl:w-1/2 aspect-square flex flex-col justify-between bg-white rounded-2xl p-10 border-[1px] border-gray-200">
          <h2 className="text-4xl font-normal text-gray-800">Our Approach to Business Development</h2>
          <p className="text-lg font-sans font-light text-black tracking-tight ">At Integra, we believe in the power of tailored solutions to drive business success. With years of experience, we blend in-depth industry knowledge, expert consulting, and innovative strategies to help you overcome challenges and achieve sustainable growth.<br></br><br></br>Our approach is built on a foundation of collaboration and data-driven insights, ensuring that every solution is aligned with your business goals. </p>

          <div className="max-w-fit">
            <ArrowButton variant="plain" route="/about" buttonText="Learn More" />
          </div>

        </div>
        <div className="xl:w-1/2 aspect-square flex flex-col justify-between bg-white border-[1px] border-gray-200 rounded-2xl p-10">
          <h2 className="text-4xl font-normal text-integrayellow">Why We Stand Out from the Competition</h2>
          <div className="text-lg font-sans font-light text-black tracking-tight ">
            When you work with us, you're not just hiring consultants — you&apos;re gaining a dedicated partner in your business journey. We&apos;re not interested in offering generic advice. Instead, we focus on practical, tailored strategies that move your business forward in the real world. Our team is hands-on, engaged, and committed to your success, from start to finish.<br></br><br></br>
            Choosing us means choosing a partner who is fully invested in your success. Our team brings diverse expertise, a hands-on mindset, and an unwavering commitment to your business’s long-term vision.

          </div>
          <div className="max-w-fit">
            <ArrowButton variant="filled" route="/about/why-choose-us" buttonText="Show More Information" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection