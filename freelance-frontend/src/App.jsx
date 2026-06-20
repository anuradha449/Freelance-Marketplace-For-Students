import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import AllBids from "./pages/AllBids";
//import MyBids from "./pages/MyBids"; // ✅ IMPORT THE NEW PAGE
import AddProject from "./pages/AddProject";
import Bid from "./pages/Bid";
import Review from "./pages/Review";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setIsLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bids" element={<AllBids />} />

        {/* ✅ NEW ROUTE FOR MY BIDS (Protected) */}

        <Route path="/addproject" element={isLoggedIn ? <AddProject /> : <Navigate to="/login" />} />
        <Route path="/bid" element={isLoggedIn ? <Bid /> : <Navigate to="/login" />} />
        <Route path="/review" element={isLoggedIn ? <Review /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;