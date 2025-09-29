import svgPaths from "./svg-jaas08bm7i";

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M17 7L7 17M7 7L17 17" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Assistant
          </p>
          <X />
        </div>
      </div>
    </div>
  );
}

function Microphone02() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="microphone-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="microphone-02">
          <path d={svgPaths.p271cb500} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#6155f5] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[70px]">
      <Microphone02 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame66 />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Press and hold to ask anything
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[10px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#6155f5] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Ask about this step
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[10px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#6155f5] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Translate to French
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[10px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#6155f5] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Summarize Section
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[10px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#6155f5] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Save for offline
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame113 />
      <Frame112 />
    </div>
  );
}

function Send01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="send-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="send-01">
          <path d={svgPaths.p28b9b780} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[9.06825px] shadow-[0px_4.273px_34.184px_-4.273px_rgba(99,140,243,0.32)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[9px] py-[7px] relative w-full">
          <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b738b] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Ask anything you need
          </p>
          <Send01 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[17.36px] items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Stars01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p21042080} stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p30b86b00} stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[rgba(97,85,245,0.2)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)] shrink-0 size-[48px]">
      <Stars01 />
    </div>
  );
}

function Dice5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dice-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_10_1470)" id="dice-5">
          <path d={svgPaths.p11803800} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_10_1470">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <Dice5 />
    </div>
  );
}

function CheckDone01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check-done-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check-done-01">
          <path d={svgPaths.pd23a800} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <CheckDone01 />
    </div>
  );
}

function File05() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-05">
          <path d={svgPaths.p14b7ef00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <File05 />
    </div>
  );
}

function AnnotationAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="annotation-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="annotation-alert">
          <path d={svgPaths.p31e28580} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <AnnotationAlert />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame76 />
      <Frame75 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col h-[727px] items-center justify-between relative shrink-0 w-full">
      <Frame111 />
      <Frame110 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[14px] py-[17px] relative size-full">
          <Frame114 />
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

export default function Frame63() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end pl-0 pr-[8px] py-[8px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}