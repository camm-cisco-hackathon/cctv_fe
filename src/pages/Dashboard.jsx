// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Viewer from "../components/Viewer";

const Dashboard = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState("1202호 앞(우리 집)");

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowViewer(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FDFF] text-[#232f34] pt-5 pl-6 pr-6">
      {/* 메인 비디오/이미지 프리뷰 영역 */}
      <section className="w-full bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="w-3/4 flex flex-col lg:flex-row gap-4">
          {/* 왼쪽 큰 영상 */}
          <div className="flex-1">
            <Viewer wsUrl="ws://localhost:52049/ws" streamOnMount={false} />

            <div className="mt-3">
              <div className="font-semibold">{selectedLocation}</div>
              <div className="text-sm text-[#5d6c72]">
                {new Date().toLocaleString("ko-KR")}
              </div>
            </div>
          </div>

          {/* 오른쪽 작은 영상 리스트 */}
          <div className="w-1/4 flex lg:flex-col gap-2">
            {[
              "/videos/thumb1.mp4",
              "/videos/thumb2.mp4",
              "/videos/thumb3.mp4",
            ].map((src, idx) => (
              <video
                key={idx}
                src={src}
                muted
                autoPlay
                loop
                className="bg-gray-700 rounded-lg object-cover w-full cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 다른 장소 보기 텍스트 */}
      <div className="text-sm font-medium mb-2">다른 장소 보기</div>

      {/* 장소 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {["1202호 앞", "101동 12층", "101동 공용 현관", "101동 엘리베이터"].map(
          (loc, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E0F7FF] rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-[#00AEEF] transition cursor-pointer"
              onClick={() => handleLocationClick(loc)}
            >
              <span className="text-[#00AEEF] text-xl mr-3">📍</span>
              <span>{loc}</span>
              <span className="ml-auto text-gray-400">❯</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
