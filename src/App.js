import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenuPage from './pages/MainMenuPage'
import { Route, Routes, } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Intropage from './pages/Intropage';

// const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intropage />} />
            {/* <Route path="/:musicAuthCode" element={<Intropage />} /> */}
            <Route path="/menu" element={<MainMenuPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default App;
