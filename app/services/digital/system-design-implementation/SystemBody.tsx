import React from "react";
import { Separator } from "@/components/ui/separator";

const SystemBody = () => {
  return (
    <>
      <div
        className="flex justify-end  flex-col w-full px-5 py-10 xl:px-16 xl:py-32 h-[320px] xl:h-[540px] bg-cover bg-black/30 bg-blend-multiply font-sans text-white"
        style={{ backgroundImage: `url('/assets/abstracttech.jpg')` }}
      >
        <h1 className="text-3xl xl:text-6xl text-white font-light">
          System Design<br></br>
          <span className="font-medium">& Implementation</span>
        </h1>
      </div>
      {/* Whole page comes here */}
      <div className="flex flex-col xl:gap-16 gap-5 py-5 px-10 xl:py-16 xl:px-32 font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-16">
          <h5 className="xl:w-[30%] text-3xl xl:text-4xl ">
            Engineering Scalable{" "}
            <span className="text-integrayellow font-medium">
              & Intelligent Solutions
            </span>{" "}
            to Empower You
          </h5>
          <h5 className="xl:w-[70%] text-xl text-black text-justify">
            In an era where technology underpins every aspect of business
            operations, the ability to design and implement robust, scalable,
            and future-ready systems is critical to maintaining a competitive
            edge. Businesses that invest in well-architected systems benefit
            from improved efficiency, seamless integration, and enhanced agility
            in responding to market demands. At Integra Strategy, we specialize
            in engineering technology solutions that align with business
            objectives, ensuring that every system we design and deploy enhances
            operational effectiveness, security, and long-term sustainability.
          </h5>
        </div>
        <div className="py-8">
          <Separator />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-3xl xl:text-5xl font-medium xl:font-light text-gray-800">
            Engineering Scalable Architectures for Growth
          </h4>
          <p className="text-lg text-black">
            A well-designed system is the foundation of a resilient business.
            Whether it&apos;s an enterprise application, cloud-based infrastructure,
            or a data management platform, scalability must be embedded at every
            level to ensure long-term adaptability. A system that cannot handle
            growing demands or integrate with evolving technologies becomes a
            bottleneck rather than an enabler.
            <br></br>
            <br></br>
            At Integra Strategy, we develop architectures that scale
            effortlessly with business expansion. We leverage cloud computing,
            microservices, containerization, and distributed computing models to
            create flexible infrastructures capable of handling increased
            workloads without compromising performance. Our approach ensures
            that organizations can grow without facing costly overhauls or
            downtime, maintaining operational continuity while seamlessly
            expanding their technological capabilities.
          </p>
          <div className="flex flex-col gap-5 xl:gap-10 mt-4 xl:mt-8">
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Seamless Integration Across Business Ecosystems
              </h5>
              <p className="text-lg text-black">
                Modern enterprises rely on a complex ecosystem of applications,
                databases, and third-party solutions that must work in unison.
                Siloed systems lead to inefficiencies, data inconsistencies, and
                fragmented workflows, reducing overall productivity. To achieve
                true digital transformation, businesses must integrate their
                technology stack cohesively, ensuring seamless data flow and
                interoperability between critical platforms.
                <br></br>
                <br></br>
                Our integration strategies focus on API-driven connectivity,
                middleware solutions, and enterprise service bus (ESB)
                frameworks that allow disparate systems to communicate
                effectively. Whether integrating ERP systems, customer
                relationship management (CRM) platforms, financial software, or
                industry-specific applications, we ensure that data
                synchronization is real-time, processes are automated, and
                organizations can operate with a unified digital infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Security-First Approach to System Design
              </h5>
              <p className="text-lg text-black">
                As businesses increasingly depend on digital infrastructure,
                security threats become a pressing concern. Cyberattacks, data
                breaches, and compliance failures can cripple an organization,
                leading to financial losses, reputational damage, and legal
                repercussions. A strong system is not just functional—it is
                secure by design, incorporating stringent security protocols to
                safeguard sensitive information.
                <br></br>
                <br></br>
                Integra Strategy prioritizes security from the ground up,
                embedding encryption, access controls, and threat detection
                mechanisms into every system we build. Our approach includes
                adherence to international security standards, regular
                penetration testing, and proactive risk mitigation strategies.
                By designing systems with security at their core, we help
                businesses maintain compliance, protect customer trust, and
                mitigate risks before they escalate into critical threats.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Intelligent Automation for Efficiency and Innovation
              </h5>
              <p className="text-lg text-black">
                Businesses that rely on manual processes and legacy systems
                often struggle with inefficiencies, delays, and human errors.
                The next generation of system design must embrace intelligent
                automation to drive productivity, reduce operational costs, and
                enhance decision-making capabilities. From workflow automation
                to AI-driven process optimization, businesses must integrate
                smart solutions to remain agile in a fast-paced digital world.
                <br></br>
                <br></br>
                At Integra Strategy, we implement automation frameworks that
                streamline operations, improve response times, and free up
                valuable human resources for high-impact tasks. Our expertise in
                robotic process automation (RPA), machine learning-driven
                analytics, and AI-powered decision systems enables organizations
                to shift from reactive problem-solving to proactive innovation.
                With intelligent automation, businesses gain a competitive edge
                by accelerating processes, minimizing redundancies, and
                maximizing operational efficiency.
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
                Future-Proofing Systems for Long-Term Success
              </h5>
              <div className="flex xl:flex-row flex-col gap-5">
                <div className=" flex flex-col gap-3 xl:gap-5">
                  <p className="text-lg text-black">
                    Technology evolves at an unprecedented rate, and businesses
                    that fail to adapt risk obsolescence. A system designed
                    today must be resilient enough to accommodate emerging
                    technologies, industry shifts, and evolving business
                    requirements. Future-proofing is not just about adopting the
                    latest tools—it is about creating adaptable frameworks that
                    can evolve without disruption.
                    <br></br>
                    <br></br>
                    Our approach to system design emphasizes modularity,
                    cloud-native development, and continuous
                    integration/continuous deployment (CI/CD) methodologies. We
                    ensure that businesses can iterate rapidly, deploy new
                    features seamlessly, and adopt emerging innovations without
                    overhauling their entire infrastructure. By designing for
                    the future, we empower organizations to remain agile,
                    resilient, and ahead of industry disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans font-light px-10 xl:px-32">
        <div className="flex flex-col gap-5">
          <h5 className="xl:text-3xl text-2xl text-integrayellow">
            Driving Digital Transformation with Intelligent System Design
          </h5>
          <p className="text-lg text-black">
            A well-engineered system is more than just a technology solution—it
            is the backbone of a digitally empowered organization. At Integra
            Strategy, we design and implement intelligent, secure, and scalable
            systems that drive operational excellence, foster innovation, and
            position businesses for long-term success. By aligning technology
            with strategic objectives, we ensure that organizations not only
            keep pace with digital transformation but lead it, leveraging
            systems that are built to evolve, integrate, and scale seamlessly in
            an ever-changing technological landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default SystemBody;
