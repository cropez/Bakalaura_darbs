import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Header from "./Header"
import Home from "./Home";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
<Router>
      <div>
        <Header/>
        {/* Your navigation, header, or any other components can go here */}
        <Routes>
          <Route path="/" element={<Home />} index />
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
