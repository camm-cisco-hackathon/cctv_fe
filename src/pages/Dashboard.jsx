import React, { useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// 이미지 불러오기
import elevatorImg from "../images/101elevator.png";
import playgroundImg from "../images/101playground.png";
import entranceImg from "../images/GateHub101.png";
import recyclingImg from "../images/recycling.png";
import parkingImg from "../images/parking.png";
import unit1202Img from "../images/1202.png";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const locations = [
    {
      name: "Elevator",
      label: "엘리베이터",
      time: "2분 전",
      image: elevatorImg,
    },
    {
      name: "Playground",
      label: "놀이터",
      time: "5분 전",
      image: playgroundImg,
    },
    {
      name: "Main Entrance",
      label: "공동 현관",
      time: "1분 전",
      image: entranceImg,
    },
    {
      name: "Recycling Station",
      label: "분리수거장",
      time: "7분 전",
      image: recyclingImg,
    },
    {
      name: "Parking Garage",
      label: "지하주차장",
      time: "3분 전",
      image: parkingImg,
    },
    {
      name: "Unit 1202",
      label: "1202호",
      time: "방금 전",
      image: unit1202Img,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34] p-6 space-y-6">
      <h2 className="text-[#232f34] text-xl font-semibold mb-1">
        홍길동님, 환영합니다.
      </h2>
      <p className="text-sm text-[#5d6c72] mb-8">
        <span className="text-[#00AEEF] font-semibold">VISI:ON</span>과 함께 더
        쉽게 내 장소의 변화를 감지해보세요.
      </p>

      {/* 상단 검색 및 알림 */}
      {/* <header className="flex items-center mb-4 justify-end">
        <FaUserCircle className="text-3xl text-[#00AEEF]" />
      </header> */}

      {/* 상단 카드 */}
      <section className="bg-[#D9F4FD] p-4 rounded-xl flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow">
          <MdNotificationsActive className="text-2xl text-[#00AEEF]" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-semibold mb-2 text-[#232f34]">
            내 장소에서 발생한 새로운 이슈를 확인해보세요.
          </h2>
          <button className="w-fit px-3 py-1.5 text-sm bg-[#00AEEF] text-white rounded hover:bg-[#0095CF]">
            이슈 확인하기
          </button>
        </div>
      </section>

      {/* 콘텐츠 구역 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 왼쪽 그룹 */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow space-y-6">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>

          {/* 최근 이슈 */}
          {/* <div>
            <h3 className="text-base font-semibold mb-2">최근 이슈</h3>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["CCTV 설치 요청", "조명 고장 신고", "출입문 오작동"].map(
                (title, index) => {
                  const color = ["#00AEEF", "#facc15", "#f472b6"][index];
                  const width = ["w-3/4", "w-1/2", "w-1/6"][index];
                  return (
                    <div
                      key={index}
                      className="bg-[#F8FDFF] p-4 rounded-lg shadow"
                      onClick={() => {}}
                    >
                      <p className="font-medium mb-2">{title}</p>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-full rounded-full ${width}`}
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </section>
          </div> */}

          {/* 장소 목록 */}
          <div className="relative">
            <h3 className="text-base font-semibold mb-2">장소 목록</h3>

            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
            >
              <IoIosArrowBack
                size={36}
                className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:brightness-125 transition"
              />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
            >
              <IoIosArrowForward
                size={36}
                className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:brightness-125 transition"
              />
            </button>

            <section
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 px-0"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {locations.map((loc, i) => (
                <div
                  key={i}
                  onClick={() => {
                    Navigate("/location-view");
                  }}
                  className="min-w-[240px] h-[297px] bg-[#F8FDFF] rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold mb-1">{loc.label}</h4>
                    <p className="text-sm text-gray-600">
                      최근 감지: {loc.time}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* 오른쪽 그룹 */}
        <div className="bg-white p-4 rounded-xl shadow space-y-6">
          <div>
            <h3 className="text-base font-semibold mb-2">내 프로필</h3>
            <section className="p-4 rounded-lg shadow flex items-center gap-4 h-[70px] bg-[#F8FDFF]">
              <FaUserCircle className="text-5xl text-[#00AEEF]" />
              <div>
                <p className="font-medium">홍길동</p>
                <p className="text-sm text-gray-500">노원 센트럴파크뷰 2차</p>
              </div>
            </section>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">이번 주 일정</h3>
            <section className="p-4 rounded-lg shadow h-[300px] flex flex-col bg-[#F8FDFF]">
              <div className="flex-grow overflow-hidden">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    defaultValue={dayjs()}
                    readOnly
                    slotProps={{
                      layout: {
                        sx: {
                          height: "100%",
                          ".MuiPickersCalendarHeader-root": { mb: 0.5 },
                          ".MuiDayCalendar-weekContainer": { mb: 0.5 },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
