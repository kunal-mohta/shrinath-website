import React from 'react';

import { aboutItems } from '../constants.js';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});

    let aboutListItems = document.getElementsByClassName('about-list-items');
    let i;
    for (i = 0; i < aboutItems.length; i++) {
      aboutListItems[i].style.opacity = 0;
    }
  }

  triggerPage = () => {
    setTimeout(function () {
      let aboutListItems = document.getElementsByClassName('about-list-items');
      let i, j;
      for (i = 0, j = 0.1; i < aboutListItems.length; i++, j += 0.1) {
        aboutListItems[i].style.transition = 'opacity 0.3s ' + j + 's linear';
        aboutListItems[i].style.opacity = 1;
      }
    }, 500);
  }

  componentDidUpdate = () => {
    if (this.props.activePageIndex === 1) {
      this.triggerPage();
    }
  }

  render () {
    return (
      <div id = 'aboutpage' className = 'page'>
        <div id = 'back-icon' title = 'Go Home' onClick = { this.navigateHome }></div>
        <div id = 'about-container'>
          <div id = 'about-title' className = 'page-title'>About Us</div>

          <div id = 'about-list'>
            {
              aboutItems.map(
                (item, index) => <div className = 'about-list-items' key = {index} style = { {borderColor: item.color} }> { item.text } </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapPropsToState (state) {
  return {
    activePageIndex: state.activePageIndex,
    prevPageIndex: state.prevPageIndex
  }
}

export default connect(mapPropsToState)(AboutPage);