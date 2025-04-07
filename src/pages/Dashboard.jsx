// ✅ 대시보드 이미지 기반 구성 (프레임 구조 반영)
import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34] pt-20 pl-6 pr-6">
      <Header />

      {/* 메인 비디오/이미지 프리뷰 영역 */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* 왼쪽 큰 이미지 */}
          <div className="flex-1">
            <img
              src="/images/main.jpg" // 실제 이미지 경로로 교체
              alt="방문자 주요 장면"
              className="rounded-lg w-full object-cover h-[300px]"
            />
            <div className="mt-3">
              <div className="font-semibold">1202호 앞(우리 집)</div>
              <div className="text-sm text-[#5d6c72]">2025.03.27. 16:00</div>
            </div>
          </div>

          {/* 오른쪽 작은 이미지 리스트 */}
          <div className="w-full lg:w-48 flex lg:flex-col gap-2">
            {["/images/thumb1.jpg", "/images/thumb2.jpg", "/images/thumb3.jpg"].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`thumbnail-${idx}`}
                className="rounded-lg object-cover w-full h-[90px] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 다른 장소 보기 텍스트 */}
      <div className="text-sm font-medium mb-2">다른 장소 보기</div>

      {/* 장소 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {["1202호 앞", "101동 12층", "101동 공용 현관", "101동 엘리베이터"].map((loc, idx) => (
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
    </div>
  );
};

export default Dashboard;
