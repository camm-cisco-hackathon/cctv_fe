import React from 'react';

const Sidebar = ({ onSelect, currentPage }) => {
  return (
    <aside className="w-52 bg-white border-r border-[#E0F7FF] py-5 flex flex-col">
      <div className="text-[#00AEEF] font-bold text-2xl px-5 pb-5 border-b border-[#E0F7FF]">
        Visi-On
      </div>

      {/* 상단 메뉴 */}
      <div className="mt-5">
        <MenuItem
          icon="📍"
          label="내 장소"
          onClick={() => onSelect('dashboard')}
          active={currentPage === 'dashboard'}
        />
        <MenuItem
          icon="📌"
          label="즐겨찾기한 장소"
          onClick={() => onSelect('favorites')}
          active={currentPage === 'favorites'}
        />
      </div>

      <div className="flex-grow" />

      {/* 하단 메뉴 */}
      <div>
        <MenuItem icon="⚙️" label="설정" />
        <MenuItem icon="🛠️" label="내 정보 수정" />
      </div>
    </aside>
  );
};

const MenuItem = ({ icon, label, onClick = () => {}, active = false }) => {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-3 flex items-center cursor-pointer transition 
        ${active ? 'bg-[#E0F7FF] border-l-4 border-[#00AEEF]' : 'hover:bg-[#E0F7FF]'}`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
