import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const GroupedLocationList = () => {
  const myLocations = [
    {
      name: "1202호 앞",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 엘리베이터 1층기",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 공용 현관",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 놀이터",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 놀이터",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 놀이터",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "101동 놀이터",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      <main className="p-10">
        <section className="mb-8">
          <h2 className="text-[#232f34] text-xl font-semibold mb-1">
            나의 공간
          </h2>
          <p className="text-sm text-[#5d6c72]">
            <span className="text-[#00AEEF] font-semibold">VISI:ON</span>의
            비식별화 처리로 내 공간에 더욱 쉽게 엑세스하세요.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#232f34] font-semibold text-base flex items-center bg-transparent border-none">
            즐겨찾기
          </h3>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {myLocations.map((loc, idx) => (
              <div
                key={idx}
                className="w-full aspect-[1/1] bg-[#F8FDFF] rounded-lg shadow overflow-hidden flex flex-col"
              >
                <div className="bg-blue-300 w-full aspect-[16/9] object-cover" />
                <div className="p-4 flex-1">
                  <h4 className="font-semibold mb-1">{loc.name}</h4>
                  <p className="text-sm text-gray-600">{loc.admin}</p>
                  <span className="flex">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        loc.favorite = !loc.favorite;
                      }}
                    >
                      {loc.favorite ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-gray-400" />
                      )}
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 이슈 섹션 */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <button className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
              이슈
            </button>
          </div>
          <div className="bg-white border border-[#ffe066] border-l-4 rounded-lg p-4 shadow cursor-pointer hover:bg-[#fffdf0]">
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
          {title}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E0F7FF] rounded-lg p-4 flex items-center shadow hover:shadow-lg hover:border-[#00AEEF] transition"
          >
            <span>{loc}</span>
            <span className="ml-auto text-gray-400">❯</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupedLocationList;
