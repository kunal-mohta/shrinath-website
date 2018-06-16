import React, { Component } from 'react';
import companyLogo from '../resources/shrinath-logo.png';

export default class HomePage extends React.Component {
  render () {
    return (
      <div id = 'homepage'>
        <div id = 'nav-toggle-circle'>
          
        </div>

        <div id = 'logo-wrap'>
          <img id = 'company-logo' src = {companyLogo}/>
        </div>
      </div>
    )
  }
}