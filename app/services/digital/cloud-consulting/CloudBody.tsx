import React from "react";
import { Separator } from "@/components/ui/separator";

const CloudBody = () => {
  return (
    <>
      <div
        className="flex justify-end  flex-col w-full px-5 py-10 xl:px-16 xl:py-32 h-[320px] xl:h-[540px] bg-cover bg-black/30 bg-blend-multiply font-sans text-white"
        style={{ backgroundImage: `url('/assets/abstracttech.jpg')` }}
      >
        <h1 className="text-3xl xl:text-6xl text-white font-light">
          Cloud<br></br>
          <span className="font-medium">Consulting</span>
        </h1>
      </div>
      {/* Whole page comes here */}
      <div className="flex flex-col xl:gap-16 gap-5 py-5 px-10 xl:py-16 xl:px-32 font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-16">
          <h5 className="xl:w-[30%] text-3xl xl:text-4xl ">
            Powering Scalable{" "}
            <span className="text-integrayellow font-medium">
              Agile, and Secure
            </span>{" "}
            Digital Transformation
          </h5>
          <h5 className="xl:w-[70%] text-xl text-black text-justify">
            The cloud is no longer an option—it is the foundation of modern
            business infrastructure. Organizations that leverage cloud computing
            gain unmatched scalability, flexibility, and efficiency, enabling
            them to drive innovation, enhance security, and reduce operational
            costs. At Integra Strategy, we provide expert cloud consulting
            services to help businesses transition seamlessly to cloud
            environments, optimize their architectures, and unlock the full
            potential of cloud-based technologies.
          </h5>
        </div>
        <div className="py-8">
          <Separator />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-3xl xl:text-5xl font-medium xl:font-light text-gray-800">
            Architecting a Cloud-First Strategy for Sustainable Growth
          </h4>
          <p className="text-lg text-black">
            A well-defined cloud strategy is critical for ensuring that
            businesses maximize their investments in cloud infrastructure.
            Moving to the cloud is not just about shifting workloads; it
            requires a comprehensive approach that aligns cloud adoption with
            business objectives, security requirements, and long-term
            scalability.
            <br></br>
            <br></br>
            At Integra Strategy, we work closely with organizations to design
            cloud architectures that support growth and agility. Whether
            adopting a public, private, or hybrid cloud model, we develop
            tailored strategies that optimize cost efficiency, performance, and
            operational resilience. Our cloud-first approach ensures businesses
            are equipped with the right tools to drive innovation while
            maintaining flexibility in an ever-changing digital landscape.
          </p>
          <div className="flex flex-col gap-5 xl:gap-10 mt-4 xl:mt-8">
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Seamless Cloud Migration for Enhanced Efficiency
              </h5>
              <p className="text-lg text-black">
                Migrating to the cloud is a complex process that requires
                careful planning and execution. Without a structured approach,
                businesses risk disruptions, security vulnerabilities, and
                increased costs. Our cloud migration services enable
                organizations to transition workloads, applications, and data
                seamlessly while minimizing downtime and maintaining business
                continuity.
                <br></br>
                <br></br>
                We conduct in-depth assessments of existing IT infrastructures,
                identifying the most efficient pathways for migration while
                optimizing cloud resources. Whether rehosting, refactoring, or
                rearchitecting applications, our team ensures a smooth
                transition that enhances system performance, reduces
                infrastructure overhead, and accelerates time to market.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Optimizing Performance with Cloud-Native Solutions
              </h5>
              <p className="text-lg text-black">
                Cloud-native technologies are revolutionizing how businesses
                build and deploy applications, allowing for greater speed,
                efficiency, and scalability. By leveraging containerization,
                microservices architectures, and serverless computing, companies
                can develop resilient, high-performing applications that respond
                dynamically to market demands.
                <br></br>
                <br></br>
                Integra Strategy helps organizations modernize their IT
                landscapes by adopting cloud-native development practices. We
                enable businesses to harness the power of Kubernetes, DevOps
                automation, and continuous integration/continuous deployment
                (CI/CD) pipelines to streamline operations, reduce deployment
                times, and enhance software reliability. Our expertise ensures
                that businesses remain competitive by fully embracing the
                advantages of cloud-native ecosystems.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Strengthening Security and Compliance in the Cloud
              </h5>
              <p className="text-lg text-black">
                As cloud adoption grows, so do concerns surrounding data
                security, regulatory compliance, and risk management. Ensuring
                that cloud environments are secure and compliant with industry
                standards is essential to protecting business-critical assets
                and maintaining customer trust.
                <br></br>
                <br></br>
                We implement robust cloud security frameworks that include
                advanced encryption, identity and access management (IAM),
                threat detection, and compliance monitoring. Our team helps
                organizations navigate complex regulatory requirements such as
                GDPR, HIPAA, and SOC 2, ensuring that data governance and
                security best practices are embedded into every layer of cloud
                infrastructure. By proactively identifying and mitigating risks,
                we provide businesses with the confidence to operate securely in
                the cloud.
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
                Driving Cost Efficiency with Intelligent Cloud Management
              </h5>
              <div className="flex xl:flex-row flex-col gap-5">
                <div className=" flex flex-col gap-3 xl:gap-5">
                  <p className="text-lg text-black">
                    Optimizing cloud costs is essential for maximizing return on
                    investment while maintaining operational efficiency. Without
                    proper governance, businesses often face unexpected expenses
                    due to underutilized resources, inefficient configurations,
                    and lack of visibility into cloud spending.
                    <br></br>
                    <br></br>
                    Our cloud cost optimization services enable organizations to
                    gain full control over their cloud expenditures. Through
                    resource allocation analysis, automated scaling strategies,
                    and intelligent workload distribution, we help businesses
                    minimize waste and enhance financial efficiency. By
                    implementing FinOps best practices, we ensure that cloud
                    investments are aligned with business goals, providing
                    sustainable cost management without compromising
                    performance.
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
            Unlocking Innovation Through Cloud Excellence
          </h5>
          <p className="text-lg text-black">
            Cloud computing is more than just a technological shift—it is a
            catalyst for business transformation. Organizations that embrace the
            cloud gain the agility to scale rapidly, drive innovation, and
            maintain a competitive edge in an evolving digital economy. At
            Integra Strategy, we empower businesses with end-to-end cloud
            consulting solutions, ensuring they harness the full potential of
            cloud technology while maintaining security, efficiency, and
            strategic alignment. With our expertise, businesses can build a
            future-ready cloud infrastructure that drives long-term success,
            operational excellence, and sustained growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default CloudBody;
