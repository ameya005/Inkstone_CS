import React, { useState } from "react";
import Frame67 from "./imports/Frame67";
import Frame63 from "./imports/Frame63";
import InterviewDashboard from "./components/InterviewDashboard";
import InterviewHomeContent from "./components/InterviewHomeContent";
import InterviewResults from "./components/InterviewResults";
import {
  Frame118,
  Frame120,
} from "./components/HeaderComponents";
import {
  Frame78,
  HomeLine,
  Search,
  BookOpen01,
  CalendarCheck02,
  Component3Layers,
  MessageChatCircle,
  LifeBuoy01,
  Avatar,
} from "./components/SidebarComponents";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [showAssistant, setShowAssistant] = useState(false);
  const [interviewModulesExpanded, setInterviewModulesExpanded] = useState(true);
  const [activeInterview, setActiveInterview] = useState(false);
  const [interviewResults, setInterviewResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const navigateToHome = () => {
    setCurrentPage("home");
    setActiveInterview(false);
    setShowResults(false);
    setInterviewResults(null);
  };
  const navigateToInterview = () => {
    setCurrentPage("interview");
    setActiveInterview(false);
    setShowResults(false);
    setInterviewResults(null);
  };
  const startNewInterview = () => {
    setCurrentPage("interview");
    setActiveInterview(true);
    setShowResults(false);
    setInterviewResults(null);
  };
  const handleInterviewComplete = (evaluation) => {
    setActiveInterview(false);
    setInterviewResults(evaluation);
    setShowResults(true);
  };
  const navigateToHistory = () => {
    setCurrentPage("history");
    setActiveInterview(false);
  };
  const navigateToSkills = () => {
    setCurrentPage("skills");
    setActiveInterview(false);
  };
  const toggleAssistant = () => setShowAssistant(!showAssistant);
  const toggleInterviewModules = () => setInterviewModulesExpanded(!interviewModulesExpanded);

  const sidebarWidth = isCollapsed ? 65 : 300;

  const renderSidebarContent = () => {
    if (isCollapsed) {
      return (
        <>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <Frame78 isCollapsed={isCollapsed} onToggle={toggleSidebar} />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className={`content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px] cursor-pointer hover:bg-gray-100 transition-colors ${currentPage === "home" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={navigateToHome}>
                  <HomeLine isActive={currentPage === "home"} />
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
                  <Search />
                </div>
                <div className={`content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px] cursor-pointer hover:bg-gray-100 transition-colors ${currentPage === "interview" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={navigateToInterview}>
                  <BookOpen01 isActive={currentPage === "interview"} />
                </div>
                <div className={`content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px] cursor-pointer hover:bg-gray-100 transition-colors ${currentPage === "history" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={navigateToHistory}>
                  <CalendarCheck02 />
                </div>
                <div className={`content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px] cursor-pointer hover:bg-gray-100 transition-colors ${currentPage === "skills" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={navigateToSkills}>
                  <Component3Layers />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-[48px]">
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
                  <MessageChatCircle />
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
                  <LifeBuoy01 />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
                <Avatar />
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <Frame78 isCollapsed={isCollapsed} onToggle={toggleSidebar} />

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className={`h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors rounded-[4px] ${currentPage === "home" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={navigateToHome}>
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                  <div className="shrink-0 size-[20px]">
                    <HomeLine isActive={currentPage === "home"} />
                  </div>
                  <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Home
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[48px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                  <div className="shrink-0 size-[20px]">
                    <Search />
                  </div>
                  <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Search
                  </p>
                </div>
              </div>
            </div>

            <div className={`h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors rounded-[4px] ${currentPage === "interview" ? "bg-[rgba(97,85,245,0.2)]" : ""}`} onClick={toggleInterviewModules}>
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between pl-[12px] pr-[8px] py-0 relative w-full">
                  <div className="flex gap-[10px] items-center">
                    <div className="shrink-0 size-[20px]">
                      <BookOpen01 isActive={currentPage === "interview"} />
                    </div>
                    <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                      Interview Practice
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className={`relative shrink-0 size-[20px] transition-transform duration-200 ${interviewModulesExpanded ? "" : "rotate-180"}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="chevron-up">
                          <path d="M15 12.5L10 7.5L5 12.5" id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38889" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {interviewModulesExpanded && (
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className={`h-[40px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${activeInterview ? "bg-[rgba(97,85,245,0.1)] hover:bg-[rgba(97,85,245,0.15)]" : "hover:bg-gray-50"}`} onClick={startNewInterview}>
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center pl-[36px] pr-[8px] py-0 relative w-full">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g clipPath="url(#clip0_1_410)" id="arrow-circle-right">
                            <path d="M6.175 13.825l3.825-3.825L6.175 6.175" id="Icon" stroke={activeInterview ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_410">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className={`font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-nowrap whitespace-pre ${activeInterview ? "text-[#6155f5]" : "text-black"}`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                        Start New Interview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="h-[48px] relative shrink-0 w-full">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                <div className="shrink-0 size-[20px]">
                  <MessageChatCircle />
                </div>
                <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                  Forum
                </p>
              </div>
            </div>
          </div>

          <div className="h-[48px] relative shrink-0 w-full">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                <div className="shrink-0 size-[20px]">
                  <LifeBuoy01 />
                </div>
                <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                  Help
                </p>
              </div>
            </div>
          </div>

          <div className="h-[48px] relative shrink-0 w-full">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                <div className="shrink-0 size-[32px]">
                  <Avatar />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Interview Candidate
                  </p>
                  <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#969696] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="bg-neutral-50 content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name={`Desktop - ${currentPage === "home" ? "13" : "12"}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame123">
        {/* Frame67 - Sidebar */}
        <div className="bg-white box-border content-stretch flex flex-col h-[1024px] items-start justify-between p-[8px] relative shrink-0 transition-all duration-300 ease-in-out" style={{ width: `${sidebarWidth}px` }} data-name="Frame67">
          <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
          {renderSidebarContent()}
        </div>

        {/* Frame122 - Contains header and Frame121 */}
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Frame122">
          {/* Frame79 - Header */}
          <div className="relative shrink-0 w-full" data-name="Frame79">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center justify-between pb-0 pl-[24px] pr-[8px] pt-[8px] relative w-full">
                <Frame118 />
                <Frame120 onAvatarClick={toggleAssistant} />
              </div>
            </div>
          </div>

          {/* Frame121 - Contains Playground and Frame63 */}
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame121">
            {/* Playground - grows to fill available space */}
            <div className="basis-0 grow h-[968px] min-h-px min-w-px relative shrink-0" data-name="Playground">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] h-[968px] items-start p-[8px] relative w-full">
                  {showResults && interviewResults ? (
                    <InterviewResults
                      evaluation={interviewResults}
                      onStartNewInterview={startNewInterview}
                    />
                  ) : activeInterview ? (
                    <InterviewDashboard onInterviewComplete={handleInterviewComplete} />
                  ) : currentPage === "home" ? (
                    <InterviewHomeContent onStartInterview={startNewInterview} />
                  ) : currentPage === "interview" ? (
                    <InterviewHomeContent onStartInterview={startNewInterview} />
                  ) : currentPage === "history" ? (
                    <InterviewHomeContent onStartInterview={startNewInterview} />
                  ) : (
                    <InterviewHomeContent onStartInterview={startNewInterview} />
                  )}
                </div>
              </div>
            </div>

            {/* Frame63 - Fixed width, only visible when showAssistant is true */}
            {showAssistant && (
              <div className="box-border content-stretch flex gap-[10px] h-[966px] items-end pl-0 pr-[8px] py-[8px] relative shrink-0 w-[352px]" data-name="Frame63">
                <Frame63 onClose={toggleAssistant} currentPage={currentPage} isAssessmentMode={false} userLevel="beginner" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}