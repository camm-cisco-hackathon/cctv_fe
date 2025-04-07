import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import GroupedLocationList from './pages/GroupedLocationList';
import IssuePage from './pages/IssuePage'; // ✅ 추가

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'favorites':
        return <GroupedLocationList />;
      case 'issue':
        return <IssuePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelect={(page) => setCurrentPage(page)} currentPage={currentPage} />
      <div className="flex-1">
        <Header />
        <main>{renderContent()}</main> {/* ✅ 여백 제거 */}
      </div>
    </div>
  );
}

export default App;
