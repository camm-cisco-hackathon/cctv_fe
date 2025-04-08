import React, { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      {/* Navigation */}
      <nav className="bg-white shadow px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-[#00AEEF]">Visi-On</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-[#00AEEF]">기능</a>
            <a href="#pricing" className="hover:text-[#00AEEF]">요금제</a>
            <a href="#faq" className="hover:text-[#00AEEF]">FAQ</a>
            <a href="#contact" className="hover:text-[#00AEEF]">문의하기</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded text-[#00AEEF] hover:bg-[#D9F4FD]">로그인</button>
            <button className="px-4 py-2 bg-[#00AEEF] text-white rounded hover:bg-[#0095CF]">회원가입</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              집을 <span className="text-[#00AEEF]">언제 어디서나</span><br />
              안전하게 지켜보세요
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Visi-On으로 실시간 모니터링, 움직임 감지 알림, <br />클라우드 저장 기능을 통해 소중한 공간을 안전하게 보호하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0095CF] font-medium">
                무료 체험 시작하기
              </button>
              <button className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg hover:bg-[#D9F4FD] font-medium">
                자세히 알아보기
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#D9F4FD] rounded-lg"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <video 
                  className="w-full rounded shadow-sm h-64 object-cover"
                  autoPlay 
                  muted 
                  loop
                >
                  <source src="/videos/main.mp4" type="video/mp4" />
                  동영상을 지원하지 않는 브라우저입니다.
                </video>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">현관 카메라</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">실시간</span>
                  </div>
                  <p className="text-sm text-gray-600">마지막 움직임: 5분 전</p>
                </div>
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

      {/* 이용 방법 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">이용 방법</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {["01", "02", "03"].map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#D9F4FD] text-[#00AEEF] flex items-center justify-center font-bold text-xl mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === "01" && "기기 설치"}
                  {step === "02" && "앱 연결"}
                  {step === "03" && "실시간 모니터링"}
                </h3>
                <p className="text-gray-600">
                  {step === "01" && "간편한 설치로 5분만에 홈캠을 연결하세요."}
                  {step === "02" && "Visi-On 앱을 다운로드하고 기기를 등록하세요."}
                  {step === "03" && "언제 어디서나 실시간으로 확인하세요."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 bg-[#D9F4FD]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">요금제</h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            다양한 요금제를 통해 귀하의 필요에 맞는 서비스를 선택하세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['베이직', '프리미엄', '프로'].map((name, index) => {
              const recommended = name === '프리미엄';
              const planColors = recommended ? 'bg-[#00AEEF] text-white hover:bg-[#0095CF]' : 'border border-[#00AEEF] text-[#00AEEF] hover:bg-[#D9F4FD]';
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${recommended ? 'ring-2 ring-[#00AEEF] transform scale-105' : ''}`}
                >
                  {recommended && (
                    <div className="bg-[#00AEEF] text-white text-center py-2 font-medium">추천 요금제</div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {index === 0 ? '9,900원' : index === 1 ? '19,900원' : '39,900원'}
                      </span>
                      <span className="text-gray-500">/월</span>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {["실시간 모니터링", ...(index === 0 ? ["1대 카메라 지원", "24시간 기록 저장", "기본 알림"] : index === 1 ? ["3대 카메라 지원", "14일 기록 저장", "고급 움직임 감지", "음성 감지"] : ["무제한 카메라 지원", "30일 기록 저장", "AI 인식 기능", "음성 감지", "전문가 지원"])]
                        .map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded font-medium ${planColors}`}>
                      시작하기
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">고객 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["김지영", "이상호", "박민지"].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="mb-4 text-gray-600 italic">
                  {index === 0 && '"자녀들이 학교에 있는 동안 집을 확인할 수 있어서 정말 안심이 됩니다."'}
                  {index === 1 && '"출장이 잦은 직업이라 Visi-On 덕분에 집 상태 확인이 쉬워졌어요."'}
                  {index === 2 && '"설치가 정말 간단해서 부모님도 잘 사용하세요."'}
                </p>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-gray-500">{index === 0 ? "워킹맘" : index === 1 ? "회사원" : "프리랜서"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-[#D9F4FD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">자주 묻는 질문</h2>
          <div className="space-y-6">
            {["설치는 어렵지 않나요?", "인터넷이 끊기면 어떻게 되나요?"].map((q, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{q}</h3>
                <p className="text-gray-600">
                  {index === 0 ? "아니요, Visi-On은 누구나 쉽게 설치할 수 있도록 설계되었습니다." : "로컬에 저장되며 인터넷 연결이 복구되면 클라우드로 자동 업로드됩니다."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}