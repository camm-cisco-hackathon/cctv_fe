// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-5">
      <h1 className="text-xl font-semibold text-[#232f34]">대시보드</h1>
      <div className="text-[#232f34]">홍길동님</div>
    </header>
  );
};

export default Header;
