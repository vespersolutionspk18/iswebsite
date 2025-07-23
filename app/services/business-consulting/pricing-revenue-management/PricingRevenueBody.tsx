import React from "react";
import { Separator } from "@/components/ui/separator";

const PricingRevenueBody = () => {
  return (
    <>
      <div
        className="flex justify-end  flex-col w-full px-5 py-10 xl:px-16 xl:py-32 h-[320px] xl:h-[540px] bg-cover bg-black/30 bg-blend-multiply font-sans text-white"
        style={{ backgroundImage: `url('/assets/abstracttech.jpg')` }}
      >
        <h1 className="text-3xl xl:text-6xl text-white font-light">
          Pricing & Revenue<br></br>
          <span className="font-medium">Management</span>
        </h1>
      </div>
      {/* Whole page comes here */}
      <div className="flex flex-col xl:gap-16 gap-5 py-5 px-10 xl:py-16 xl:px-32 font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-16">
          <h5 className="xl:w-[30%] text-3xl xl:text-4xl ">
            Optimizing Value{" "}
            <span className="text-integrayellow font-medium">
              Capture Through
            </span>{" "}
            Strategic Pricing
          </h5>
          <h5 className="xl:w-[70%] text-xl text-black text-justify">
            Pricing and revenue management represent the most powerful levers for 
            profitability growth—they directly impact financial performance while shaping 
            market positioning and customer perceptions. At Integra Strategy, we believe 
            that strategic pricing is not just about setting rates but about creating 
            sophisticated revenue optimization systems that balance value creation with 
            value capture, ensuring sustainable growth while maintaining competitive 
            advantage in dynamic market environments.
          </h5>
        </div>
        <div className="py-8">
          <Separator />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-3xl xl:text-5xl font-medium xl:font-light text-gray-800">
            The Science and Art of Revenue Optimization
          </h4>
          <p className="text-lg text-black">
            Effective pricing and revenue management combines analytical rigor with market 
            intuition to maximize profitability across customer segments, products, and 
            channels. It requires deep understanding of customer willingness to pay, 
            competitive dynamics, cost structures, and value drivers. Organizations that 
            master this discipline achieve higher margins, improved market share, and 
            enhanced customer satisfaction by aligning prices with perceived value.
            <br></br>
            <br></br>
            At Integra Strategy, we help businesses transform pricing from a tactical 
            decision to a strategic capability. Our approach integrates advanced analytics, 
            behavioral economics, and market insights to develop pricing strategies that 
            capture maximum value while supporting long-term business objectives. We ensure 
            pricing decisions are data-driven, market-responsive, and aligned with overall 
            corporate strategy, creating sustainable competitive advantages through superior 
            revenue management practices.
          </p>
          <div className="flex flex-col gap-5 xl:gap-10 mt-4 xl:mt-8">
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Strategic Pricing as a Growth Driver
              </h5>
              <div className="flex flex-col gap-2">
                <p className="text-lg text-black">
                  In today's value-conscious markets where customers have unprecedented 
                  access to information and alternatives, pricing excellence requires 
                  sophisticated strategies that go beyond cost-plus calculations. Leading 
                  organizations leverage pricing as a strategic tool to:
                </p>
                <ul className="flex flex-col gap-2 ml-8 list-disc font-sans font-light text-lg">
                  <li>Capture value proportional to customer benefits and willingness to pay</li>
                  <li>Differentiate offerings through innovative pricing models and structures</li>
                  <li>Optimize revenue across diverse customer segments and use cases</li>
                  <li>
                    Build competitive moats through pricing strategies that are difficult to replicate
                  </li>
                </ul>
                <p className="font-sans font-light text-lg">
                  Pricing is not just about numbers—it's about strategic positioning. 
                  Companies that excel at pricing create value-based frameworks that align 
                  price points with customer outcomes, competitive positioning with margin 
                  objectives, and revenue models with business strategy, driving sustainable 
                  growth through intelligent price optimization.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Dynamic Revenue Management Excellence
              </h5>
              <p className="text-lg text-black">
                Modern revenue management extends beyond static pricing to encompass dynamic 
                optimization across time, channels, and customer segments. At Integra Strategy, 
                we help companies implement sophisticated revenue management systems that 
                leverage real-time data, predictive analytics, and machine learning to 
                optimize pricing decisions continuously. This includes demand forecasting, 
                capacity management, promotional optimization, and channel strategy alignment.
                <br></br>
                <br></br>
                By implementing advanced revenue management capabilities, organizations can 
                respond dynamically to market conditions, competitive actions, and demand 
                fluctuations while maintaining pricing integrity and brand positioning. 
                Whether optimizing subscription models, implementing dynamic pricing, or 
                managing complex B2B negotiations, our approach ensures companies maximize 
                revenue potential while building lasting customer relationships.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Value-Based Pricing Transformation
              </h5>
              <p className="text-lg text-black">
                The shift from cost-based to value-based pricing represents a fundamental 
                transformation in how organizations approach revenue generation. Companies 
                that successfully implement value-based pricing achieve significantly higher 
                margins and stronger customer relationships by aligning prices with delivered 
                benefits. This requires deep customer insight, robust value quantification 
                methodologies, and sophisticated communication strategies.
                <br></br>
                <br></br>
                Integra Strategy guides organizations through this transformation by developing 
                comprehensive value propositions, creating pricing architectures that reflect 
                differential value, and building capabilities for value communication and 
                negotiation. By embedding value-based thinking throughout the organization, 
                businesses can escape commodity pricing traps and compete on value rather 
                than price, creating sustainable differentiation in competitive markets.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="xl:text-3xl text-2xl xl:font-light text-medium text-integrayellow">
                Building Pricing Excellence Capabilities
              </h5>
              <p className="text-lg text-black">
                Sustainable pricing and revenue management excellence requires more than 
                strategies and tools—it demands organizational capabilities that enable 
                continuous optimization and adaptation. Organizations must develop pricing 
                analytics capabilities, governance structures, and performance management 
                systems that ensure pricing decisions are consistent, data-driven, and 
                aligned with strategic objectives across all business units and markets.
                <br></br>
                <br></br>
                We help businesses build world-class pricing organizations by establishing 
                centers of excellence, implementing pricing technologies, and developing 
                talent with specialized pricing expertise. Whether creating pricing councils, 
                deploying revenue optimization platforms, or training sales teams on value 
                selling, we ensure organizations have the capabilities needed to sustain 
                pricing excellence and drive continuous improvement in revenue performance.
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
                Maximizing Profitability Through Pricing Excellence
              </h5>
              <div className="">
                <div className=" flex flex-col gap-5">
                  <p className="text-lg text-black">
                    Strategic pricing and revenue management represent the fastest path to 
                    improved profitability and sustainable growth. At Integra Strategy, we 
                    help organizations unlock the full potential of pricing by building 
                    sophisticated capabilities that optimize value capture, enhance competitive 
                    positioning, and drive superior financial performance. With pricing 
                    excellence at the core, businesses don't just compete on price—they 
                    create value-based differentiation, maximize customer lifetime value, 
                    and achieve industry-leading margins through intelligent revenue optimization.
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

export default PricingRevenueBody;