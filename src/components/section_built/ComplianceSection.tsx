import React from "react";

interface ComplianceFeature {
  icon: string; // Image source for the icon
  title: string;
  description: string;
}

const ComplianceSection: React.FC = () => {
  const features: ComplianceFeature[] = [
    { icon: "/public/section_built_0.avif", title: "SOC 2", description: "AICPA SOC2" },
    { icon: "/public/section_built_0.avif", title: "GDPR", description: "Compliant" },
    { icon: "/public/section_built_0.avif", title: "HIPAA", description: "Compliant" },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-1px pt-3 border-gray-800  ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 text-center border-l border-gray-800 first:border-none px-4"
          >
            {/* Icon */}
            <div className="flex items-center justify-center rounded-full">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Description */}
            <div>
            <p
                className="
                flex items-center gap-2
                text-[14px] 
                text-[#62666d] 
                font-normal 
                leading-[21px] 
                tracking-[-0.18px] 
                antialiased 
                text-center
                "
            >
                {feature.title}
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500"
                >
                    <path
                    d="M12 2c.69 0 1.25.56 1.33 1.24l.4 3.11c.05.36.35.65.71.71l3.11.4a1.33 1.33 0 011.24 1.33c0 .69-.56 1.25-1.24 1.33l-3.11.4a.8.8 0 00-.71.71l-.4 3.11a1.33 1.33 0 01-1.33 1.24 1.33 1.33 0 01-1.33-1.24l-.4-3.11a.8.8 0 00-.71-.71l-3.11-.4a1.33 1.33 0 01-1.24-1.33c0-.69.56-1.25 1.24-1.33l3.11-.4a.8.8 0 00.71-.71l.4-3.11C10.75 2.56 11.31 2 12 2z"
                    />
                    <path
                    d="M10.293 13.293a1 1 0 011.414 0L12 13.586l.293-.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414z"
                    />
                </svg>
            </span>
        </p>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceSection;