import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarContextProvider from "./store/car-context";
import Navigation from "./components/LandingPages/Navbar.jsx";
import Footer from "./components/LandingPages/Footer.jsx";
import CarPage from "./pages/CarPage.jsx";

import "./App.css";

function App() {
  return (
    <>
      <CarContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<CarPage />} />
          </Routes>
          <Footer />
        </Router>
      </CarContextProvider>
    </>
  );
}

export default App;
