import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Pages from "../pages/Pages";
import Destinations from "../pages/Destinations";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/categories" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
}

export default Routers
