import React from "react";
import Profile from "./Profile";
import Notification from "./Notification";
function Header() {
  return (
    <header>
      <h1> App</h1>
      <div className="tools">
        <Notification />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
