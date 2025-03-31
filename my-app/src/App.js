import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetScreen from "./Screens/closetscreen.js";
import MixAndMatchScreen from "./Screens/mixandmatchscreen.js";
import SwipingScreen from "./Screens/swipescreen.js";
import LandingScreen from "./Screens/landingscreen.js";
import CreateAccountScreen from "./Screens/createaccountscreen.js";
import FilterScreen from "./Screens/filterscreen.js";
import LookbookScreen from "./Screens/lookbookscreen.js";
import OutfitScreen from "./Screens/outfitscreen.js";



import { ClothingProvider } from "./Screens/clothingprovider";

function App() {
  return (
    <ClothingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SwipingScreen />} />
          <Route path="/closet" element={<ClosetScreen />} />
          <Route path="/mix-and-match" element={<MixAndMatchScreen/>} />
          <Route path="/lookbook" element={<LookbookScreen/>} />
        </Routes>
      </Router>
    </ClothingProvider>
  );
}

export default App;



// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<SwipeScreen />} />
//           <Route path="/closet" element={<ClosetScreen />} />
//           <Route path="/mix-and-match" element={<MixAndMatchScreen />} />
//           <Route path="/landing" element={<LandingScreen />} />
//           <Route path="/create-account" element={<LandingScreen />} />
//           <Route path="/filter" element={<FilterScreen />} />
//           <Route path="/lookbook" element={<LookbookScreen />} />
//           <Route path="/outfit" element={<OutfitScreen />} />
//         </Routes>
//       </div>
//     </Router> 
//   );
// }

// export default App;
