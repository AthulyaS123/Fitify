import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetScreen from "./Screens/closetscreen.js";
import MixAndMatchScreen from "./Screens/mixandmatchscreen.js";
import SwipeScreen from "./Screens/swipescreen.js";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<SwipeScreen />} /> */}
          {/* <Route path="/closet" element={<ClosetScreen />} /> */}
          <Route path="/mix-and-match" element={<MixAndMatchScreen />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
