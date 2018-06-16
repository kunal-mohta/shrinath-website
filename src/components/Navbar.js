import React, { Component } from 'react';
import { navItems } from '../constants';

export default class Navbar extends React.Component {
  render () {
    return (
      <div id = 'desktop-nav'>
        {
          navItems.map(
            (item, index) => <div>{ item.title }</div>
          )
        }
      </div>
    )
  }
}