import React from "react";
import { Separator } from "@/components/ui/separator";

const MarketingSalesBody = () => {
  return (
    <>
      <div
        className="flex justify-end  flex-col w-full px-5 py-10 xl:px-16 xl:py-32 h-[320px] xl:h-[540px] bg-cover bg-black/30 bg-blend-multiply font-sans text-white"
        style={{ backgroundImage: `url('/assets/abstracttech.jpg')` }}
      >
        <h1 className="text-3xl xl:text-6xl text-white font-light">
          Marketing<br></br>
          <span className="font-medium">& Sales</span>
        </h1>
      </div>
      {/* Whole page comes here */}
      <div className="flex flex-col xl:gap-16 gap-5 py-5 px-10 xl:py-16 xl:px-32 font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-16">
          <h5 className="xl:w-[30%] text-3xl xl:text-4xl ">
            Accelerating Growth{" "}
            <span className="text-integrayellow font-medium">
              Through Strategic
            </span>{" "}
            Revenue Excellence
          </h5>
          <h5 className="xl:w-[70%] text-xl text-black text-justify">
            Marketing and sales form the revenue engine of every successful business—they 
            connect value propositions with market opportunities, transform prospects into 
            customers, and build lasting relationships that drive sustainable growth. At 
            Integra Strategy, we believe that integrated marketing and sales excellence is 
            not just about generating leads or closing deals but about creating a 
            synchronized revenue generation system that delivers predictable results and 
            competitive market positioning.
          </h5>
        </div>
        <div className="py-8">
          <Separator />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-3xl xl:text-5xl font-medium xl:font-light text-gray-800">
            The Power of Integrated Marketing & Sales
          </h4>
          <p className="text-lg text-black">
            Marketing and sales alignment represents the cornerstone of modern business 
            growth strategies. It bridges brand awareness with revenue realization, ensuring 
            that every customer touchpoint contributes to a cohesive journey from initial 
            interest to loyal advocacy. Organizations that master this integration achieve 
            higher conversion rates, shorter sales cycles, and stronger customer lifetime 
            value than those operating in silos.
            <br></br>
            <br></br>
            At Integra Strategy, we help businesses build world-class marketing and sales 
            capabilities that work in perfect harmony. Our approach transcends traditional 
            boundaries between marketing and sales functions; we create unified go-to-market 
            strategies that leverage data-driven insights, modern technologies, and proven 
            methodologies to maximize revenue potential and market share across all channels 
            and customer segments.
          </p>
          <div className="flex flex-col gap-5 xl:gap-10 mt-4 xl:mt-8">
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Marketing Excellence in the Digital Age
              </h5>
              <div className="flex flex-col gap-2">
                <p className="text-lg text-black">
                  In today's hyper-connected marketplace where customers control their 
                  buying journey and expect personalized experiences, marketing excellence 
                  requires sophisticated strategies and flawless execution. Modern marketing 
                  leaders must orchestrate complex multi-channel campaigns that:
                </p>
                <ul className="flex flex-col gap-2 ml-8 list-disc font-sans font-light text-lg">
                  <li>Build compelling brand narratives that resonate across diverse audiences</li>
                  <li>Leverage data analytics to optimize campaign performance and ROI</li>
                  <li>Create seamless omnichannel experiences that engage customers everywhere</li>
                  <li>
                    Harness marketing automation and AI to scale personalization and efficiency
                  </li>
                </ul>
                <p className="font-sans font-light text-lg">
                  Marketing is no longer about broadcasting messages—it's about creating 
                  meaningful connections. Organizations that excel in modern marketing build 
                  trust through value-driven content, nurture relationships through targeted 
                  engagement, and demonstrate measurable impact on business growth through 
                  sophisticated attribution models.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Sales Transformation for Sustainable Growth
              </h5>
              <p className="text-lg text-black">
                Modern sales excellence demands more than relationship building and closing 
                techniques. At Integra Strategy, we help companies transform their sales 
                organizations into strategic revenue drivers by implementing advanced 
                methodologies, enabling technologies, and performance systems. This includes 
                developing consultative selling approaches, implementing sales enablement 
                platforms, and creating data-driven coaching programs that elevate team 
                performance.
                <br></br>
                <br></br>
                By aligning sales processes with customer buying journeys, organizations 
                create frictionless experiences that accelerate decision-making and increase 
                win rates. Whether optimizing territory planning, enhancing pipeline 
                management, or implementing account-based strategies, our approach ensures 
                sales teams operate at peak efficiency while delivering exceptional customer 
                value throughout the entire sales cycle.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Creating Revenue Synergy Through Alignment
              </h5>
              <p className="text-lg text-black">
                True revenue acceleration occurs when marketing and sales operate as one 
                unified force. Organizations that achieve this alignment experience 
                dramatically improved lead quality, higher conversion rates, and accelerated 
                revenue growth. This requires shared metrics, integrated technologies, and 
                collaborative processes that ensure seamless handoffs and consistent 
                messaging throughout the customer journey.
                <br></br>
                <br></br>
                Integra Strategy facilitates this transformation by designing integrated 
                revenue operations frameworks, implementing unified CRM and marketing 
                automation systems, and establishing cross-functional teams that break down 
                traditional silos. By creating shared accountability for revenue outcomes, 
                businesses unlock the full potential of their market-facing teams and create 
                sustainable competitive advantages in their industries.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                The Future of Revenue Generation Excellence
              </h5>
              <p className="text-lg text-black">
                Marketing and sales excellence in the modern era requires continuous 
                evolution and adaptation. Organizations must embrace emerging technologies 
                like artificial intelligence, predictive analytics, and conversational 
                marketing while maintaining the human connections that drive trust and 
                loyalty. The future belongs to companies that can balance technological 
                innovation with authentic customer relationships.
                <br></br>
                <br></br>
                We help businesses prepare for this future by building agile marketing and 
                sales capabilities that can adapt to changing market dynamics, customer 
                expectations, and competitive landscapes. Whether it's implementing 
                account-based marketing strategies, developing social selling programs, or 
                creating customer success frameworks, we ensure our clients stay ahead of 
                the curve in revenue generation excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 xl:px-16 xl:pb-16 ">
        <div className="xl:py-16 py-8 bg-orangegrey rounded-xl">
          <div className="font-sans font-light px-8 xl:px-16">
            <div className="flex flex-col gap-10">
              <h5 className="xl:text-4xl text-3xl font-medium xl:font-light text-grey-800">
                Driving Sustainable Revenue Growth
              </h5>
              <div className="">
                <div className=" flex flex-col gap-5">
                  <p className="text-lg text-black">
                    Exceptional marketing and sales capabilities represent the difference 
                    between market leaders and followers. At Integra Strategy, we help 
                    organizations build integrated revenue generation systems that deliver 
                    predictable growth, maximize customer lifetime value, and create 
                    sustainable competitive advantages. With aligned marketing and sales 
                    functions at the core, businesses don't just reach their targets—they 
                    consistently exceed them, expand market share, and build lasting 
                    customer relationships that fuel long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingSalesBody;