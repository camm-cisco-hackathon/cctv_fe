import React, { useState } from "react";
import Viewer from "../components/Viewer";
import { MdViewComfy, MdViewAgenda } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const LocationView = () => {
  const [selectedLocation, setSelectedLocation] =
    useState("1202호 앞(우리 집)");
  const [viewMode, setViewMode] = useState("list");
  const [visibleCount, setVisibleCount] = useState(1); // 처음에는 1개만 보이기
  const [expandedGroup, setExpandedGroup] = useState("우리 집");

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
    if (mode === "list") setVisibleCount(2);
    else if (mode === "grid") setVisibleCount(4);
  };

  const groupedLocations = {
    "우리 집": ["1202호 앞"],
    "101동": ["101동 12층", "101동 공용 현관", "101동 엘리베이터"],
  };

  const cameraCount = [1, 2, 3, 4];

  return (
    <div className="flex min-h-screen bg-[#F8FDFF] text-[#232f34]">
      {/* 왼쪽 사이드바 */}
      <aside className="w-[280px] bg-white text-[#232f34] border-r border-[#E0F7FF] flex flex-col">
        <div className="p-5">
          <h2 className="text-[#232f34] text-xl font-semibold mb-1">
            내 장소 목록
          </h2>
          <p className="text-sm text-[#5d6c72] ">
            확인 가능한 장소의 목록입니다.
          </p>
        </div>
        {/* 검색창 */}
        <div className="relative p-4">
          <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="장소 검색"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none text-sm"
          />
        </div>

        <div className="px-2 space-y-2">
          {Object.entries(groupedLocations).map(([group, locations], index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-[#E0F7FF] rounded-md font-semibold text-sm text-[#232f34]"
                onClick={() =>
                  setExpandedGroup(expandedGroup === group ? null : group)
                }
              >
                <span>{group}</span>
                {expandedGroup === group ? (
                  <IoIosArrowDown className="text-[#00AEEF]" />
                ) : (
                  <IoIosArrowForward className="text-[#00AEEF]" />
                )}
              </div>
              {expandedGroup === group && (
                <div className="ml-3 border-l border-[#D9F4FD] pl-3 space-y-1 mt-1">
                  {locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className={`text-sm px-3 py-2 cursor-pointer rounded-md transition-all whitespace-nowrap overflow-hidden text-ellipsis ${
                        loc === selectedLocation
                          ? "bg-[#E0F7FF] text-[#00AEEF] font-semibold"
                          : "hover:bg-[#F0FAFC]"
                      }`}
                      onClick={() => handleLocationClick(loc)}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* 오른쪽 콘텐츠 */}
      <main className="flex-1 p-6 space-y-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%]">
            {cameraCount.slice(0, visibleCount).map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[400px] self-start"
              >
                <div className="bg-[#00AEEF] text-white text-sm font-semibold px-4 py-2">
                  {selectedLocation} - 카메라 {i}
                </div>
                <div className="relative bg-black aspect-[16/9] flex items-center justify-center">
                  <Viewer
                    wsUrl="ws://localhost:52049/ws"
                    streamOnMount={false}
                    isAdmin={false}
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
    </div>
  );
};

export default LocationView;
