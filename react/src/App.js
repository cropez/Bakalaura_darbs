import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Home";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
<Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/Dashboard" element={<Dashboard/>} index />
          <Route path="/Contact" element={<Contact/>} index />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
