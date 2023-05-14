import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import CustomerPage from './pages/CustomerPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/customer" element={<CustomerPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
