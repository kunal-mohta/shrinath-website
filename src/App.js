import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';
import { pageTransitionDuration } from './constants';

import reducer from './reducer.js';

class App extends Component {
  componentDidUpdate () {
    let prevPage = this.props.prevPageIndex;
    let activePage = this.props.activePageIndex;

    let pages = [
      document.getElementById('homepage'),
      document.getElementById('aboutpage'),
      document.getElementById('productpage'),
      document.getElementById('contactpage')
    ]

    pages[prevPage].style.opacity = 0;
    
    setTimeout(
      function () {
        pages[prevPage].style.display = 'none';
        pages[activePage].style.display = 'block';
        pages[activePage].style.opacity = 1;
      },
      pageTransitionDuration
    )
  }

  render () {
    return (
        <div className = 'App'>
          <HomePage />
          <AboutPage />
          <ProductPage />
          <ContactPage />
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    prevPageIndex: state.prevPageIndex,
    activePageIndex: state.activePageIndex
  }
}

export default connect(mapStateToProps)(App);
