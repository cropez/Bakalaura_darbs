import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    navigate(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/home"
    },
    {
      menuTitle: "Contacti",
      pageURL: ""
    },
    {
      menuTitle: "Profile",
      pageURL: ""
    },
    {
      menuTitle: "Iziet",
      pageURL: ""
    },
  ];

  const onLogout = () => {
    window.localStorage.removeItem('auth')
    console.log('logout')

    window.location.href = '/'
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="account-icon">
            <i className="fas fa-user-circle"></i>
          </div>
          <a className="logo" href="/dashboard">Saulkrasti</a>
          <div className="menu-btn" onClick={handleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          {open && (
            <div className="mobile-menu">
              {menuItems.map((menuItem, i) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <a key={i} className="menu-item" onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </a>
                );
              })}
            </div>
          )}
          <div className="menu">
            <button className="menu-item" onClick={() => handleButtonClick("")}>Home</button>
            <button className="menu-item" onClick={() => handleButtonClick("")}>Contacti</button>
            <button className="menu-item" onClick={() => handleButtonClick("")}>Profile</button>
            <button className="menu-item" onClick={onLogout}>Iziet</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;