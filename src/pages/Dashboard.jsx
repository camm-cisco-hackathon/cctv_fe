// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen text-gray-800 bg-green-50 font-sans">
      <Sidebar />
      <main className="flex-1 p-5">
        <Header />
        <section className="bg-white rounded-lg shadow-md p-5 mb-5">
          <h2 className="text-green-700 text-xl mb-2">안녕하세요, 홍길동님</h2>
          <p>Visi-On이 오늘도 여러분의 집을 지켜드려요.</p>
        </section>
        <DashboardSection title="추가하기" locations={['1202호 앞', '101동 엘리베이터 1층기', '101동 공용 현관', '101동 놀이터']} />
        <DashboardSection title="내 업소" locations={['1202호 앞', '101동 12층', '101동 공용 현관', '101동 엘리베이터']} />
        <div className="flex items-center mt-6 text-green-700 mb-2">
          <button className="flex items-center text-base cursor-pointer bg-transparent border-none">
            이슈 <span className="ml-1">▼</span>
          </button>
        </div>
        <div className="bg-yellow-50 border border-yellow-300 border-l-4 border-yellow-500 rounded-lg p-4 mb-3 cursor-pointer hover:bg-yellow-100">
          <div className="font-medium mb-1 flex items-center">
            <span className="mr-2 text-yellow-500">⚠️</span>
            <span>우리 집(1202호) 방에 누군가 입장했어요.</span>
          </div>
          <div className="text-sm text-gray-500">(2023.03.25, 22:03)</div>
          <div className="ml-auto text-gray-400 text-right">❯</div>
        </div>
      </main>
    </div>
  );
};

const DashboardSection = ({ title, locations }) => {
  return (
    <>
      <div className="flex items-center mt-6 text-green-700 mb-2">
        <button className="flex items-center text-base cursor-pointer bg-transparent border-none">
          {title} <span className="ml-1">▼</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {locations.map((location, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-green-300 transition"
          >
            <span className="text-green-500 text-xl mr-3">📍</span>
            <span>{location}</span>
            <span className="ml-auto text-gray-400">❯</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
