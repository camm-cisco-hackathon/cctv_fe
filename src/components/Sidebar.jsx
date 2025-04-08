// ✅ Sidebar.jsx (와이어프레임 기반)
import React from "react";

const Sidebar = ({ onSelect, currentPage }) => {
  return (
    <aside className="w-52 bg-white border-r border-[#E0F7FF] flex flex-col">
      {/* 로고 */}
      <div className="text-[#00AEEF] font-bold text-2xl px-5 py-3 border-b border-[#E0F7FF]">
        Visi-On
      </div>

      {/* 상단 메뉴 */}
      <div className="mt-5 space-y-1">
        <MenuItem
          icon="⭐"
          label="즐겨찾기한 장소"
          active={currentPage === "favorites"}
          onClick={() => onSelect("favorites")}
        />
        <MenuItem
          icon="📍"
          label="내 장소"
          active={currentPage === "dashboard"}
          onClick={() => onSelect("dashboard")}
        />
        <MenuItem icon="🔔" label="이슈" onClick={() => onSelect("issue")} />
      </div>

      {/* 여백 차지 */}
      <div className="flex-grow" />

      {/* 하단 메뉴 */}
      <div className="space-y-1">
        <MenuItem icon="⚙️" label="설정" />
      </div>
    </aside>
  );
};

const MenuItem = ({ icon, label, active = false, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-3 flex items-center cursor-pointer transition whitespace-nowrap
        ${
          active
            ? "bg-[#E0F7FF] border-l-4 border-[#00AEEF]"
            : "hover:bg-[#E0F7FF]"
        }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
