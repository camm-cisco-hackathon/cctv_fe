import React from 'react';
import Header from '../components/Header'; // ✅ Header는 유지

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34] px-6 pt-20">
      <Header />

      {/* 환영 메시지 박스 */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-[#232f34] text-xl font-semibold mb-1">
          안녕하세요, 홍길동님
        </h2>
        <p className="text-sm text-[#5d6c72]">
          <span className="text-[#00AEEF] font-semibold">Visi-On</span>이 오늘도 여러분의 집을 지켜드려요.
        </p>
      </section>

      {/* 즐겨찾기 섹션 */}
      <DashboardSection
        title="즐겨찾기"
        locations={[
          '1202호 앞',
          '101동 엘리베이터 1층기',
          '101동 공용 현관',
          '101동 놀이터',
          '101동 놀이터',
          '101동 놀이터',
          '101동 놀이터',
        ]}
      />
    </div>
  );
};

const DashboardSection = ({ title, locations }) => {
  return (
    <>
      <div className="flex items-center mb-3">
        <button className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
          {title} <span className="ml-1">▼</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {locations.map((location, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E0F7FF] rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-[#00AEEF] transition"
          >
            <span className="text-[#00AEEF] text-xl mr-3">📍</span>
            <span>{location}</span>
            <span className="ml-auto text-gray-400">❯</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
