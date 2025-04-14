import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import img1202 from "../images/1202.png";
import imgElevator from "../images/101elevator.png";
import imgEntrance from "../images/GateHub101.png";
import imgPlayground from "../images/101playground.png";
import imgRecycling from "../images/recycling.png";
import imgParking from "../images/parking.png";

const GroupedLocationList = () => {
  const Navigate = useNavigate();

  const [myLocations, setMyLocations] = useState([
    {
      name: "1202호 앞",
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: img1202,
    },
    {
      name: "101동 엘리베이터 1호기",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: imgElevator,
    },
    {
      name: "101동 공동 현관",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: imgEntrance,
    },
    {
      name: "101동 놀이터",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: imgPlayground,
    },
    {
      name: "분리수거장",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: imgRecycling,
    },
    {
      name: "지하주차장(1층)",
      favorite: false,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
      image: imgParking,
    },
  ]);

  const myAlert = [
    {
      time: "(2023.03.25. 22:03)",
      location: "1202호 앞",
    },
    {
      time: "(2023.03.25. 21:48)",
      location: "1202호 앞",
    },
  ];

  const toggleFavorite = (index) => {
    const newLocations = [...myLocations];
    newLocations[index].favorite = !newLocations[index].favorite;
    setMyLocations(newLocations);
  };

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      <main className="p-6 flex flex-col">
        {/* 소개 문구 */}
        <h2 className="text-[#232f34] text-xl font-semibold mb-1">내 장소</h2>
        <p className="text-sm text-[#5d6c72] mb-8">
          <span className="text-[#00AEEF] font-semibold">VISI:ON</span>의
          비식별화 처리를 통해 내 공간에 더욱 쉽게 엑세스하고, <br />내 장소에서
          발생하는 이슈들을 빠르게 확인해보세요.
        </p>

        {/* 이슈 */}
        <section className="bg-white p-4 rounded-xl items-center shadow mb-8">
          <div className="mb-8">
            <div className="flex items-center">
              <h3 className="text-[#232f34] font-semibold text-base flex items-center bg-transparent border-none">
                이슈
              </h3>
            </div>
            <div className="p-4 grid grid-cols-1 gap-4">
              {myAlert.map((alert, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#ffe066] border-l-4 rounded-lg p-4 shadow cursor-pointer hover:bg-[#fffdf0]"
                >
                  <div className="font-medium mb-1 flex items-center">
                    <span className="mr-2 text-[#ffcc00]">⚠️</span>
                    <span>
                      나의 공간(
                      <span className="text-[#00AEEF]">{alert.location}</span>
                      )에 누군가 침입했어요.
                    </span>
                  </div>
                  <div className="text-sm text-[#5d6c72]">{alert.time}</div>
                </div>
              ))}
            </div>
          </div>
          {/* 즐겨찾기 */}
          <div className="mb-8">
            <h3 className="text-[#232f34] font-semibold text-base flex items-center bg-transparent border-none">
              즐겨찾기
            </h3>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {myLocations
                .filter((loc) => loc.favorite)
                .map((loc, idx) => (
                  <div
                    key={idx}
                    className="w-full aspect-[1/1] bg-[#F8FDFF] hover:bg-blue-50 rounded-lg shadow overflow-hidden flex flex-col"
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      onClick={() => {
                        Navigate("/location-view");
                      }}
                      className="bg-blue-300 w-full aspect-[16/9] object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div
                        onClick={() => {
                          Navigate("/location-view");
                        }}
                      >
                        <h4 className="font-semibold mb-1">{loc.name}</h4>
                        <p className="text-sm text-gray-600">{loc.admin}</p>
                      </div>
                      <span className="flex justify-end mt-2">
                        <button
                          className="cursor-pointer"
                          onClick={() => toggleFavorite(idx)}
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
          </div>

          {/* 전체 장소 */}
          <section className="mb-8">
            <h3 className="text-[#232f34] font-semibold text-base flex items-center bg-transparent border-none">
              전체 장소
            </h3>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {myLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-[1/1] bg-[#F8FDFF] hover:bg-blue-50 rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    onClick={() => {
                      Navigate("/location-view");
                    }}
                    className="bg-blue-300 w-full aspect-[16/9] object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div
                      onClick={() => {
                        Navigate("/location-view");
                      }}
                    >
                      <h4 className="font-semibold mb-1">{loc.name}</h4>
                      <p className="text-sm text-gray-600">{loc.admin}</p>
                    </div>
                    <span className="flex justify-end mt-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => toggleFavorite(idx)}
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
        </section>
      </main>
    </div>
  );
};

export default GroupedLocationList;
