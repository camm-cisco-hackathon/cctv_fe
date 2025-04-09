import React, { useState } from "react";
import Viewer from "../components/Viewer";
import { MdViewComfy, MdViewAgenda } from "react-icons/md";

const LocationView = () => {
  const [selectedLocation, setSelectedLocation] =
    useState("1202호 앞(우리 집)");
  const [viewMode, setViewMode] = useState("list");
  const [visibleCount, setVisibleCount] = useState(1); // 처음에는 1개만 보이기

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
    if (mode === "list") setVisibleCount(2);
    else if (mode === "grid") setVisibleCount(4);
  };

  const cameraCount = [1, 2, 3, 4];
  const otherLocation = [
    "1202호 앞",
    "101동 12층",
    "101동 공용 현관",
    "101동 엘리베이터",
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FDFF] text-[#232f34]">
      {/* 왼쪽 사이드바 */}
      <aside className="w-[260px] bg-[#E6F8FC] text-[#232f34] p-4 space-y-4 border-r border-[#C5EAF5]">
        <h2 className="text-lg font-bold mb-4">장소 목록</h2>
        {["1202호 앞", "101동 12층", "101동 공용 현관", "101동 엘리베이터"].map(
          (loc, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-md cursor-pointer transition ${
                loc === selectedLocation
                  ? "bg-white text-[#00AEEF] shadow font-semibold"
                  : "hover:bg-[#D0EDF7]"
              }`}
              onClick={() => handleLocationClick(loc)}
            >
              {loc}
            </div>
          )
        )}
      </aside>

      {/* 오른쪽 콘텐츠 */}
      <main className="flex-1 p-6 space-y-6">
        {/* 뷰모드 아이콘 */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => handleViewChange("list")}
            className={`p-2 rounded hover:bg-[#D9F4FD] transition ${
              viewMode === "list" ? "bg-[#00AEEF] text-white" : ""
            }`}
          >
            <MdViewAgenda size={20} />
          </button>
          <button
            onClick={() => handleViewChange("grid")}
            className={`p-2 rounded hover:bg-[#D9F4FD] transition ${
              viewMode === "grid" ? "bg-[#00AEEF] text-white" : ""
            }`}
          >
            <MdViewComfy size={20} />
          </button>
        </div>

        {/* 콘텐츠 영역 */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cameraCount.slice(0, visibleCount).map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-[#00AEEF] text-white text-sm font-semibold px-4 py-2">
                  {selectedLocation} - 카메라 {i}
                </div>
                <div className="relative bg-black aspect-[16/9] flex items-center justify-center">
                  <Viewer
                    wsUrl="ws://localhost:52049/ws"
                    streamOnMount={false}
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500 bg-[#F8FDFF]">
                  <div>{new Date().toLocaleString("ko-KR")}</div>
                  <span className="bg-[#E0F7FF] px-2 py-0.5 rounded-full text-xs font-semibold text-[#00AEEF]">
                    LIVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cameraCount.slice(0, visibleCount).map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-[#00AEEF] text-white text-sm font-semibold px-4 py-2">
                  {selectedLocation} - 카메라 {i}
                </div>
                <div className="relative bg-black aspect-[16/9] flex items-center justify-center">
                  <Viewer
                    wsUrl="ws://localhost:52049/ws"
                    streamOnMount={false}
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500 bg-[#F8FDFF]">
                  <div>{new Date().toLocaleString("ko-KR")}</div>
                  <span className="bg-[#E0F7FF] px-2 py-0.5 rounded-full text-xs font-semibold text-[#00AEEF]">
                    LIVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 다른 장소 보기 텍스트 */}
      <div className="text-sm font-medium mb-2">다른 장소 보기</div>

      {/* 장소 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {otherLocation.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E0F7FF] rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-[#00AEEF] transition cursor-pointer"
            onClick={() => handleLocationClick(loc)}
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

export default LocationView;
