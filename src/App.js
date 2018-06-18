import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';

import reducer from './reducer.js';

const store = createStore(reducer);

class App extends Component {
  render () {
    return (
      <div className = 'App'>
        <Provider store = { store }>
          {/* <HomePage /> */}
          {/* <AboutPage /> */}
          {/* <ProductPage /> */}
          <ContactPage />
        </Provider>
      </div>
    );
  }
}

export default App;
