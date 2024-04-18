import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyled";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;
