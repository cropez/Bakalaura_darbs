import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleButtonClick = (pageURL) => {
    navigate(pageURL);
  };

  const onLogout = () => {
    window.localStorage.removeItem('auth');
    console.log('logout');

    window.location.href = '/';
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <h1 className="header-title">Saulkrasti</h1>
        <div className="header-buttons">
          <button onClick={() => handleButtonClick('/dati')}>Home</button>
          <button onClick={() => handleButtonClick('/block')}>Contact</button>
          <button onClick={() => handleButtonClick('/profile')}>Profile</button>
          <button onClick={onLogout}>Iziet</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;