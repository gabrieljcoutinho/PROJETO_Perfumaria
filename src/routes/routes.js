import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import AboutUs from '../pages/AboutUs';

const AppRoutes = () => {
  // Isso verifica se você está no computador (localhost) ou no GitHub
  const base = window.location.hostname === 'localhost' ? '/' : '/Perfumaria';

  return (
    <BrowserRouter basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Rota de segurança: se digitar algo errado, volta para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;