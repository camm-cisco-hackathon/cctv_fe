import React from 'react';
import Header from '../components/Header';

const GroupedLocationList = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      <Header />

      <main className="pt-20 px-6"> {/* ✅ Header 영역 확보 */}
        {/* 환영 메시지 */}
        <section className="mb-8">
          <h2 className="text-[#232f34] text-xl font-semibold mb-1">안녕하세요, 홍길동님</h2>
          <p className="text-sm text-[#5d6c72]">
            <span className="text-[#00AEEF] font-semibold">Visi-On</span>이 오늘도 여러분의 집을 지켜드려요.
          </p>
        </section>

        {/* 즐겨찾기 섹션 */}
        <Section
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

        {/* 내 장소 섹션 */}
        <Section
          title="내 장소"
          locations={[
            '1202호 앞',
            '101동 12층',
            '101동 공용 현관',
            '101동 엘리베이터',
          ]}
        />

        {/* 이슈 섹션 */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <button className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
              이슈 <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="bg-white border border-[#ffe066] border-l-4 border-[#ffcc00] rounded-lg p-4 shadow cursor-pointer hover:bg-[#fffdf0]">
            <div className="font-medium mb-1 flex items-center">
              <span className="mr-2 text-[#ffcc00]">⚠️</span>
              <span>우리 집(1202호) 앞에 누군가 방문했어요.</span>
            </div>
            <div className="text-sm text-[#5d6c72]">(2023.03.25. 22:03)</div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Section = ({ title, locations }) => {
  return (
    <section className="mb-10">
      <div className="flex items-center mb-3">
        <button className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
          {title} <span className="ml-1">▼</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E0F7FF] rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-[#00AEEF] transition"
          >
            <span className="text-[#00AEEF] text-xl mr-3">📍</span>
            <span>{loc}</span>
            <span className="ml-auto text-gray-400">❯</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupedLocationList;
