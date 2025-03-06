"use client";
import React, { useState } from "react";
import IntegraLogo from "@/public/assets/int-logo.svg";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import ArrowButton from "@/components/ui/ArrowButton";
import Image from 'next/image';

interface Tab {
  name: string;
  content: string;
  image: string;
  route: string;
}

interface BaseSubCategory {
  name: string;
  heading: string;
  subheading: string;
}

interface TabSubCategory extends BaseSubCategory {
  tabs: Tab[];
  directDisplay?: never;
  displayImage?: never;
  displayRoute?: never;
}

interface DirectSubCategory extends BaseSubCategory {
  directDisplay: boolean;
  displayImage: string;
  displayRoute: string;
  tabs?: never;
}

type SubCategory = TabSubCategory | DirectSubCategory;

interface StandaloneSection {
  title: string;
  heading: string;
  subheading: string;
  displayImage: string;
  displayRoute: string;
  isTab: boolean;
}

function isDirectSubCategory(sub: SubCategory): sub is DirectSubCategory {
  return 'directDisplay' in sub;
}

const menuData = [
  {
    title: "Our Services",
    subCategories: [
      {
        name: "Financial Advisory",
        heading: "Financial Advisory",
        subheading: "Expert guidance for your financial growth.",
        tabs: [
          {
            name: "Accounts Management",
            content: "Streamline A/P & A/R with Integra Strategy. Automate processes, reduce errors, and improve cash flow.",
            image: "/assets/accm.jpg",
            route: "/services/financial-advisory/accounts-management",
          },
          {
            name: "Bookkeeping",
            content: "Maintain accurate financials with Integra Strategy. Our Bookkeeping - Review & Reconciliation services ensure compliance and identify discrepancies. We reconcile your accounts with bank statements and other records for reliable financial reporting. ",
            image: "/assets/bookkeeping.jpg",
            route: "/services/financial-advisory/bookkeeping",
          },
          {
            name: "Tax Compliance",
            content: "Optimize Taxes. Accurate filings, expert guidance, and maximized deductions.",
            image: "/assets/tax.jpg",
            route: "/services/financial-advisory/tax-compliance",
          },
          {
            name: "Financial Reporting",
            content: "Enhance Decision-Making with Clear Financial Reporting. Accurate statements, actionable insights, and stakeholder confidence.",
            image: "/assets/financialreporting.jpg",
            route: "/services/financial-advisory/financial-reporting",
          },
          {
            name: "Payroll",
            content: "Streamline Payroll with Integra Strategy. Accurate calculations, compliant filings, and employee satisfaction.",
            image: "/assets/payroll.jpg",
            route: "/services/financial-advisory/payroll",
          },
          {
            name: "Budgeting & Forecasting",
            content: "Budgeting & Forecasting for Growth. Develop realistic budgets, analyze data, and achieve financial stability.",
            image: "/assets/budgeting.jpg",
            route: "/services/financial-advisory/budgeting-forecasting",
          },
        ],
      },
      {
        name: "Business Consulting",
        heading: "Business Consulting",
        subheading: "Helping businesses thrive in dynamic markets.",
        tabs: [
          {
            name: "Business Purpose",
            content: "Define Your Purpose, Drive Impact. Uncover your core values, align with your mission, and inspire growth.",
            image: "/assets/bghigh.jpg",
            route: "/services/business-consulting/business-purpose",
          },
          {
            name: "Business Resilience",
            content: "Build Business Resilience, Navigate Uncertainty. Anticipate challenges, adapt to disruptions, and thrive in any scenario.",
            image: "/assets/bresilience.webp",
            route: "/services/business-consulting/business-resilience",
          },
          {
            name: "Corporate Strategy",
            content: "Craft Winning Corporate Strategies. Analyze markets, identify opportunities, and drive sustainable growth.",
            image: "/assets/cstrat.webp",
            route: "/services/business-consulting/corporate-strategy",
          },
          {
            name: "Marketing & Sales",
            content: "Boost Sales & Grow Your Brand. Integrated marketing & sales solutions for impactful results.",
            image: "/assets/msales.webp",
            route: "/services/business-consulting/marketing-sales",
          },
          {
            name: "Innovation Strategy & Delivery",
            content: "Drive Innovation, Fuel Growth. From concept to execution, we help you transform ideas into impactful solutions.",
            image: "/assets/innovation.webp",
            route: "/services/business-consulting/innovation-strategy-delivery",
          },
          {
            name: "Pricing & Revenue Management",
            content: "Price for Profit. Lock revenue potential with data-driven pricing strategies.",
            image: "/assets/pricing.webp",
            route: "/services/business-consulting/pricing-revenue-management",
          },
        ],
      },
      {
        name: "Digital & Tech",
        heading: "Digital & Tech",
        subheading: "Enabling Technological Solutions for Businesses.",
        tabs: [

          {
            name: "System Design & Implementation",
            content: "Systems That Deliver. Design and implement robust systems for optimal business performance.",
            image: "/assets/software-development.jpeg",
            route: "/services/digital/system-design-implementation",
          },
          {
            name: "Digital Strategy",
            content: "Digital Strategy That Drives Results. Unlock growth with innovative digital solutions.",
            image: "/assets/blockchain.webp",
            route: "/services/digital/digital-strategy",
          },
          {
            name: "ERP Consulting",
            content: "ERP That Works. Streamline operations and boost productivity with expert consulting.",
            image: "/assets/erp-consulting.jpg",
            route: "/services/digital/erp-consulting",
          },
          {
            name: "Data & Analytics",
            content: "Data-Driven Decisions. Unlock insights that drive growth and innovation..",
            image: "/assets/highway23.jpg",
            route: "/services/digital/data-analytics",
          },
          {
            name: "AI-Enabled Processes",
            content: "AI-Powered Advantage. Unlock efficiency and innovation with AI-enabled processes..",
            image: "/assets/artificial-intelligence.jpg",
            route: "/services/digital/ai-enabled-processes",
          },
          {
            name: "Cloud Consulting",
            content: "Cloud Solutions That Soar. Unlock innovation and efficiency with expert cloud consulting.",
            image: "/assets/cloud-consulting.webp",
            route: "/services/digital/cloud-consulting",
          },
        ],
      },
    ],
    isTab: false,
  },
 /* {
    title: "Integra Insights",
    heading: "Integra Insights",
    subheading: "Discover thought leadership and innovative strategies.",
    displayImage: "/assets/insights.jpg",
    displayRoute: "/insights",
    isTab: true,
  }, 
  {
    title: "Industries",
    heading: "Industries",
    subheading: "Empowering diverse industries with tailored solutions.",
    displayImage: "/assets/industries.jpg",
    displayRoute: "/industries",
    isTab: true,
  }, */
  {
    title: "Our Company",
    subCategories: [
      {
        name: "About Integra Strategy",
        heading: "About Integra",
        subheading: "Helping businesses thrive in dynamic markets.",
        directDisplay: true,
        displayImage: "/assets/management-consulting.jpg",
        displayRoute: "/about"
      },
      {
        name: "Why Choose Us",
        heading: "Why Choose Us",
        subheading: "Discover what makes us stand out",
        directDisplay: true,
        displayImage: "/assets/lights.jpg",
        displayRoute: "/about/why-choose-us"
      },
      {
        name: "Our Approach & Methodology",
        heading: "Our Approach & Methodology",
        subheading: "Helping businesses thrive in dynamic markets.",
        directDisplay: true,
        displayImage: "/assets/post1.jpg",
        displayRoute: "/about/approach-methodology"
      },
    ],
    isTab: false,
  },
  /*{
    title: "Join Us",
    heading: "Join Us",
    subheading: "Be part of a dynamic and innovative team.",
    displayImage: "/assets/heroimage2.jpg",
    displayRoute: "/join",
    isTab: true,
  },*/
  {
    title: "Contact",
    heading: "Contact",
    subheading: "Get in touch with us for more information.",
    displayImage: "/assets/startup-services.jpeg",
    displayRoute: "/contact",
    isTab: true,
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSub, setActiveSub] = useState<SubCategory | null>(null);
  const [activeSection, setActiveSection] = useState<Tab | null>(null);
  const [activeStandalone, setActiveStandalone] = useState<StandaloneSection | null>(null);

  return (
    <div>
      <header className="fixed top-0 z-[51] w-full">
        <div className="flex flex-row border-b-[1px] border-b-gray-300 justify-between items-center h-16 bg-white">
          <div className="flex items-center h-full">
            <Link href="/" className="px-5">
              <IntegraLogo className="w-48 h-auto" />
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border-l-[1px] border-gray-300 p-2 flex items-center justify-center h-full focus:outline-none"
          >
            {menuOpen ? (
              <IoIosClose className="w-12 h-12 fill-gray-800 stroke-gray-600" />
            ) : (
              <IoIosMenu className="w-12 h-12 fill-gray-800 stroke-gray-600" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transform origin-top z-40 flex`}
      >
        <div className="font-sans w-1/4 border-r border-gray-300 flex flex-col">
          {menuOpen && menuData.map((section, index) => (
            <div key={index} className="border-b-[1px] px-3 border-gray-300 py-4">
              {section.isTab ? (
                <button
                  className="text-left text-2xl font-light text-gray-800 flex justify-between items-center w-full hover:bg-gray-100 transition-all"
                  onClick={() => {
                    const standaloneSection: StandaloneSection = {
                      title: section.title,
                      heading: section.heading || '',
                      subheading: section.subheading || '',
                      displayImage: section.displayImage || '',
                      displayRoute: section.displayRoute || '',
                      isTab: section.isTab,
                    };
                    setActiveStandalone(standaloneSection);
                    setActiveSub(null);
                    setActiveSection(null);
                  }}
                >
                  {section.title}
                  <MdKeyboardArrowRight className="w-5 h-5 text-black" />
                </button>
              ) : (
                <h2 className="text-2xl font-light text-gray-800">{section.title}</h2>
              )}

              {section.subCategories && section.subCategories.length > 0 && (
                <div className="mt-2 flex flex-col">
                  {section.subCategories.map((sub, idx) => (
                    <button
                      key={idx}
                      className={`text-left font-light py-2 px-4 text-gray-700 flex justify-between items-center hover:bg-gray-100 transition-all ${
                        activeSub?.name === sub.name ? "bg-gray-200" : ""
                      }`}
                      onClick={() => {
                        if (isDirectSubCategory(sub)) {
                          const standaloneSection: StandaloneSection = {
                            title: sub.name,
                            heading: sub.heading,
                            subheading: sub.subheading,
                            displayImage: sub.displayImage,
                            displayRoute: sub.displayRoute,
                            isTab: false
                          };
                          setActiveStandalone(standaloneSection);
                          setActiveSub(null);
                          setActiveSection(null);
                        } else {
                          const tabSub = sub as TabSubCategory;
                          setActiveSub(tabSub);
                          setActiveSection(tabSub.tabs[0] || null);
                          setActiveStandalone(null);
                        }
                      }}
                    >
                      {sub.name}
                      <MdKeyboardArrowRight className="w-5 h-5 text-black" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {menuOpen && activeSub && (
          <div className="w-3/4 flex">
            {!isDirectSubCategory(activeSub) && (
              <div className="w-[65%] font-sans">
                <div className="border-b border-gray-300 p-6">
                  <h2 className="text-3xl font-light">{activeSub.heading}</h2>
                  <p className="text-black font-light">{activeSub.subheading}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {activeSub.tabs.map((tab: Tab, idx: number) => (
                      <div
                        key={idx}
                        className={`py-2 px-4 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-all ${
                          activeSection?.name === tab.name ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setActiveSection(tab)}
                      >
                        <span className="font-light text-gray-800">{tab.name}</span>
                        <MdKeyboardArrowRight className="w-5 h-5 text-black" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {menuOpen && (
              <div className={`w-[35%] font-sans border-l border-gray-300 p-6 ${!activeSub && 'ml-[65%]'}`}>
                {activeStandalone && (
                  <>
                    <Image
                      src={activeStandalone.displayImage}
                      alt={activeStandalone.heading}
                      className="rounded-xl w-full h-64 object-cover"
                      width={500}
                      height={256}
                    />
                    <h2 className="text-3xl mt-5 font-sans font-light">{activeStandalone.heading}</h2>
                    <p className="mt-5 text-black">{activeStandalone.subheading}</p>
                    <div className="max-w-min mt-5">
                      <ArrowButton
                        variant="filled"
                        route={activeStandalone.displayRoute}
                        buttonText="Learn More"
                      />
                    </div>
                  </>
                )}
                {activeSection && (
                  <>
                    <Image
                      src={activeSection.image}
                      alt={activeSection.name}
                      className="rounded-xl w-full h-64 object-cover"
                      width={500}
                      height={256}
                    />
                    <h2 className="text-3xl mt-5 font-sans font-light">{activeSection.name}</h2>
                    <p className="mt-5 text-black">{activeSection.content}</p>
                    <div className="max-w-min mt-5">
                      <ArrowButton
                        variant="filled"
                        route={activeSection.route}
                        buttonText="Learn More"
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;