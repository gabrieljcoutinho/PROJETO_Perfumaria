// routes.js
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import Home from '../pages/Home';
import Loja from '../pages/Loja';
import Sobrenos from '../pages/SobreNos';

const AppRoutes = () => { // Mudamos o nome aqui
  return (
    <BrowserRouter>
      <Header />
      <Routes> {/* Este Routes é o da biblioteca */}
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes; // Exporta com o novo nome