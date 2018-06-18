import React from 'react';

import { aboutItems } from '../constants.js';

export default class HomePage extends React.Component {
  render () {
    return (
      <div id = 'aboutpage'>
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