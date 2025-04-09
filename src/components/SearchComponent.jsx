import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // react-icons에서 검색 아이콘 가져오기

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("검색어:", searchTerm);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="w-5 h-5 text-gray-700" />{" "}
            {/* 검색 아이콘 사용 */}
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="조회를 원하는 장소를 검색하세요"
          />
        </div>
        <button
          type="submit"
          className="w-20 ml-2 px-2 py-2 bg-[#00AEEF] text-white font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          검색
        </button>
      </form>
    </div>
  );
}
