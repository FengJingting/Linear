import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureList from "./FeatureList";
import Showcase from "./Showcase";
import ComplianceSection from "./ComplianceSection";

const SectionBuilt: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* 左侧内容 */}
        <div>
          <SectionTitle
            smallTitle="Under the hood"
            mainTitle={"Built on strong foundations"}
            description={"Linear is so simple to use, it’s easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast."}
          />
          <FeatureList
            features={[
              {
                title: "Linear Sync Engine",
                description:
                  "Built with a high-performance architecture and an obsessive focus on speed.",
              },
              {
                title: "Enterprise-ready security",
                description:
                  "Best-in-class security practices keep your work safe and secure at every layer.",
              },
              {
                title: "Engineered for scale",
                description:
                  "Built for teams of all sizes. From early-stage startups to large enterprises.",
              },
            ]}
          />
          <ComplianceSection />
        </div>

        {/* 右侧内容 */}
        <Showcase />
      </div>
    </section>
  );
};

export default SectionBuilt;