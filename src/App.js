import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenuPage from './pages/MainMenuPage'
import { Route, Routes, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Intropage from './pages/Intropage';

// const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return (
        <Routes>
            <Route path="/atmos/" element={<Intropage />} />
            <Route path="/atmos/:musicAuthCode" element={<Intropage />} />
            <Route path="/atmos/menu" element={<MainMenuPage />} />
            <Route path="/atmos/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default App;
