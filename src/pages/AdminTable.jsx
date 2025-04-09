import React, { useState } from "react";

// 예시 데이터
const userList = [
  {
    user: "홍길동",
    home: "1202호",
    email: "asdf@naver.com",
  },
  {
    user: "홍길동",
    home: "1202호",
    email: "asdf@naver.com",
  },
];

const AdminTable = () => {
  const [filter, setFilter] = useState({ page: 0 }); // 페이지는 0부터 시작
  const totalPages = Math.ceil(userList.length / 3); // 예시로 3개씩 페이지 나누기

  return (
    <div className="bg-white">
      <table className="w-full text-sm table-fixed">
        <thead className="bg-gray-100">
          <tr className="font-semibold">
            <th className="w-1/8 px-4 py-2 text-left">구성원 이름</th>
            <th className="w-1/8 px-4 py-2 text-left">호수</th>
            <th className="w-1/4 px-4 py-2 text-left">연락처</th>
          </tr>
        </thead>
        <tbody>
          {userList
            .slice(filter.page * 3, (filter.page + 1) * 3)
            .map((row, index) => {
              return (
                <tr
                  key={index}
                  className="hover:bg-blue-100"
                  onClick={() => setSelectedImgInfo(row)}
                >
                  <td className="px-4 py-2">{row.user}</td>
                  <td className="px-4 py-2">{row.home}</td>
                  <td className="px-4 py-2">{row.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {totalPages > 1 && (
        <Pagination
          currentPage={filter.page}
          totalPages={totalPages}
          onPageChange={(newPage) => setFilter({ ...filter, page: newPage })}
        />
      )}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-4 text-sm">
      <button
        className="w-7 py-1 border rounded disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`w-7 py-1 border rounded cursor-pointer ${
            currentPage === index
              ? "bg-blue-500 border-blue-500 text-white"
              : ""
          }`}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="w-7 py-1 border rounded disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
      >
        &gt;
      </button>
    </div>
  );
};

export default AdminTable;
