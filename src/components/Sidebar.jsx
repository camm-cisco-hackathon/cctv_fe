// ✅ Sidebar.jsx (와이어프레임 기반)
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-52 bg-white border-r border-[#E0F7FF] flex flex-col">
      {/* 로고 */}
      <div className="text-[#00AEEF] font-bold text-2xl px-5 py-3 border-b border-[#E0F7FF]">
        VISI:ON
      </div>

      {/* 상단 메뉴 */}
      <div className="mt-5 space-y-1">
        <MenuItem
          label="대시보드"
          active={location.pathname == "/home"}
          onClick={() => {
            navigation("/home");
          }}
        />
        <MenuItem
          label="장소"
          active={location.pathname == "/location"}
          onClick={() => navigation("/location")}
        />
        <MenuItem
          label="이슈"
          active={location.pathname == "/issue"}
          onClick={() => navigation("/issue")}
        />
        <MenuItem
          label="관리자뷰"
          active={location.pathname == "/admin"}
          onClick={() => navigation("/admin")}
        />
      </div>

      {/* 여백 차지 */}
      <div className="flex-grow" />

      {/* 하단 메뉴 */}
      <div className="space-y-1">
        <MenuItem label="설정" />
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
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
