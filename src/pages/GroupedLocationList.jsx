// ✅ GroupedLocationList.jsx
import React from 'react';
import Header from '../components/Header';

const GroupedLocationList = () => {
  const data = {
    즐겨찾기: ['101동 놀이터', '1202호 앞', '101동 놀이터', '101동 엘레베이터 1호기'],
    '101동': ['101동 놀이터', '1202호 앞', '101동 놀이터', '101동 엘레베이터 1호기'],
    '101동 (기타)': ['놀이터', '로터스거장', '주차장', '헬스장'],
  };

  return (
    <div className="text-[#232f34]">
      <Header />
      <div className="min-h-screen bg-[#F8FDFF] px-6 pt-20 pb-10">
        {Object.entries(data).map(([group, locations], idx) => (
          <LocationSection key={idx} title={group} locations={locations} />
        ))}
      </div>
    </div>
  );
};

const LocationSection = ({ title, locations }) => {
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
