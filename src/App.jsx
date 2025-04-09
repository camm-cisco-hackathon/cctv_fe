import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"; 
import Home from "./pages/Home";
import GroupedLocationList from "./pages/GroupedLocationList";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import Sender from "./pages/Sender";

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
          path="/home"
          element={
            <WithLayout>
              <Home />
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
        <Route
          path="/sender"
          element={
            <WithLayout>
              <Sender />
            </WithLayout>
          }
        />
      </Routes>
    </Router>
  );
}

// Header + Sidebar 포함 레이아웃
const WithLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <main>{children}</main>
    </div>
  </div>
);

export default App;
