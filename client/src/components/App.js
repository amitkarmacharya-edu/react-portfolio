import React, { createRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Home />
            <Footer />
            <ScrollToTop scrollBelow={60} />
        </Router>
    );
}

export default App;
