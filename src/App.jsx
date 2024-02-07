import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignUpModal from './components/SignUpModal';
import SigninModal from './components/SigninModal';
import Private from './pages/Private/Private';
import PrivateHome from './pages/Private/PrivateHome/user/PrivateHome';
import Menu from './pages/Private/PrivateHome/user/MenuForUser';
import Contact from './pages/Private/PrivateHome/user/Contact';
import Commande from './pages/Private/PrivateHome/user/Commande';
import Navbar from './components/Navbar';
import AdminHome from './pages/Private/PrivateHome/admin/AdminHome';
import Loader from '../src/components/Loader';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStartLoading = () => setLoading(true);
    const handleFinishLoading = () => setLoading(false);
    window.addEventListener('beforeunload', handleStartLoading);
    window.addEventListener('unload', handleFinishLoading);

    return () => {
      window.removeEventListener('beforeunload', handleStartLoading);
      window.removeEventListener('unload', handleFinishLoading);
    };
  }, []);

  return (
    <>
      <SignUpModal />
      <SigninModal />
      {location.pathname !== '/' && <Navbar />}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          {/* Pour les clients */}
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/private-home/menu" element={<Menu />} />
          <Route path="/private/private-home/commande" element={<Commande />} />
          <Route path="/private/private-home/contact" element={<Contact />} />

          {/* Pour les administrateurs */}
          <Route path="/private/admin-home" element={<AdminHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
