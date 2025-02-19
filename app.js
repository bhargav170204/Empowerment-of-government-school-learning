import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
