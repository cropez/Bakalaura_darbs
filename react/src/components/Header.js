import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    setShowMenu(false);
  };

  const handleButtonClick = (pageURL) => {
    navigate(pageURL);
  };

  const onLogout = () => {
    window.localStorage.removeItem("auth");
    console.log("logout");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="container">
        <div className="toolbar">
          <div className="logo" onClick={() => handleButtonClick("/dashboard")}>
            Saulkrasti
          </div>
          <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
            <button className="nav-menu-item" onClick={() => handleButtonClick("")}>
              Home
            </button>
            <button className="nav-menu-item" onClick={() => handleButtonClick("/Contact")}>
              Contacti
            </button>
            <button className="nav-menu-item" onClick={() => handleButtonClick("/Education")}>
              Education
            </button>
            <button className="nav-menu-item" onClick={() => handleButtonClick("/Education")}>
              Profile
            </button>
            <button className="nav-menu-item" onClick={onLogout}>
              Iziet
            </button>
          </nav>
          <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;