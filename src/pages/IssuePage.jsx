// src/pages/IssuePage.jsx
import React from "react";

const IssuePage = () => {
  const issueData = [
    {
      id: 1,
      location: "1202호 앞(우리 집)",
      date: "2025.03.25. 22:03",
      message: "우리 집(1202호) 앞에 누군가 방문했어요.",
    },
    {
      id: 2,
      location: "101동 공용 현관",
      date: "2025.03.26. 09:15",
      message: "공용 현관에 사람이 감지되었어요.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34] pt-20 pl-6 pr-6">
      <h2 className="text-xl font-semibold mb-6">이슈 목록</h2>

      <div className="space-y-4">
        {issueData.map((issue) => (
          <div
            key={issue.id}
            className="bg-white border border-[#ffe066] border-l-4 border-[#ffcc00] rounded-lg p-4 shadow hover:bg-[#fffdf0] cursor-pointer"
          >
            <div className="font-medium mb-1 flex items-center">
              <span className="mr-2 text-[#ffcc00]">⚠️</span>
              <span>{issue.message}</span>
            </div>
            <div className="text-sm text-[#5d6c72]">({issue.date})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuePage;
