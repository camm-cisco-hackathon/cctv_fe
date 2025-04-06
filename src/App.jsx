import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GroupedLocationList from './pages/GroupedLocationList';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard'); // ✅ 기본값: 내 장소

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'favorites':
        return <GroupedLocationList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* ✅ currentPage도 전달 */}
      <Sidebar onSelect={(page) => setCurrentPage(page)} currentPage={currentPage} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
}

export default App;
