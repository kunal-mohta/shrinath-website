import React from 'react';
import { connect } from 'react-redux';
import { navItems } from '../constants';

import openMenuButton from '../resources/menu-button.svg';
import closeMenuButton from '../resources/close-button.svg';

class Navbar extends React.Component {
  toggleNav = () => {
    this.props.dispatch({ type: 'TOGGLE_NAV' });
  }
  
  render () {

    let navClass, menuButton;
    if (this.props.isNavOpen) {
      navClass = 'nav-open';
      menuButton = closeMenuButton;
    }
    else {
      navClass = 'nav-close';
      menuButton = openMenuButton;
    }

    return (
      <div id = 'nav'>
        <div id = 'desktop-nav'>
          {
            navItems.map(
              (item, index) => <div className = 'nav-items' key = {index}>{ item.title }</div>
            )
          }
        </div>
        
        <img onClick = { this.toggleNav } id = 'menu-button' src = { menuButton } />
        <div id = 'mobile-nav' className = { navClass }>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isNavOpen: state.isNavOpen
  };
}

export default connect(mapStateToProps)(Navbar);