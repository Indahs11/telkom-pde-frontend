import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//call pages
// pages UTAMA
import Beranda from "./pages/Beranda";
import LandingPage from "./pages/LandingPage";
import Registrasi from "./pages/Registrasi";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";

// pages INNER BERANDA
import Blog from "./pages/Beranda/Blog";
import ForumDiskusi from "./pages/Beranda/ForumDiskusi";
import Marketplace from "./pages/Beranda/Marketplace";
import Pengajuan from "./pages/Beranda/Pengajuan";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/registrasi" element={<Registrasi />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/forumdiskusi" element={<ForumDiskusi />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/pengajuan" element={<Pengajuan />} />
    </Routes>
  );
}
