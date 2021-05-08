import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Home />
            <Footer/>
        </Router>
    );
}

export default App;
