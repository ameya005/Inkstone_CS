import React, { useState } from "react";
import svgPaths from "../imports/svg-wn8cyk1ry2";

// Task 1: PPE Selection (Multiple Choice)
export default function Task1Content() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [confidence, setConfidence] = useState('Unsure');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const ppeOptions = [
    "Class 0 electrical gloves",
    "Face Shield", 
    "Arc-rated clothing (> 8cal/cm)",
    "Fabric garden gloves"
  ];

  const toggleSelection = (item) => {
    setSelectedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const checkAnswer = () => {
    const correctAnswers = ["Class 0 electrical gloves", "Face Shield", "Arc-rated clothing (> 8cal/cm)"];
    const userCorrect = correctAnswers.every(answer => selectedItems.includes(answer)) && 
                       selectedItems.length === correctAnswers.length;
    setIsCorrect(userCorrect);
    setShowAnswer(true);
  };

  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              Task 1 of 5 - PPE for container inspection
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Ask for hint
              </p>
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="annotation-question">
                    <path d={svgPaths.p7ebcf80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[24px] py-0 relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
              <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[24px] text-black text-center w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                Select all required PPE before opening a BESS enclosure.
              </p>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center p-[24px] relative w-full">
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    {ppeOptions.slice(0, 2).map((option, index) => (
                      <div 
                        key={option}
                        className={`basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer transition-colors ${
                          selectedItems.includes(option) 
                            ? 'bg-[#6155f5] hover:bg-[#5046e4]' 
                            : 'bg-white hover:bg-gray-50'
                        }`}
                        onClick={() => toggleSelection(option)}
                      >
                        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center justify-center relative size-full">
                          <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
                            <p className={`font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                              selectedItems.includes(option) ? 'text-white' : 'text-[#6155f5]'
                            }`} style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                              {option}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    {ppeOptions.slice(2, 4).map((option, index) => (
                      <div 
                        key={option}
                        className={`basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer transition-colors ${
                          selectedItems.includes(option) 
                            ? 'bg-[#6155f5] hover:bg-[#5046e4]' 
                            : 'bg-white hover:bg-gray-50'
                        }`}
                        onClick={() => toggleSelection(option)}
                      >
                        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center justify-center relative size-full">
                          <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
                            <p className={`font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                              selectedItems.includes(option) ? 'text-white' : 'text-[#6155f5]'
                            }`} style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }} dangerouslySetInnerHTML={{ __html: option }}>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answer feedback */}
      {showAnswer && (
        <div className={`border-t border-gray-200 relative shrink-0 w-full ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="box-border content-stretch flex items-center p-[16px] relative w-full">
            <div className={`flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                {isCorrect ? '✓' : '✗'}
              </div>
              <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[16px]">
                {isCorrect ? 'Correct!' : 'Incorrect.'} 
                {!isCorrect && ' The correct PPE includes: Class 0 electrical gloves, Face Shield, and Arc-rated clothing (> 8cal/cm).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-neutral-50 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#e6e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
            <div className="bg-white relative rounded-[8px] shrink-0">
              <div className="content-stretch flex items-center overflow-clip relative">
                <div 
                  className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative shrink-0 cursor-pointer transition-colors ${
                    confidence === 'Unsure' ? 'bg-[#6155f5]' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setConfidence('Unsure')}
                >
                  <p className={`font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                    confidence === 'Unsure' ? 'text-white' : 'text-black'
                  }`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Unsure
                  </p>
                </div>
                <div 
                  className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative shrink-0 cursor-pointer transition-colors ${
                    confidence === 'Somewhat Sure' ? 'bg-[#6155f5]' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setConfidence('Somewhat Sure')}
                >
                  <div aria-hidden="true" className="absolute border-[#e6e7eb] border-[0px_1px] border-solid inset-0 pointer-events-none" />
                  <p className={`font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                    confidence === 'Somewhat Sure' ? 'text-white' : 'text-black'
                  }`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Somewhat Sure
                  </p>
                </div>
                <div 
                  className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative shrink-0 cursor-pointer transition-colors ${
                    confidence === 'Sure' ? 'bg-[#6155f5]' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setConfidence('Sure')}
                >
                  <p className={`font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                    confidence === 'Sure' ? 'text-white' : 'text-black'
                  }`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Sure
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e6e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
              <div 
                className="bg-[#6155f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#5046e4] transition-colors"
                onClick={checkAnswer}
              >
                <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                  Check Answer
                </p>
              </div>
              <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
                <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6155f5] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                  Skip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}