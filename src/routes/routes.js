import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Blog from '../pages/Blog.jsx';

import ScrollToTop from "../../src/utils/ScrollToTop.js"

const AppRoutes = () => {
  // Isso verifica se você está no computador (localhost) ou no GitHub
  const base = window.location.hostname === 'localhost' ? '/' : '/Perfumaria';

  return (
    <BrowserRouter basename={base}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />

        {/* Rota de segurança: se digitar algo errado, volta para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;