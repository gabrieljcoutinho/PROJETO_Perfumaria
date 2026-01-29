import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Loja from '../pages/Loja';
import Sobrenos from '../pages/SobreNos';
import Servicos from '../pages/Services';
import Blog from '../pages/Blog';

const AppRoutes = () => {
  return (
    /* O basename precisa ser EXATAMENTE o nome do seu repositório no GitHub */
    <BrowserRouter basename="/Perfumaria">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Descomente as linhas abaixo conforme for criando as páginas */}
        {/* <Route path="/loja" element={<Loja />} /> */}
        {/* <Route path="/sobrenos" element={<Sobrenos />} /> */}
        {/* <Route path="/servicos" element={<Servicos />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}

        {/* Rota de segurança: se digitar algo errado, volta para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;