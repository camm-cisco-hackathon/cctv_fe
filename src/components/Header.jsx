// ✅ Header.jsx (대시보드 텍스트 포함)
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-52 right-0 bg-white border-b border-[#E0F7FF] px-5 py-3 flex items-center justify-between z-40">
      {/* 좌측: 대시보드 */}
      <div className="text-[#232f34] font-medium">대시보드</div>
      {/* 우측: 사용자 */}
      <div className="text-[#232f34] font-medium">홍길동님</div>
    </header>
  );
};

export default Header;