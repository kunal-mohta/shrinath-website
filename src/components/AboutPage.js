import React from 'react';

import { aboutItems } from '../constants.js';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});
  }

  render () {
    return (
      <div id = 'aboutpage'>
        <div id = 'back-icon' title = 'Go Home' onClick = { this.navigateHome }></div>
        <div id = 'about-container'>
          <div id = 'about-title'>About Us</div>

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