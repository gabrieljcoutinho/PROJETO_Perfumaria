import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import AboutUs from '../pages/AboutUs';
import Blog from '../pages/Blog';

import ScrollToTop from '../utils/ScrollToTop';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />

        {/* Se digitar rota errada volta para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;