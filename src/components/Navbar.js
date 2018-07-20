import React from 'react';
import { connect } from 'react-redux';
import { navItems } from '../constants';

import openMenuButton from '../resources/menu-button.svg';
import closeMenuButton from '../resources/close-button.svg';

class Navbar extends React.Component {
  toggleNav = () => {
    this.props.dispatch({ type: 'TOGGLE_NAV' });
  }

  componentDidUpdate () {
    let mobileNavItems = document.getElementsByClassName('mobile-nav-items');
    if (this.props.isNavOpen) {
      setTimeout( function () {
        mobileNavItems[0].style.marginLeft = '0vw';
        mobileNavItems[0].style.opacity = 1;
        let i, j;
        for (i = 1, j = 0.1; i < mobileNavItems.length; i++, j += 0.1) {
          mobileNavItems[i].style.transition = 'margin-left 0.15s '+ j +'s cubic-bezier(0,0,.44,1.58), opacity 0.1s '+ j +'s cubic-bezier(0,0,.44,1.58)';
          mobileNavItems[i].style.marginLeft = '0vw';
          mobileNavItems[i].style.opacity = 1;
        }
      }, 100);
    }
    else {
      let i;
      for (i = 0; i < mobileNavItems.length; i++) {
        mobileNavItems[i].style.marginLeft = '-10vw';
        mobileNavItems[i].style.opacity = 0;
      }
    }
  }

  navigateTo (index) {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: index + 1 });
  }

  mobileNavigateTo (index) {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: index + 1});
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
              (item, index) => <div className = 'nav-items' key = {index} onClick = { this.navigateTo.bind(this, index) }>{ item.title }</div>
            )
          }
        </div>
        
        <img alt = 'Menu Button' onClick = { this.toggleNav } id = 'menu-button' src = { menuButton } />
        <div id = 'mobile-nav' className = { navClass }>
          <div id = 'mobile-nav-list'>
            {
              navItems.map(
                (item, index) => <div className = 'mobile-nav-items' key = {index} onClick = { this.mobileNavigateTo.bind(this, index) }>{ item.title }</div>
              )
            }
          </div>
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