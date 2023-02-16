import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Trends from "./components/Trends";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Notifications from "./components/pages/Notifications";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Bookmarks from "./components/pages/Bookmarks";
import Lists from "./components/pages/Lists";
import CreatingNewList from "./components/CreatingNewList";
import NextPageCNL from "./components/NextPageCNL";
import ExploreRight from "./components/ExploreRight";
import Messages from "./components/pages/Messages";
import Settings from "./components/Settings";

export default function App() {
  const [arr, setArr] = useState([]);
  const receivedData = (data) => {
    setArr(data);
  };
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  return (
    <Router>
      <div className="components">
        {screenHeight >= 500 && screenWidth >= 500 && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          {/* DEFAULT PAGE NAVIGATION */}
          <Route
            path="home"
            element={
              <>
                <Home />
                {screenWidth >= 1000 && <Trends />}
              </>
            }
          />
          <Route
            path="explore"
            element={
              <>
                <Explore />
                {screenWidth >= 1000 && <ExploreRight />}
              </>
            }
          />
          <Route
            path="notifications"
            element={
              <>
                <Notifications />
                {screenWidth >= 1000 && <Trends />}
              </>
            }
          />
          <Route
            path="messages"
            element={
              <>
                <Messages />
              </>
            }
          />
          <Route
            path="bookmarks"
            element={
              <>
                <Bookmarks />
                {screenWidth >= 1000 && <Trends />}
              </>
            }
          />
          <Route
            path="lists"
            element={
              <>
                <Lists />
                {screenWidth >= 1000 && <Trends />}
              </>
            }
          />
          <Route
            path="lists/create"
            element={
              <>
                {screenWidth >= 1000 && <Lists ogData={arr} />}
                <CreatingNewList myFunc={receivedData} ogData={arr} />
                {screenWidth >= 1000 && <Trends />}
              </>
            }
          />
          <Route
            path="lists/members"
            element={
              <>
                <Lists />
                <NextPageCNL />
                <Trends />
              </>
            }
          />
          <Route
            path="settings/account"
            element={
              <>
                <Settings />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
