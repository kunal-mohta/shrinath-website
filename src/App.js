import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';

class App extends Component {
  render () {
    return (
      <div class = 'App'>
        <Navbar />

        {/* <HomePage /> */}
        {/* <AboutPage /> */}
        {/* <ProductPage /> */}
        {/* <ContactPage /> */}
      </div>
    );
  }
}

export default App;
