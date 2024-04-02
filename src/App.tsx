import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Merchandise from "./components/Merchandise";
import Stories from "./components/Stories";
import Explore from "./components/Explore";
import Groups from "./components/Groups";
import Rixi from "./components/Rixi";
import "./App.css";
import Friends from "./components/Friends";
import Board from "./components/Board";
import Cal from "./components/calendar";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [displayMerchandise, setDisplayMerchandise] = useState(false);
  const [displayStories, setDisplayStories] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [explore, setExplore] = useState(true);
  const [groups, setGroups] = useState(false);
  const [rixi, setRixi] = useState(false);
  const [friends, setFriends] = useState(false);
  const [board, setBoard] = useState(false);
  const [calendar, setCalendar] = useState(false);

  const handleUserProfileClick = () => {
    if (userData) {
      setShowLogin(false);
      setProfileLoaded(true);
      setDisplayMerchandise(false);
      setDisplayStories(false);
      setExplore(false);
      setGroups(false);
      setRixi(false);
      setFriends(false);
      setBoard(false);
      setCalendar(false);
    } else {
      setShowLogin(!showLogin);
      setDisplayMerchandise(false);
      setDisplayStories(false);
      setExplore(false);
      setGroups(false);
      setRixi(false);
      setFriends(false);
      setBoard(false);
      setCalendar(false);
    }
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = (data: any) => {
    setUserData(data);
    setShowLogin(false);
    setProfileLoaded(true);
    setDisplayMerchandise(false);
    setDisplayStories(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setBoard(false);
    setFriends(false);
    setCalendar(false);
  };

  const handleMerchandiseClick = () => {
    setShowLogin(false);
    setDisplayMerchandise(true);
    setProfileLoaded(false);
    setDisplayStories(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setFriends(false);
    setBoard(false);
    setCalendar(false);
  };

  const handleStoriesClick = () => {
    setShowLogin(false);
    setDisplayStories(true);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setFriends(false);
    setBoard(false);
    setCalendar(false);
  };
  const handleExploreClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(true);
    setGroups(false);
    setRixi(false);
    setFriends(false);
    setBoard(false);
    setCalendar(false);
  };
  const handleGroupsClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(true);
    setRixi(false);
    setFriends(false);
    setBoard(false);
    setCalendar(false);
  };
  const handleRixiClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(false);
    setRixi(true);
    setBoard(false);
    setFriends(false);
    setCalendar(false);
  };
  const handleFriendsClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setBoard(false);
    setFriends(true);
    setCalendar(false);
  };
  const handleBoardClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setBoard(true);
    setFriends(false);
    setCalendar(false);
  };
  const handleCalendarClick = () => {
    setShowLogin(false);
    setDisplayStories(false);
    setDisplayMerchandise(false);
    setProfileLoaded(false);
    setExplore(false);
    setGroups(false);
    setRixi(false);
    setBoard(false);
    setFriends(false);
    setCalendar(true);
  };
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidebar
          onUserProfileClick={handleUserProfileClick}
          onMerchandiseClick={handleMerchandiseClick}
          onExploreClick={handleExploreClick}
          onStoriesClick={handleStoriesClick}
          onGroupsClick={handleGroupsClick}
          onRixiClick={handleRixiClick}
          onFriendsClick={handleFriendsClick}
          onBoardClick={handleBoardClick}
          onCalendarClick={handleCalendarClick}
        />
        <div className="main-content">
          {userData &&
          profileLoaded &&
          !displayMerchandise &&
          !displayStories ? (
            <Profile userData={userData} />
          ) : (
            showLogin && (
              <Login
                onClose={handleCloseLogin}
                onLoginSuccess={handleLoginSuccess}
              />
            )
          )}
          {displayMerchandise && <Merchandise />}
          {displayStories && <Stories userData={userData} />}{" "}
          {/* Render Explore component */}
          {explore && <Explore />}
          {groups && <Groups />}
          {rixi && <Rixi />}
          {friends && <Friends />}
          {board && <Board />}
          {calendar && <Cal />}
        </div>
      </div>
    </div>
  );
}

export default App;
