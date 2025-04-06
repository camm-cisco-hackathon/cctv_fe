// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-52 bg-white border-r border-[#E0F7FF] py-5 flex flex-col">
      <div className="text-[#00AEEF] font-bold text-2xl px-5 pb-5 border-b border-[#E0F7FF]">
        Visi-On
      </div>
      {['공지사항/알림', '내 정보', '이슈'].map((item, index) => (
        <div
          key={item}
          className={`px-5 py-3 flex items-center cursor-pointer transition ${
            index === 0 ? 'bg-[#E0F7FF] border-l-4 border-[#00AEEF]' : 'hover:bg-[#E0F7FF]'
          }`}
        >
          <span className="mr-2">{['⭐', '📊', '🔔'][index]}</span>
          <span>{item}</span>
        </div>
      ))}
      <div className="mt-auto px-5 py-3 flex items-center cursor-pointer hover:bg-[#E0F7FF]">
        <span className="mr-2">⚙️</span>
        <span>설정</span>
      </div>
    </aside>
  );
};

export default Sidebar;
