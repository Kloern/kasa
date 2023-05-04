import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../utils/index.module.css'
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';

export default function MyRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}