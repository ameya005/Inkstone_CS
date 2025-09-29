import svgPaths from "./svg-wluhdnpiw3";
import imgAvatar from "figma:asset/67da9fddd372b1b5b44ffef41eed6ceb810ddf8a.png";

function Content() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Content">
          <g clipPath="url(#clip0_1_452)">
            <rect fill="var(--fill-0, black)" height="32" rx="8" width="32" />
            <rect fill="url(#paint0_linear_1_452)" height="32" rx="8" width="32" />
            <g id="Grid">
              <path clipRule="evenodd" d={svgPaths.p14f5bbf2} fill="var(--fill-0, #D0D5DD)" fillRule="evenodd" id="Circle" />
              <path clipRule="evenodd" d={svgPaths.p33940f40} fill="var(--fill-0, #D0D5DD)" fillRule="evenodd" id="Circle_2" />
              <path clipRule="evenodd" d={svgPaths.p1a77d880} fill="var(--fill-0, #D0D5DD)" fillRule="evenodd" id="Circle_3" />
              <path d={svgPaths.p282127c0} fill="var(--fill-0, #D0D5DD)" id="Line" />
              <path d={svgPaths.p3a4c5e00} fill="var(--fill-0, #D0D5DD)" id="Line_2" />
              <path d={svgPaths.p240dce00} fill="var(--fill-0, #D0D5DD)" id="Line_3" />
              <path d={svgPaths.p327783f0} fill="var(--fill-0, #D0D5DD)" id="Line_4" />
              <path d={svgPaths.p10e30600} fill="var(--fill-0, #D0D5DD)" id="Line_5" />
              <path d={svgPaths.p6903b00} fill="var(--fill-0, #D0D5DD)" id="Line_6" />
              <path d={svgPaths.p120fc980} fill="var(--fill-0, #D0D5DD)" id="Line_7" />
              <path d={svgPaths.p23245a00} fill="var(--fill-0, #D0D5DD)" id="Line_8" />
              <path d={svgPaths.p34262d80} fill="var(--fill-0, #D0D5DD)" id="Line_9" />
              <path d={svgPaths.p2c03df40} fill="var(--fill-0, #D0D5DD)" id="Line_10" />
            </g>
            <g filter="url(#filter0_dd_1_452)" id="Dot">
              <circle cx="16" cy="16" fill="url(#paint1_linear_1_452)" r="8" />
            </g>
            <foreignObject height="26" width="42" x="-5" y="11">
              <div style={{ backdropFilter: "blur(2.5px)", clipPath: "url(#bgblur_1_1_452_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="5" id="Blur">
              <path d={svgPaths.pe514100} fill="var(--fill-0, black)" fillOpacity="0.2" />
            </g>
          </g>
          <rect height="31.7" rx="7.85" stroke="var(--stroke-0, #D0D5DD)" strokeWidth="0.3" width="31.7" x="0.15" y="0.15" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_dd_1_452" width="22" x="5" y="6">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_452" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
            <feBlend in2="effect1_dropShadow_1_452" mode="normal" result="effect2_dropShadow_1_452" />
            <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_452" mode="normal" result="shape" />
          </filter>
          <clipPath id="bgblur_1_1_452_clip_path" transform="translate(5 -11)">
            <path d={svgPaths.pe514100} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_452" x1="16" x2="16" y1="0" y2="32">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D0D5DD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_452" x1="12" x2="20" y1="24" y2="8">
            <stop stopColor="#53389E" />
            <stop offset="1" stopColor="#6941C6" />
          </linearGradient>
          <clipPath id="clip0_1_452">
            <rect fill="white" height="32" rx="8" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logomark() {
  return (
    <div className="box-border content-stretch flex items-start relative shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0" data-name="Logomark">
      <Content />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
      <Logomark />
    </div>
  );
}

function HomeLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-line">
          <path d={svgPaths.p476ac00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <HomeLine />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p3fc98740} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <Search />
    </div>
  );
}

function BookOpen01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="book-open-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book-open-01">
          <path d={svgPaths.p66ca580} fill="var(--stroke-0, #6155F5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[rgba(97,85,245,0.2)] content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[48px]">
      <BookOpen01 />
    </div>
  );
}

function CalendarCheck02() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar-check-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar-check-02">
          <path d={svgPaths.p6e0bb80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <CalendarCheck02 />
    </div>
  );
}

function Component3Layers() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="3-layers">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="3-layers">
          <path d={svgPaths.pe001080} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <Component3Layers />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame73 />
      <Frame72 />
      <Frame74 />
      <Frame75 />
      <Frame70 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame78 />
      <Frame76 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame77 />
    </div>
  );
}

function MessageChatCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="message-chat-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="message-chat-circle">
          <path d={svgPaths.p15b82670} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <MessageChatCircle />
    </div>
  );
}

function LifeBuoy01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="life-buoy-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="life-buoy-01">
          <path d={svgPaths.p11cb09f0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <LifeBuoy01 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame79 />
      <Frame71 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar} />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
      <Avatar />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame80 />
      <Frame83 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame84 />
    </div>
  );
}

export default function Frame67() {
  return (
    <div className="bg-white relative size-full">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
          <Frame81 />
          <Frame82 />
        </div>
      </div>
    </div>
  );
}