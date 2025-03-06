"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

interface Tab {
  id: string;
  label: string;
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonRoute: string;
}

const tabs: Tab[] = [
  {
    id: "Accounts Management",
    label: "Accounts Management",
    image: "/assets/accm.jpg", // Background image path
    heading: "Accounts Management",
    paragraph:
      "<p>Effective management of accounts payable and receivable is critical to maintaining healthy cash flow and ensuring smooth business operations. At Integra Strategy, we provide end-to-end solutions to streamline these processes, reduce manual errors, and enhance accuracy. Our experts leverage the latest tools and best practices to ensure timely payments to suppliers and efficient collection of outstanding receivables. By automating workflows and implementing robust controls, we help businesses optimize working capital and improve financial forecasting.<br></br> Our tailored services cater to businesses of all sizes, enabling them to focus on core operations while we handle the complexities of financial transactions. Whether it&apos;s managing vendor relationships, reconciling accounts, or analyzing receivable trends, Integra Strategy ensures seamless integration with your existing systems. With our commitment to excellence, we empower your business to minimize risks, boost productivity, and achieve greater financial stability.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/financial-advisory/accounts-management", // Route for the button
  },
  {
    id: "Bookkeeping",
    label: "Bookkeeping",
    image: "/assets/bookkeeping.jpg",
    heading: "Bookkeeping",
    paragraph:
      "<p>Accurate and up-to-date bookkeeping is the foundation of sound financial management. At Integra Strategy, our Bookkeeping - Review & Reconciliation services are designed to provide businesses with a clear and accurate picture of their financial health. We meticulously review your financial records, ensuring compliance with accounting standards and rectifying any discrepancies. Our reconciliation process verifies that your financial transactions align with bank statements, credit card reports, and other records, eliminating errors and ensuring reliability.<br></br>By entrusting your bookkeeping needs to Integra Strategy, you gain more than just compliance—you unlock valuable insights into your financial operations. We help identify inefficiencies, prevent potential risks, and prepare your accounts for audits and tax filing with confidence. Whether you're a small business or a large enterprise, our dedicated team ensures that your books are not only accurate but also a strategic asset for informed decision-making.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/financial-advisory/bookkeeping",
  },

  {
    id: "payroll",
    label: "Payroll",
    image: "/assets/payroll.jpg",
    heading: "Payroll",
    paragraph:
      "<p>Efficient payroll management is essential for maintaining employee satisfaction and ensuring compliance with labor laws and tax regulations. At Integra Strategy, we provide seamless Payroll Management services that streamline the entire payroll process, from calculating wages and benefits to managing deductions and ensuring accurate tax filings. Our solutions are designed to save you time, reduce errors, and enhance confidentiality, allowing you to focus on growing your business.<br></br>Whether your workforce is local or global, Integra Strategy tailors payroll services to meet your unique needs. We handle complex tasks such as multi-jurisdictional compliance, direct deposits, and employee tax reporting with precision and reliability. With our expertise, you can ensure that your payroll processes are accurate, timely, and compliant, fostering trust and transparency within your organization. Let us take the stress out of payroll management while you concentrate on achieving your business goals.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/financial-advisory/payroll",
  },
  {
    id: "corporate-strategy",
    label: "Corporate Strategy",
    image: "/assets/hero2.jpg",
    heading: "Corporate Strategy",
    paragraph:
      "<p>A well-crafted corporate strategy is essential for defining the direction and long-term success of your business. At Integra Strategy, we specialize in creating comprehensive Corporate Strategy solutions that align with your vision and position you for sustainable growth. Our team works collaboratively with you to analyze market dynamics, assess competitive landscapes, and identify opportunities for differentiation. From defining core objectives to optimizing resource allocation, we help you craft a roadmap that drives innovation and maximizes value.<br></br>Whether you're seeking to expand into new markets, streamline operations, or enhance shareholder value, our tailored strategies are designed to meet your unique needs. Integra Strategy combines data-driven insights with strategic foresight, enabling you to adapt to change and seize emerging opportunities. With our expertise, you can confidently navigate complexities, build organizational agility, and achieve lasting success in a competitive global environment. Let us help you transform your vision into measurable results.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/business-consulting/corporate-strategy",
  },
  {
    id: "business-purpose",
    label: "Business Purpose",
    image: "/assets/startup-services.jpeg",
    heading: "Business Purpose",
    paragraph:
      "<p>A clear and well-defined purpose is the cornerstone of any successful business or organization. At Integra Strategy, we help companies articulate, refine, and align their purpose to drive meaningful impact and long-term growth. Our Business & Organisational Purpose services focus on uncovering the core values and mission that distinguish your organization, ensuring they resonate with employees, stakeholders, and customers alike. By aligning purpose with strategy, we enable businesses to build a strong foundation for decision-making, culture, and brand identity.<br></br>Our approach is both analytical and collaborative, combining deep industry knowledge with a personalized understanding of your goals. Whether you're navigating a transformation, redefining your vision, or strengthening employee engagement, Integra Strategy provides expert guidance to create a purpose-driven roadmap. By fostering alignment across all levels of your organization, we help you inspire innovation, enhance performance, and build lasting value in a rapidly changing world.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/business-consulting/business-purpose",
  },
  {
    id: "business-resilience",
    label: "Business Resilience",
    image: "/assets/bresilience.webp",
    heading: "Business Resilience",
    paragraph:
      "<p>In an ever-changing and unpredictable world, business resilience is key to ensuring sustainability and success. At Integra Strategy, we offer tailored Business Resilience services designed to help organizations anticipate challenges, adapt to disruptions, and emerge stronger. Our approach combines risk management, strategic planning, and operational flexibility to create a robust framework that safeguards your business from unforeseen events. From supply chain disruptions to economic uncertainties, we equip you with the tools and strategies to navigate complexity with confidence.<br></br>Our experts work closely with you to assess vulnerabilities, develop contingency plans, and integrate resilience into your core operations. Whether it's enhancing cybersecurity, diversifying revenue streams, or improving crisis response, Integra Strategy ensures that your business is prepared for any scenario. With a focus on proactive solutions and continuous improvement, we help you build a resilient organization that thrives in the face of adversity and seizes opportunities for growth.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/busines-consulting/business-resilience",
  },
  {
    id: "artificial-intelligence",
    label: "Artificial Intelligence",
    image: "/assets/artificial-intelligence.jpg",
    heading: "Artificial Intelligence",
    paragraph:
      "<p>At Integra, our AI services transcend traditional offerings. Our experts become an integral part of your team, providing tailored AI-driven solutions for as long as you need. Every solution we craft is marked by cutting-edge innovation, unparalleled precision, user-centric design, and the ability to scale effortlessly as your business grows.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; AI/ML Consulting</li><li>&#x2022; Custom AI/ML Model Development</li><li>&#x2022; AI/ML Product Development</li><li>&#x2022; AI/ML Model Enhancement</li><li>&#x2022; AI/ML Integration Services</li></ul>",
    buttonText: "Learn More",
    buttonRoute: "/services/digital/ai-enabled-processes",
  },
  {
    id: "erp-consulting",
    label: "ERP Consulting",
    image: "/assets/erp-consulting.jpg",
    heading: "ERP Consulting",
    paragraph:
      "<p>Integra Strategy takes ERP consulting to the next level by partnering with your business to streamline operations and enhance productivity. Our consultants work closely with your team to ensure a tailored approach that aligns with your strategic goals and day-to-day activities.<br></br>From assessing your current systems to implementing custom ERP solutions, we focus on minimizing inefficiencies and driving continuous improvement. Our services cover everything from process optimization to integration, ensuring your ERP system delivers maximum value across every department.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; ERP Needs Assessment and Strategy</li><li>&#x2022; ERP System Implementation</li><li>&#x2022; Business Process Optimization</li><li>&#x2022; ERP Integration Services</li><li>&#x2022; ERP Customization and Development</li></ul>",
    buttonText: "Learn More",
    buttonRoute: "/services/digital/erp-consulting",
  },
  {
    id: "digital-strategy",
    label: "Digital Strategy",
    image: "/assets/darklights.jpg",
    heading: "Digital Strategy",
    paragraph:
      "<p>In today&apos;s digital world, businesses must align technology with their core goals to stay competitive. Integra Strategy helps organizations transform by integrating digital processes, platforms, and services—enabling growth in a connected, data-driven landscape. From cloud infrastructure to optimized digital workflows, we prepare businesses for future success.<br></br>To lead, businesses must turn data into actionable insights and deliver exceptional customer experiences. Integra Strategy uses advanced analytics, AI, and scalable ecosystems to create personalized journeys, drive growth, and ensure agility and security in the digital age.</p>",
    buttonText: "Learn More",
    buttonRoute: "/services/digital/digital-strategy",
  },
];

const TabButton = ({ tab, isActive, onClick }) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setTextWidth(textRef.current.offsetWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [tab.label]);

  const padding = 20; // Space between text and icon
  const iconStartX = textWidth + padding;
  const iconEndX = containerWidth - 48; // 12px from the right edge plus icon width (20px)

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={`w-full p-3 md:p-4 text-xs md:text-2xl text-left relative ${
        isActive
          ? "text-integrayellow font-medium p-4 bg-white border-[1px] border-gray-200 rounded-2xl"
          : "text-slate-800 font-light border-[1px] border-gray-200 rounded-2xl"
      }`}
    >
      <div className="flex items-center">
        <span ref={textRef} className="inline-block">
          {tab.label}
        </span>
        <motion.div
          className="absolute inline-flex items-center"
          animate={{
            x: isActive ? iconEndX : iconStartX,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <FaRegArrowAltCircleRight
            className={`md:h-5 md:w-5 h-2 w-2 ${
              isActive ? "text-slate-900" : "text-slate-300 rotate-90"
            }`}
          />
        </motion.div>
      </div>
    </button>
  );
};

const SerTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isClient, setIsClient] = useState(false);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col xl:mt-5" id="sectors">
      <div className="flex flex-row justify-between gap-3 md:gap-10">
        <div className="w-[40%]">
          <ul className="list-none p-0 m-0 flex flex-col gap-0 md:gap-5">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <TabButton
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => handleClick(tab.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[60%] bg-white p-5 rounded-2xl border-[1px] border-gray-200">
          {activeTabContent && isClient && (
            <div className="flex flex-col gap-4">
              <div
                className="h-16 md:h-80 bg-cover bg-center rounded-md md:rounded-[12px]"
                style={{ backgroundImage: `url(${activeTabContent.image})` }}
              ></div>
              <h2 className="text-sm md:text-4xl font-light md:my-3">
                {activeTabContent.heading}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }}
                className="text-black font-light text-xs md:text-lg tracking-tight leading-tight text-justify"
              />
              <div className="max-w-fit">
                <ArrowButton
                  variant="filled"
                  buttonText={activeTabContent.buttonText}
                  route={activeTabContent.buttonRoute}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-ltonegray flex flex-col p-16 font-sans font-light gap-10">
      <div id="pre-menu heading" className="flex flex-col gap-4">
        <h5 className="text-5xl font-light text-integrayellow">
          Capability Portfolio <br />
          Range
        </h5>
        <p className="text-lg text-gray-800">
          Experiential and transformational sales leadership training
        </p>
      </div>
      <div id="contains the tab section">
        <SerTabs />
      </div>
    </div>
  );
};

export default ServicesSection;
