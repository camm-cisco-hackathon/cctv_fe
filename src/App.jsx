import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import GroupedLocationList from './pages/GroupedLocationList';
import IssuePage from './pages/IssuePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <WithLayout>
              <Dashboard />
            </WithLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <WithLayout>
              <GroupedLocationList />
            </WithLayout>
          }
        />
        <Route
          path="/issue"
          element={
            <WithLayout>
              <IssuePage />
            </WithLayout>
          }
        />
      </Routes>
    </Router>
  );
}

// Header + Sidebar 있는 페이지용 레이아웃
const WithLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

export default App;
