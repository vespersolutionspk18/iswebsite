import React from "react";
import { Separator } from "@/components/ui/separator";

const PayrollBody = () => {
  return (
    <>
      <div
        className="flex justify-end  flex-col w-full px-5 py-10 xl:px-16 xl:py-32 h-[320px] xl:h-[540px] bg-cover bg-black/30 bg-blend-multiply font-sans text-whit"
        style={{ backgroundImage: `url('/assets/abstracttech.jpg')` }}
      >
        <h1 className="text-3xl xl:text-6xl text-white font-light">
          Payroll<br></br>
          <span className="font-medium">Management</span>
        </h1>
      </div>
      {/* Whole page comes here */}
      <div className="flex flex-col xl:gap-16 gap-5 py-5 px-10 xl:py-16 xl:px-32 font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-16">
          <h5 className="xl:w-[30%] text-3xl xl:text-4xl ">
            <span className="text-integrayellow font-medium">
              Precision, Compliance
            </span>{" "}
            , and Workforce Confidence
          </h5>
          <h5 className="xl:w-[70%] text-xl text-black text-justify">
            Managing payroll is one of the most critical functions of any
            organization, directly impacting employee satisfaction, compliance,
            and overall business efficiency. At Integra Strategy, we provide
            end-to-end payroll management solutions that ensure seamless
            processing, strict regulatory adherence, and complete transparency.
            Our approach guarantees that businesses can focus on growth while
            their workforce is compensated accurately and on time.
          </h5>
        </div>
        <div className="py-8">
          <Separator />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-3xl xl:text-5xl font-medium xl:font-light text-gray-800">
            Streamlining Payroll Operations for Accuracy and Efficiency
          </h4>
          <p className="text-lg text-black">
            Payroll management goes beyond issuing paychecks—it requires a
            meticulous approach to ensure salaries, bonuses, and deductions are
            processed flawlessly. We handle payroll calculations with precision,
            ensuring that wages align with employment contracts, benefits
            structures, and performance-based incentives. Our team ensures every
            payroll cycle runs smoothly, eliminating errors and inefficiencies
            that could lead to financial discrepancies or employee
            dissatisfaction.
            <br></br>
            <br></br>
            Through automated payroll systems, we minimize manual intervention,
            reduce administrative burdens, and enhance processing speed. Our
            structured payroll frameworks help businesses maintain financial
            discipline while fostering a motivated and engaged workforce.
          </p>
          <div className="flex flex-col gap-5 xl:gap-10 mt-4 xl:mt-8">
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Navigating Complex Tax and Compliance Requirements
              </h5>
              <p className="text-lg text-black">
                Payroll processing is deeply intertwined with tax regulations,
                labor laws, and statutory obligations. Non-compliance can result
                in penalties, legal complications, and reputational risks.
                Integra Strategy ensures that businesses remain fully compliant
                with all payroll-related tax filings, deductions, and
                remittances, safeguarding organizations from financial
                liabilities.
                <br></br>
                <br></br>
                From social security contributions to income tax withholdings,
                we meticulously track every regulatory requirement, ensuring
                that payroll taxes are filed accurately and on time. Our
                expertise extends to compliance audits and regulatory updates,
                allowing businesses to operate with confidence in an
                ever-evolving legal landscape.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Enhancing Employee Experience with Reliable Payroll Solutions
              </h5>
              <p className="text-lg text-black">
                Employees rely on timely and accurate compensation, and any
                payroll inconsistencies can erode trust and morale. We provide
                payroll management solutions that prioritize employee
                confidence, ensuring that every payment is processed with
                precision and transparency.
                <br></br>
                <br></br>
                Beyond salary disbursement, we manage benefits administration,
                reimbursements, and deductions, ensuring that employees receive
                comprehensive compensation packages without complications. By
                implementing self-service portals and digital payslip access, we
                enhance payroll visibility, empowering employees with real-time
                financial insights.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Integrating Technology for Seamless Payroll Automation
              </h5>
              <p className="text-lg text-black">
                The modern workforce demands digital payroll solutions that
                offer flexibility, security, and efficiency. We leverage
                cloud-based payroll systems that provide real-time updates,
                automated tax calculations, and seamless integration with HR and
                accounting platforms.
                <br></br>
                <br></br>
                Our payroll automation solutions eliminate redundancies, enhance
                data security, and provide executives with a clear overview of
                payroll expenses. Through data-driven reporting, businesses can
                analyze payroll trends, optimize workforce costs, and make
                informed financial decisions that align with long-term strategic
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 xl:px-16 xl:pb-16">
        <div className="xl:py-16 py-8 bg-orangegrey rounded-xl">
          <div className="font-sans font-light px-8 xl:px-16">
            <div className="flex flex-col gap-10">
              <h5 className="xl:text-4xl text-3xl font-medium xl:font-light text-grey-800">
                Why Businesses Trust Integra Strategy for Payroll Management
              </h5>
              <div className="">
                <div className=" flex flex-col gap-5">
                  <p className="text-lg text-black">
                    At Integra Strategy, we recognize that payroll is more than
                    a financial function—it is a vital component of workforce
                    management and organizational stability. Our comprehensive
                    payroll solutions are designed to reduce administrative
                    complexities, ensure full regulatory compliance, and enhance
                    employee satisfaction.
                    <br></br>
                    <br></br>
                    By partnering with us, businesses gain a payroll system that
                    is not only efficient and reliable but also strategically
                    aligned with their financial and operational objectives.
                    With a focus on accuracy, compliance, and technological
                    innovation, Integra Strategy ensures that payroll becomes a
                    seamless and value-driven aspect of your business
                    operations.
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

export default PayrollBody;
