import React, { useState, useEffect } from "react";
import svgPaths from "../imports/svg-wn8cyk1ry2";
import Task1Content from "./Task1Content";
import { Task2Content, Task3Content, Task4Content, Task5Content } from "./TaskComponents";

// Task Tab Components for the left sidebar
function AlertCircle() {
  return (
    <div className="relative size-[16px]" data-name="alert-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_829)" id="alert-circle">
          <path d={svgPaths.p109f9680} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_829">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TaskTab({ 
  title, 
  percentage, 
  status, 
  isActive, 
  onClick 
}: { 
  title: string; 
  percentage: number; 
  status: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const getProgressWidth = () => {
    if (percentage === 80) return "w-[184px]";
    if (percentage === 60) return "w-full";
    if (percentage === 40) return "w-[76px]";
    if (percentage === 0) return "w-px";
    if (percentage === 20) return "w-[49px]";
    return "w-full";
  };

  return (
    <div 
      className={`relative shrink-0 w-full cursor-pointer transition-colors hover:bg-gray-50 ${
        isActive ? "bg-[rgba(97,85,245,0.1)]" : "bg-white"
      }`}
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[#b6b6b6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              {title}
            </p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none scale-y-[-100%]">
                <AlertCircle />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
            <div className="bg-white content-stretch flex h-[6px] items-start overflow-clip relative rounded-[6px] shrink-0 w-full">
              <div className={`bg-[#6155f5] h-[9px] relative shrink-0 ${getProgressWidth()}`}>
                <div className="relative size-full">
                  <div className={`h-[9px] ${getProgressWidth()}`} />
                </div>
              </div>
              <div className="basis-0 bg-[#e1e8f0] grow h-[9px] min-h-px min-w-px relative shrink-0">
                <div className="relative size-full">
                  <div className="h-[9px] w-full" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
              <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {percentage}%
              </p>
              <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame125({ currentTask, onTaskChange }: { currentTask: number; onTaskChange: (task: number) => void }) {
  const tasks = [
    { id: 1, title: "PPE selection", percentage: 80, status: "(Almost there)" },
    { id: 2, title: "LOTO sequence", percentage: 60, status: "(Need Practice)" },
    { id: 3, title: "DC isolation verify", percentage: 40, status: "(Need Practice)" },
    { id: 4, title: "Thermal cues", percentage: 0, status: "(Not Started)" },
    { id: 5, title: "Fire response", percentage: 20, status: "(Start here)" },
  ];

  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-[268px]">
      {tasks.map((task) => (
        <TaskTab
          key={task.id}
          title={task.title}
          percentage={task.percentage}
          status={task.status}
          isActive={currentTask === task.id}
          onClick={() => onTaskChange(task.id)}
        />
      ))}
    </div>
  );
}

function Frame53({ elapsedTime }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0 text-black">
        <p
          className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] w-full"
          style={{
            fontVariationSettings: "'CTGR' 100, 'wdth' 100",
          }}
        >
          Safety Essentials for BESS Sites (Assessment)
        </p>
        <p
          className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-full"
          style={{
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
          }}
        >
          PPE, LOTO, DC isolation, thermal runaway cues, and fire response.
        </p>
      </div>
      <div className="bg-[#fff1da] relative rounded-[8px] shrink-0">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[12px] relative">
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="clock">
                <path
                  d={svgPaths.p2d341f00}
                  id="Icon"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <p
            className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff761b] text-[24px] text-nowrap whitespace-pre"
            style={{
              fontVariationSettings: "'CTGR' 100, 'wdth' 100",
            }}
          >
            {formatTime(elapsedTime)}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#ff761b] border-solid inset-0 pointer-events-none rounded-[8px]"
        />
      </div>
    </div>
  );
}

function ProgressStep({ number, label, duration, isCompleted }: { 
  number: number; 
  label: string; 
  duration: string;
  isCompleted: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <div className={`relative rounded-[48px] shrink-0 size-[32px] ${isCompleted ? 'bg-[#6155f5]' : 'bg-white border-2 border-[#dddddd]'}`}>
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[15px] py-px relative size-[32px]">
          <p className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre ${isCompleted ? 'text-white' : 'text-[#6155f5]'}`}>
            {number}
          </p>
        </div>
        {isCompleted && (
          <div
            aria-hidden="true"
            className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[48px]"
          />
        )}
      </div>
      <div className="content-stretch flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium items-center leading-[normal] relative shrink-0 w-full">
        <p
          className="min-w-full relative shrink-0 text-[12px] text-black text-center"
          style={{
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
            width: "min-content",
          }}
        >
          {label}
        </p>
        <p
          className="relative shrink-0 text-[#8a8a8a] text-[11px] text-nowrap whitespace-pre"
          style={{
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
          }}
        >
          {duration}
        </p>
      </div>
    </div>
  );
}

function ConnectorLine() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0">
      <div className="absolute bottom-[-6.25%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 77 17"
        >
          <g id="Frame 46">
            <path
              d="M0 16H76.6667"
              id="Vector 1"
              stroke="var(--stroke-0, #6155F5)"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AssessmentStep() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[75px]">
      <div className="bg-white relative rounded-[48px] shrink-0 size-[32px]">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[15px] py-px relative size-[32px]">
          <div className="relative shrink-0 size-[16px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g id="graduation-hat-02">
                <path
                  d={svgPaths.p2735700}
                  id="Icon"
                  stroke="var(--stroke-0, #6155F5)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.33333"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-2 border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[48px]"
        />
      </div>
      <p
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[12px] text-black text-center"
        style={{
          fontVariationSettings: "'CTGR' 0, 'wdth' 100",
          width: "min-content",
        }}
      >
        Assessment
      </p>
    </div>
  );
}

function ProgressBar() {
  const steps = [
    { number: 1, label: "PPE & LOTO", duration: "5 min", isCompleted: true },
    { number: 2, label: "DC Isolation", duration: "5 min", isCompleted: true },
    { number: 3, label: "Thermal Runaway", duration: "5 min", isCompleted: true },
    { number: 4, label: "Fire Response", duration: "5 min", isCompleted: true },
    { number: 5, label: "Incident Report", duration: "5 min", isCompleted: true },
    { number: 6, label: "Site Handover", duration: "5 min", isCompleted: true },
  ];

  return (
    <div className="bg-neutral-50 relative rounded-[8px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start p-[8px] relative w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <ProgressStep {...step} />
              {index < steps.length - 1 && <ConnectorLine />}
            </React.Fragment>
          ))}
          <ConnectorLine />
          <AssessmentStep />
        </div>
      </div>
    </div>
  );
}

function Frame54({ elapsedTime }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Frame53 elapsedTime={elapsedTime} />
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

export default function AssessmentContainer() {
  const [currentTask, setCurrentTask] = useState(1);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTaskContent = () => {
    switch (currentTask) {
      case 1:
        return <Task1Content />;
      case 2:
        return <Task2Content />;
      case 3:
        return <Task3Content />;
      case 4:
        return <Task4Content />;
      case 5:
        return <Task5Content />;
      default:
        return <Task1Content />;
    }
  };

  return (
    <div
      className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
      data-name="Assessment Container"
    >
      <Frame54 elapsedTime={elapsedTime} />
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full">
            <div className="basis-0 box-border content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] shrink-0">
              <Frame125 currentTask={currentTask} onTaskChange={setCurrentTask} />
              <div className="basis-0 bg-neutral-50 grow h-full min-h-px min-w-px relative shrink-0">
                <div className="overflow-clip relative size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full">
                    {renderTaskContent()}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#b7b7b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}