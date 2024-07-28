import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Houssin from './Houssin';
import Robert from './Robert';
import Derieux from './Derieux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/houssin" element={<Houssin/>} />
            <Route path="/robert" element={<Robert/>} />
            <Route path="/derieux" element={<Derieux/>} />
        </Routes>
    </Router>
)