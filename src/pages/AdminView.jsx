import { useState } from "react";
import AdminTable from "./AdminTable";
import Search from "../components/SearchComponent";
import apartment from "../images/apartment.jpg";

import elevatorImg from "../images/101elevator.png";
import playgroundImg from "../images/101playground.png";
import entranceImg from "../images/GateHub101.png";
import recyclingImg from "../images/recycling.png";
import parkingImg from "../images/parking.png";
import unit1202Img from "../images/1202.png";

const AdminView = () => {
  const myLocations = [
    {
      name: "Elevator",
      label: "엘리베이터",
      time: "2분 전",
      image: elevatorImg,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "Playground",
      label: "놀이터",
      time: "5분 전",
      image: playgroundImg,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "Main Entrance",
      label: "공동 현관",
      time: "1분 전",
      image: entranceImg,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "Recycling Station",
      label: "분리수거장",
      time: "7분 전",
      image: recyclingImg,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "Parking Garage",
      label: "지하주차장",
      time: "3분 전",
      image: parkingImg,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
    {
      name: "Unit 1202",
      label: "1202호",
      time: "방금 전",
      image: unit1202Img,
      favorite: true,
      admin: "노원 광운대역 센트럴 힐스테이트 레이크뷰 3차",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      <main className="p-10">
        <section className="mb-8">
          <h2 className="text-[#232f34] text-xl font-semibold mb-1">
            관리자뷰
          </h2>
          <p className="text-sm text-[#5d6c72]">
            관리자 뷰에서는 엑세스 권한을 통해 클라우드에 저장된 비식별화 되지
            않은 원본 이미지를 확인할 수 있습니다.
          </p>
        </section>
        <div className="flex flex-col gap-1 mb-4">
          <section className="mb-8">
            <h3 className="text-[#232f34] font-semibold text-base flex items-center bg-transparent border-none">
              원본 영상 확인
            </h3>
            <Search />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {myLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-[1/1] bg-[#F8FDFF] hover:bg-blue-50 rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="bg-blue-300 w-full aspect-[16/9] object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">{loc.name}</h4>
                      <p className="text-sm text-gray-600">{loc.admin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
            접근 권한자 확인
          </h3>
          <AdminTable />
        </div>
      </main>
    </div>
  );
};

export default AdminView;
