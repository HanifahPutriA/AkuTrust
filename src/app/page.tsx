"use client"

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { NotFoundPage } from '../components/pages/notFoundPages/notFoundPages';
import { LoginPage } from '../components/pages/loginPage/loginPage';
import { RegisterPage } from '../components/pages/registerPages/registerPage';
import { LandingPage } from '@/components/pages/landingPages/landingPage';
import HomePage from '@/components/pages/homePage/homePage';
import Navbar from '@/components/navbar';
import { FooterSection } from '@/components/pages/landingPages/footerSection';

const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/homepage'];
  const hideFooterPaths = ['/login', '/register', '/homepage'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <FooterSection />}
    </>
  );
};

export default function Home() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}