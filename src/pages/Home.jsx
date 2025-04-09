import React, { useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import apartmentImg from "../images/apartment.jpg";

export default function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34] p-6 space-y-6">
      {/* 상단 검색 및 알림 */}
      <header className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
        <FaUserCircle className="text-3xl text-[#00AEEF]" />
      </header>

      {/* 상단 카드 */}
      <section className="bg-[#D9F4FD] p-4 rounded-xl flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow">
          <MdNotificationsActive className="text-2xl text-[#00AEEF]" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-semibold mb-2 text-[#232f34]">
            새로운 이슈가 등록되었어요!
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
          {/* 최근 이슈 */}
          <div>
            <h3 className="text-base font-semibold mb-2">최근 이슈</h3>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "CCTV 설치 요청", color: "#00AEEF", width: "w-3/4" },
                { title: "조명 고장 신고", color: "#facc15", width: "w-1/2" },
                { title: "출입문 오작동", color: "#f472b6", width: "w-1/6" },
              ].map((item, index) => (
                <div key={index} className="bg-[#F8FDFF] p-4 rounded-lg shadow">
                  <p className="font-medium mb-2">{item.title}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-full rounded-full ${item.width}`}
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* 장소 목록 */}
          <div>
            <h3 className="text-base font-semibold mb-2 flex items-center justify-between">
              <span>장소 목록</span>
              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="bg-[#00AEEF] text-white rounded p-1 hover:bg-[#0095CF]"
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  onClick={scrollRight}
                  className="bg-[#00AEEF] text-white rounded p-1 hover:bg-[#0095CF]"
                >
                  <IoIosArrowForward size={20} />
                </button>
              </div>
            </h3>

            <section
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="min-w-[240px] h-[308px] bg-[#F8FDFF] rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <img
                    src={apartmentImg}
                    alt={`장소 ${i}`}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold mb-1">현관 카메라 {i}</h4>
                    <p className="text-sm text-gray-600">
                      최근 감지: {i * 2}분 전
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* 오른쪽 그룹 */}
        <div className="bg-white p-4 rounded-xl shadow space-y-6">
          {/* 내 프로필 */}
          <div>
            <h3 className="text-base font-semibold mb-2">내 프로필</h3>
            <section className="p-4 rounded-lg shadow flex items-center gap-4 h-[70px] bg-[#F8FDFF]">
              <FaUserCircle className="text-5xl text-[#00AEEF]" />
              <div>
                <p className="font-medium">홍길동</p>
                <p className="text-sm text-gray-500">관리자</p>
              </div>
            </section>
          </div>

          {/* 이번 주 일정 */}
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
}
