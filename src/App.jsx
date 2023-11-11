import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarContextProvider from "./store/car-context";
import Navigation from "./components/LandingPage/Navbar";
import Footer from "./components/LandingPage/Footer";

import "./App.css";

function App() {
  return (
    <>
      <CarContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/cars" element={<CarPage/>} /> */}
          </Routes>
          <Footer />
        </Router>
      </CarContextProvider>
    </>
  );
}

export default App;
