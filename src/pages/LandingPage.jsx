import React, { useState } from "react";
import apartmentImg from "../images/apartment.jpg";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
<nav className="bg-white shadow px-8 py-5 border-b border-gray-200">
  <div className="max-w-7xl mx-auto flex justify-between items-center gap-32">
    {/* 로고 */}
    <div>
      <span className="font-bold text-2xl md:text-3xl text-[#00AEEF] tracking-wide">
        VISI:ON
      </span>
    </div>
    {/* 로그인 / 회원가입 */}
    <div className="flex space-x-4">
      <button className="px-5 py-2 text-sm md:text-base text-[#00AEEF] hover:bg-[#D9F4FD] rounded transition">
        로그인
      </button>
      <button className="px-5 py-2 text-sm md:text-base bg-[#00AEEF] text-white hover:bg-[#0095CF] rounded transition">
        회원가입
      </button>
    </div>
  </div>
</nav>

<section className="h-[calc(100vh-80px)] flex items-center justify-center bg-[#F8FDFF] px-4 sm:px-8 md:px-12 lg:px-16">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
    {/* 왼쪽 텍스트 */}
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
        집을 <span className="text-[#00AEEF]">언제 어디서나</span>
        <br />
        안전하게 지켜보세요
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        VISI:ON으로 실시간 모니터링, 움직임 감지 알림, <br />
        클라우드 저장 기능을 통해 소중한 공간을 보호하세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0095CF] font-medium">
          시작하기
        </button>
        <button className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg hover:bg-[#D9F4FD] font-medium">
          자세히 알아보기
        </button>
      </div>
    </div>

    {/* 오른쪽 카드 */}
    <div className="flex-1">
      <div className="shadow-lg overflow-hidden rounded-lg">
        <img
          src={apartmentImg}
          alt="아파트 외관"
          className="w-full h-72 object-cover rounded-t-lg"
        />
        <div className="p-4 bg-white rounded-b-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">현관 카메라</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              실시간
            </span>
          </div>
          <p className="text-sm text-gray-600">마지막 움직임: 5분 전</p>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Features */}
      <section id="features" className="py-16 px-6 bg-[#D9F4FD]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">핵심 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["📹", "🔔", "☁️"].map((icon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {icon === "📹" && "실시간 모니터링"}
                  {icon === "🔔" && "움직임 감지 알림"}
                  {icon === "☁️" && "클라우드 저장"}
                </h3>
                <p className="text-gray-600">
                  {icon === "📹" && "언제 어디서나 스마트폰으로 집안을 실시간으로 확인할 수 있습니다."}
                  {icon === "🔔" && "의심스러운 움직임이 감지되면 즉시 알림을 받을 수 있습니다."}
                  {icon === "☁️" && "영상 기록이 자동으로 클라우드에 저장되어 언제든지 확인할 수 있습니다."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
