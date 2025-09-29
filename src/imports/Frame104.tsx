import svgPaths from "./svg-n04nuns4if";
import imgImage1 from "figma:asset/36fec1d550533e2313ff457d4ea014ec78af1074.png";

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
            Practice
          </p>
          <X />
        </div>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Select all required PPE before opening a BESS enclosure.
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame113 />
      <div className="aspect-[500/500] relative shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
          <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Class 0 electrical gloves
          </p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
          <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Face Shield
          </p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
          <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`Arc-rated clothing (> 8cal/cm)`}</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
          <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Fabric garden gloves
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame116 />
      <Frame112 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre">Skip</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#6155f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Check Answer</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#ffffff] gap-[48px] items-start px-[12px] py-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[316px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 316 686\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.10000000149011612\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.0327 -68.6 47.59 -7.2319 250.13 686)\\\'><stop stop-color=\\\'rgba(233,187,71,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(228,104,163,0.2)\\\' offset=\\\'0.18044\\\'/><stop stop-color=\\\'rgba(224,20,255,0.2)\\\' offset=\\\'0.36087\\\'/><stop stop-color=\\\'rgba(136,0,255,0.8)\\\' offset=\\\'0.96852\\\'/></radialGradient></defs></svg>')" }}>
      <Frame117 />
      <Frame115 />
    </div>
  );
}

function Stars01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p21042080} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p30b86b00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <Stars01 />
    </div>
  );
}

function Dice5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dice-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_10_1538)" id="dice-5">
          <path d={svgPaths.p11803800} id="Icon" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_10_1538">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[rgba(97,85,245,0.2)] box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)] shrink-0 size-[48px]">
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
      <Frame75 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col h-[860px] items-center justify-between relative shrink-0 w-full">
      <Frame118 />
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
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

export default function Frame104() {
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