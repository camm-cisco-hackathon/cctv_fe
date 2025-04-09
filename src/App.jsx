import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LocationView from "./pages/LocationView";
import GroupedLocationList from "./pages/GroupedLocationList";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import AdminView from "./pages/AdminView";
import Sender from "./pages/Sender"; // test page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/location-view"
          element={
            <WithLayout>
              <LocationView />
            </WithLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <WithLayout>
              <Dashboard />
            </WithLayout>
          }
        />
        <Route
          path="/location"
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
          path="/admin"
          element={
            <WithLayout>
              <AdminView />
            </WithLayout>
          }
        />{" "}
        <Route
          path="/admin-view"
          element={
            <WithLayout>
              <LocationView />
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
