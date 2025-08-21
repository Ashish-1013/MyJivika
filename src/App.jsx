import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import AuthPage from './components/Login & SignUp/AuthPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import JobPage from './components/JobPage/JobPage.jsx';
import GlobalStyle from './components/GlobalCss/GlobalStyles.jsx';



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
      {/* <GlobalStyle /> */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/jobs" element={<JobPage />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
