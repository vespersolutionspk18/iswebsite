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
  directDisplay: true;
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

interface MenuItem {
  title: string;
  heading?: string;
  subheading?: string;
  displayImage?: string;
  displayRoute?: string;
  isTab: boolean;
  subCategories?: SubCategory[];
}

const menuData: MenuItem[] = [
  // ... your existing menu data ...
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