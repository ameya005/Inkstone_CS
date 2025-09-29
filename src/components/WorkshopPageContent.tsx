import React from "react";
import exampleImage from 'figma:asset/89ca28c72076d81e0508f7bd8576b935188a0037.png';

interface WorkshopCardProps {
  title: string;
  description: string;
  duration: string;
  onStartWorkshop: () => void;
}

function WorkshopCard({ title, description, duration, onStartWorkshop }: WorkshopCardProps) {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-6 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <h3 
          className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[20px] text-[#130261] leading-[1.3]"
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          {title}
        </h3>
        <p 
          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[14px] text-[#666666] leading-[1.5]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {description}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <div className="bg-[#e8f5e8] px-3 py-1.5 rounded-full">
          <span 
            className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[12px] text-[#2d7d32]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {duration}
          </span>
        </div>
        
        <button
          onClick={onStartWorkshop}
          className="bg-[#130261] hover:bg-[#0f0150] text-white px-4 py-2 rounded-lg transition-colors font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Start Workshop
        </button>
      </div>
    </div>
  );
}

export default function WorkshopPageContent() {
  const workshops = [
    {
      title: "Safety Fundamentals",
      description: "Interactive workshop covering PPE, LOTO, and emergency procedures.",
      duration: "2 hours"
    },
    {
      title: "DC System Operations",
      description: "Hands-on training for DC isolation and electrical safety procedures.",
      duration: "3 hours"
    },
    {
      title: "Emergency Response",
      description: "Thermal runaway detection and fire response protocols.",
      duration: "1.5 hours"
    },
    {
      title: "Maintenance Procedures",
      description: "Preventive maintenance and troubleshooting techniques.",
      duration: "4 hours"
    }
  ];

  const handleStartWorkshop = (workshopTitle: string) => {
    console.log(`Starting workshop: ${workshopTitle}`);
    // Add workshop start logic here
  };

  return (
    <div
      className="bg-white box-border content-stretch flex flex-col h-[950px] items-start relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
      data-name="Workshop Container"
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="flex flex-col items-start relative size-full">
          <div className="box-border content-stretch flex flex-col items-start px-[32px] py-[32px] relative size-full">
            
            {/* Header Section */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mb-8">
              <h1 
                className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[32px] text-[#130261] leading-[1.2]"
                style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
              >
                Workshops & Training
              </h1>
              <p 
                className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[16px] text-[#666666] leading-[1.5]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                Interactive workshops and hands-on training sessions for BESS operations.
              </p>
            </div>

            {/* Workshop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {workshops.map((workshop, index) => (
                <WorkshopCard
                  key={index}
                  title={workshop.title}
                  description={workshop.description}
                  duration={workshop.duration}
                  onStartWorkshop={() => handleStartWorkshop(workshop.title)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}