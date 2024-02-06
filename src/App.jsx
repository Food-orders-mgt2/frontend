import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignUpModal from './components/SignUpModal';
import SigninModal from './components/SigninModal';
import Private from './pages/Private/Private';
import PrivateHome from './pages/Private/PrivateHome/PrivateHome';
import Navbar from './components/Navbar';
import AdminHome from './pages/Private/PrivateHome/AdminHome'

function App() {
  const location = useLocation(); 

  return (
    <>
      <SignUpModal />
      <SigninModal />
      {location.pathname !== '/' &&  (
        <>
          <Navbar/>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/admin-home" element={<AdminHome/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
