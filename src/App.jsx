import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import LoginSignup from './components/Login & SignUp/Login.jsx';
import Footer from './components/Footer/Footer.jsx';



// function App() {

//   return (
//     <>
//     <Navbar />
//     <Home />
//     <Footer />
//     </>
//   )
// }

// export default App


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
