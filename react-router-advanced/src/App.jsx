// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/blog/:postId" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Nested route */}
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
