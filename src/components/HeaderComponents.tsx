import React from "react";
import imgFrame18 from "figma:asset/a97b3aa89ff7a3cc40f700bad0ba25777fdaec9c.png";
import { Bell01 } from "./SidebarComponents";

export function Frame118() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p
        className="font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre"
        style={{
          fontVariationSettings: "'CTGR' 0, 'wdth' 100",
        }}
      >
        GEAPP BESS
      </p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
      <Bell01 />
    </div>
  );
}

function Frame18({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="relative rounded-[48px] shrink-0 size-[48px] cursor-pointer hover:ring-2 hover:ring-[#6155f5] hover:ring-opacity-50 transition-all duration-200"
      onClick={onClick}
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[48px] size-full"
        src={imgFrame18}
      />
    </div>
  );
}

export function Frame120({
  onAvatarClick,
}: {
  onAvatarClick?: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame119 />
      <Frame18 onClick={onAvatarClick} />
    </div>
  );
}