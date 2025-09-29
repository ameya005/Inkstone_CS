import React, { useState } from "react";
import svgPaths from "../imports/svg-wn8cyk1ry2";
import imgImage2 from "figma:asset/e9161b27ee671a85539f61a71f81d0ab62eb87c3.png";

// Task 2: LOTO Sequence (Drag and Drop)
export function Task2Content() {
  const [items, setItems] = useState([
    { id: 1, text: "Notify", order: 1 },
    { id: 2, text: "Shutdown", order: 2 },
    { id: 3, text: "Isolate DC", order: 3 }
  ]);
  const [confidence, setConfidence] = useState('Unsure');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const moveItem = (index, direction) => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newItems.length) {
      [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
      setItems(newItems);
    }
  };

  const checkAnswer = () => {
    const correctOrder = ["Notify", "Shutdown", "Isolate DC"];
    const userOrder = items.map(item => item.text);
    const isCorrectOrder = correctOrder.every((item, index) => item === userOrder[index]);
    setIsCorrect(isCorrectOrder);
    setShowAnswer(true);
  };

  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              Task 2 of 5 - LOTO Sequence
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
                Drag to set the correct sequence.
              </p>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[160px] py-[24px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    {items.map((item, index) => (
                      <div key={item.id} className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors">
                        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[10px] py-[8px] relative w-full">
                            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="dots-grid">
                                    <g id="Icon">
                                      <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6155f5] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                                {item.text}
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
                              <div 
                                className={`relative shrink-0 size-[24px] cursor-pointer ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 rounded'}`}
                                onClick={() => index > 0 && moveItem(index, 'up')}
                              >
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="arrow-up">
                                    <path d="M12 19V5M12 5L5 12M12 5L19 12" id="Icon" stroke={index === 0 ? "var(--stroke-0, #BBBBBB)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  </g>
                                </svg>
                              </div>
                              <div className="flex items-center justify-center relative shrink-0">
                                <div className="flex-none scale-y-[-100%]">
                                  <div 
                                    className={`relative size-[24px] cursor-pointer ${index === items.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 rounded'}`}
                                    onClick={() => index < items.length - 1 && moveItem(index, 'down')}
                                  >
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                      <g id="arrow-up">
                                        <path d="M12 19V5M12 5L5 12M12 5L19 12" id="Icon" stroke={index === items.length - 1 ? "var(--stroke-0, #BBBBBB)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                {!isCorrect && ' The correct sequence is: Notify, Shutdown, Isolate DC.'}
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

// Task 3: C-rate calculation (Slider)
export function Task3Content() {
  const [sliderValue, setSliderValue] = useState(0.5);
  const [confidence, setConfidence] = useState('Unsure');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    // Correct C-rate for 100kW/200kWh = 0.5C
    const correctValue = 0.5;
    const tolerance = 0.1; // Allow some tolerance
    const userCorrect = Math.abs(sliderValue - correctValue) <= tolerance;
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
              Task 3 of 5 - C-rate for a 100 kW / 200 kWh system
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
                Set the correct C-rate.
              </p>
            </div>
            <div className="relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[24px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
                    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[6px] shrink-0 w-full cursor-pointer" onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const percentage = x / rect.width;
                      const newValue = Math.max(0, Math.min(2, percentage * 2));
                      setSliderValue(newValue);
                    }}>
                      <div className="bg-[#6155f5] h-[9px] relative shrink-0" style={{ width: `${(sliderValue / 2) * 100}%` }}>
                        <div className="relative size-full">
                          <div className="h-[9px] w-full" />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[20px]" style={{ transform: `translateX(-10px)` }}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" fill="var(--fill-0, #6155F5)" id="Ellipse 1" r="9" stroke="var(--stroke-0, #6155F5)" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="basis-0 bg-[#e1e8f0] grow h-[9px] min-h-px min-w-px relative shrink-0">
                        <div className="relative size-full">
                          <div className="h-[9px] w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold items-start justify-between leading-[normal] relative shrink-0 text-[#868686] text-[14px] text-nowrap w-full whitespace-pre">
                      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                        0.0 C
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                        1.0 C
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                        2.0 C
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[104px]">
                      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6155f5] text-[26px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                        {sliderValue.toFixed(1)}
                      </p>
                    </div>
                    <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                      C
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold gap-[4px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
                    <p className="relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                      For 100 kW / 200 kWh system
                    </p>
                    <p className="relative shrink-0 text-[#868686] text-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                      C-rate = Power (kW) ÷ Energy (kWh)
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                    <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap underline whitespace-pre cursor-pointer hover:text-[#5046e4] transition-colors" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                      Open Calculator
                    </p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
                {!isCorrect && ' The correct C-rate is 0.5C (100kW ÷ 200kWh = 0.5C).'}
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

// Task 4: Voice Recording (Thermal cues)
export function Task4Content() {
  const [isRecording, setIsRecording] = useState(false);
  const [showWriteInstead, setShowWriteInstead] = useState(true);
  const [confidence, setConfidence] = useState('Unsure');
  const [showAnswer, setShowAnswer] = useState(false);
  const [textAnswer, setTextAnswer] = useState('');

  const checkAnswer = () => {
    // For this task, we'll just show that they provided an answer
    const hasAnswer = textAnswer.trim().length > 10 || !showWriteInstead; // Assume recording if not showing write option
    setShowAnswer(true);
  };

  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              Task 4 of 5 - Thermal cues to report
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
                In your own words, describe two thermal-runaway cues you would report to the control room.
              </p>
            </div>
            <div className="relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[24px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
                    <div 
                      className={`bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[rgba(97,85,245,0.2)] ${isRecording ? 'animate-pulse' : ''}`}
                      onMouseDown={() => setIsRecording(true)}
                      onMouseUp={() => setIsRecording(false)}
                      onMouseLeave={() => setIsRecording(false)}
                    >
                      <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
                        <div className={`bg-[#6155f5] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[70px] ${isRecording ? 'bg-red-500' : ''}`}>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="microphone-02">
                                <path d={svgPaths.p271cb500} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      {isRecording ? "Recording..." : "Press and hold to record your answer"}
                    </p>
                  </div>
                  {showWriteInstead && (
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <p className="[text-underline-position:from-font] decoration-solid font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap underline whitespace-pre cursor-pointer hover:text-[#5046e4] transition-colors" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }} onClick={() => setShowWriteInstead(false)}>
                        Write Instead
                      </p>
                    </div>
                  )}
                  {!showWriteInstead && (
                    <div className="w-full">
                      <textarea 
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#6155f5] focus:border-transparent"
                        placeholder="Type your answer here..."
                        value={textAnswer}
                        onChange={(e) => setTextAnswer(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Answer feedback */}
      {showAnswer && (
        <div className="bg-blue-50 border-t border-gray-200 relative shrink-0 w-full">
          <div className="box-border content-stretch flex items-center p-[16px] relative w-full">
            <div className="flex items-center gap-2 text-blue-700">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100">
                ✓
              </div>
              <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[16px]">
                Answer recorded! Your response will be reviewed for thermal runaway indicators.
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

// Task 5: Image Marking (DC Isolator)
export function Task5Content() {
  const [clickPosition, setClickPosition] = useState(null);
  const [confidence, setConfidence] = useState('Unsure');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleImageClick = (e) => {
    // Use currentTarget (the container div) instead of target (which could be the img)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickPosition({ x, y });
  };

  const checkAnswer = () => {
    if (!clickPosition) {
      setIsCorrect(false);
      setShowAnswer(true);
      return;
    }
    
    // Define correct area bounds (rough estimates for DC isolator location)
    const correctArea = {
      x: { min: 120, max: 200 },
      y: { min: 80, max: 160 }
    };
    
    const isInCorrectArea = 
      clickPosition.x >= correctArea.x.min && clickPosition.x <= correctArea.x.max &&
      clickPosition.y >= correctArea.y.min && clickPosition.y <= correctArea.y.max;
    
    setIsCorrect(isInCorrectArea);
    setShowAnswer(true);
  };

  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              Task 5 of 5 - Identify the DC isolator
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
                Tap the DC isolator on this drawing.
              </p>
            </div>
            <div className="relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[16px] relative w-full">
                  <div className="h-[234px] relative rounded-[8px] shrink-0 w-[308px] cursor-pointer" onClick={handleImageClick}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                      <img 
                        alt="BESS System Diagram" 
                        className="absolute h-[131.84%] left-0 max-w-none top-[-29.05%] w-full pointer-events-none" 
                        src={imgImage2}
                      />
                    </div>
                    {clickPosition && (
                      <div 
                        className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-ping pointer-events-none"
                        style={{ 
                          left: clickPosition.x - 12, 
                          top: clickPosition.y - 12,
                          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}
                      />
                    )}
                    {clickPosition && (
                      <div 
                        className="absolute w-4 h-4 bg-red-600 rounded-full border border-white pointer-events-none"
                        style={{ 
                          left: clickPosition.x - 8, 
                          top: clickPosition.y - 8 
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
                {isCorrect ? 'Correct! You identified the DC isolator.' : clickPosition ? 'Incorrect location. The DC isolator is typically located near the main disconnect switch.' : 'Please click on the diagram to identify the DC isolator.'}
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