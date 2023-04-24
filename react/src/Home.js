import React from "react";
import Img from "./img/img_1.png"
import './Home.css'

function Home() {
  return (
    <><div>
      <h1>Welcome to Saulkrasti!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="alig">
    <div className="image">
        <img className="responsive-image" src={Img} alt="Error" />
    </div>
    <div className="image">
        <img className="responsive-image" src={Img} alt="Error" />
    </div>
    <div className="image">
        <img className="responsive-image" src={Img} alt="Error" />
    </div>
    </div></>
  );
};

export default Home;