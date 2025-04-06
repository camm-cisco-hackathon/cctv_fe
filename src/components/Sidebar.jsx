// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-52 bg-white border-r border-gray-200 py-5 flex flex-col">
      <div className="text-green-500 font-bold text-2xl px-5 pb-5 border-b border-gray-200">
        Visi-On
      </div>
      {['공지사항/알림', '내 정보', '이슈'].map((item, index) => (
        <div
          key={item}
          className={`px-5 py-3 flex items-center cursor-pointer ${
            index === 0 ? 'bg-green-50 border-l-4 border-green-500' : 'hover:bg-green-50'
          }`}
        >
          <span className="mr-2">{['⭐', '📊', '🔔'][index]}</span>
          <span>{item}</span>
        </div>
      ))}
      <div className="mt-auto px-5 py-3 flex items-center cursor-pointer hover:bg-green-50">
        <span className="mr-2">⚙️</span>
        <span>설정</span>
      </div>
    </aside>
  );
};

export default Sidebar;
