import React, { useState } from "react";
import imgFrame18 from "figma:asset/a97b3aa89ff7a3cc40f700bad0ba25777fdaec9c.png";
import svgPathsHome from "../imports/svg-w7pcmk5kzd";
import { HomeLine, CalendarCheck02, Bell01 } from "./SidebarComponents";

// Simple markdown parser for basic formatting
const parseMarkdown = (text: string): string => {
  return text
    // Bold text: **text** -> <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
    // Italic text: *text* -> <em>text</em>
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Headers: ### text -> <h3>text</h3>
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2 text-gray-800">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mt-4 mb-2 text-gray-800">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-4 mb-2 text-gray-800">$1</h1>')
    // Numbered lists: 1. text -> <ol><li>text</li></ol>
    .replace(/^\d+\.\s+(.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
    // Bullet points: - text -> <ul><li>text</li></ul>
    .replace(/^-\s+(.*$)/gm, '<li class="ml-4 mb-1 list-disc">$1</li>')
    // Emojis and line breaks
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    // Wrap consecutive list items in proper list tags
    .replace(/(<li class="ml-4 mb-1">.*?<\/li>(\s*<br>)*)+/gs, (match) => {
      if (match.includes('list-disc')) {
        return `<ul class="list-disc ml-6 mb-4">${match.replace(/<br>/g, '').replace(/class="ml-4 mb-1 list-disc"/g, 'class="mb-1"')}</ul>`;
      } else {
        return `<ol class="list-decimal ml-6 mb-4">${match.replace(/<br>/g, '').replace(/class="ml-4 mb-1"/g, 'class="mb-1"')}</ol>`;
      }
    });
};

export default function HomePageContent({ userLevel = 'beginner' }: { userLevel?: 'beginner' | 'expert' }) {
  const [isRecording, setIsRecording] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handleSendMessage = async () => {
    if (chatInput.trim() && !isLoading) {
      const question = chatInput.trim();
      setChatInput("");
      setIsLoading(true);
      setShowResponse(false);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/chat/ask-question`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: question,
            context: 'Home page chat',
            currentSlide: 'Home page',
            userLevel: userLevel,
            screenContext: 'learning'
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log

        if (data.success) {
          setResponseText(data.response);
          setShowResponse(true);
        } else {
          throw new Error(data.error || 'Failed to get response');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setResponseText(`Error: ${error.message}. Please check the console for more details.`);
        setShowResponse(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div
      className="bg-white box-border content-stretch flex flex-col h-[950px] items-center relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
      data-name="Playground Container"
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
            <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px pb-0 pt-[80px] px-0 relative shrink-0 w-full">
              {/* Welcome Section */}
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                {/* Avatar with blur effects */}
                <div className="relative shrink-0 size-[90.219px]">
                  <div className="absolute bg-[#fbfcff] left-0 rounded-[26.981px] size-[90.219px] top-0">
                    <div
                      aria-hidden="true"
                      className="absolute border-[2.529px] border-solid border-white inset-[-2.529px] pointer-events-none rounded-[29.5105px] shadow-[0px_3.373px_26.981px_-3.373px_rgba(99,140,243,0.32)]"
                    />
                  </div>
                  <div className="absolute blur-[14.334px] filter left-[5.9px] size-[77.571px] top-[6.75px]">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                      src={imgFrame18}
                    />
                  </div>
                  <div className="absolute blur-[26.981px] filter left-[5.9px] size-[77.571px] top-[6.75px]">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                      src={imgFrame18}
                    />
                  </div>
                  <div className="absolute flex items-center justify-center left-[6.75px] size-[77.571px] top-[6.75px]">
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <div className="blur-[0px] filter relative size-[77.571px]">
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                          src={imgFrame18}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <p
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-none relative shrink-0 text-[#130261] text-[54px] text-center text-nowrap whitespace-pre"
                      style={{
                        fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                      }}
                    >
                      Welcome Thandiwe!
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <p
                      className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666666] text-[20px] text-center text-nowrap whitespace-pre"
                      style={{
                        fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                      }}
                    >
                      Your comprehensive AI-powered learning and operational support platform.
                    </p>
                  </div>
                </div>

                {/* Action Cards */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[120px] py-0 relative w-full">
                      {/* Continue Safety Essentials Card */}
                      <div className="basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[14.955px] shrink-0">
                        <div
                          aria-hidden="true"
                          className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[16.0232px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]"
                        />
                        <div className="flex flex-col items-center relative size-full">
                          <div className="box-border content-stretch flex flex-col gap-[10.682px] items-center px-[12.819px] py-[18.16px] relative w-full">
                            <div className="bg-[rgba(97,85,245,0.2)] content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[40px]">
                              <HomeLine isActive={true} />
                            </div>
                            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[302px]">
                              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-black text-center w-full">
                                  <p
                                    className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 100, 'wdth' 100",
                                    }}
                                  >
                                    Continue Safety Essentials
                                  </p>
                                  <p
                                    className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                                    }}
                                  >
                                    Resume: Arc-rated PPE Basics ~5 min
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prepare for Workshop Card */}
                      <div className="basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[14.955px] shrink-0">
                        <div
                          aria-hidden="true"
                          className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[16.0232px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]"
                        />
                        <div className="flex flex-col items-center relative size-full">
                          <div className="box-border content-stretch flex flex-col gap-[10.682px] items-center px-[12.819px] py-[18.16px] relative w-full">
                            <div className="bg-[rgba(97,85,245,0.2)] content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[40px]">
                              <CalendarCheck02 />
                            </div>
                            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[302px]">
                              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-black text-center w-full">
                                  <p
                                    className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 100, 'wdth' 100",
                                    }}
                                  >
                                    Prepare for CoE Workshop
                                  </p>
                                  <p
                                    className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                                    }}
                                  >
                                    Mzuzu University • 18-22 Nov 2025
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Module Updates Card */}
                      <div className="basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[14.955px] shrink-0">
                        <div
                          aria-hidden="true"
                          className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[16.0232px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]"
                        />
                        <div className="flex flex-col items-center relative size-full">
                          <div className="box-border content-stretch flex flex-col gap-[10.682px] items-center px-[12.819px] py-[18.16px] relative w-full">
                            <div className="bg-[rgba(97,85,245,0.2)] content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[40px]">
                              <Bell01 />
                            </div>
                            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
                              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[302px]">
                                <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-black text-center w-full">
                                  <p
                                    className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 100, 'wdth' 100",
                                    }}
                                  >
                                    Module Updates for you
                                  </p>
                                  <p
                                    className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-full"
                                    style={{
                                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                                    }}
                                  >
                                    New Solar Module added • 5 Topics to cover
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Section */}
              <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
                  <div 
                    className={`bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[rgba(97,85,245,0.2)] ${isRecording ? 'animate-pulse' : ''}`}
                    onMouseDown={() => setIsRecording(true)}
                    onMouseUp={() => setIsRecording(false)}
                    onMouseLeave={() => setIsRecording(false)}
                    onTouchStart={() => setIsRecording(true)}
                    onTouchEnd={() => setIsRecording(false)}
                  >
                    <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
                      <div className={`content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[70px] transition-colors ${isRecording ? 'bg-red-500' : 'bg-[#6155f5]'}`}>
                        <div className="relative shrink-0 size-[24px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 24 24"
                          >
                            <g id="microphone-02">
                              <path
                                d={svgPathsHome.p271cb500}
                                id="Icon"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    {isRecording ? "Recording..." : "Press and hold to ask anything"}
                  </p>
                </div>

                {/* Chat Input Field */}
                <div className="relative shrink-0 w-full max-w-md">
                  <div className="bg-white border border-gray-200 rounded-full shadow-sm px-4 py-3 flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Ask anything you need"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-['Noto_Sans:Regular',_sans-serif] text-[16px]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!chatInput.trim() || isLoading}
                      className={`bg-[#6155f5] hover:bg-[#5046e4] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors font-['Noto_Sans:Medium',_sans-serif] text-[14px]`}
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Thinking...
                        </>
                      ) : (
                        <>
                          Send
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Response Display Area */}
                {showResponse && (
                  <div className="relative shrink-0 w-full max-w-2xl mt-6">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#6155f5] rounded-full flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0109 7.05016 11.7287 6.91894 12.4272 7.03871C13.1257 7.15849 13.7523 7.52152 14.2005 8.06353C14.6487 8.60553 14.8905 9.29152 14.89 10C14.89 12 11.89 13 11.89 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="prose prose-sm max-w-none">
                            <div
                              className="text-gray-700 font-['Noto_Sans:Regular',_sans-serif] text-[14px] leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: parseMarkdown(responseText) }}
                            />
                          </div>
                          <button
                            onClick={() => setShowResponse(false)}
                            className="mt-4 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}