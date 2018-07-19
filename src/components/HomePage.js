import React from 'react';
import { connect } from 'react-redux';

import companyLogo from '../resources/shrinath-logo.png';
import hindiByline from '../resources/byline.png';
import Navbar from './Navbar';

class HomePage extends React.Component {  
  render () {

    let mobileNavClass;
    if (this.props.isNavOpen) mobileNavClass = 'open';
    else mobileNavClass = 'close';

    return (
      <div id = 'homepage' className = 'page'>
        <Navbar />

        <div id = 'nav-toggle-circle' className = {mobileNavClass}>
        </div>

        <div id = 'logo-wrap'>
          <img alt = 'Company Logo' id = 'company-logo' src = {companyLogo} />
          <img alt = 'Byline' id = 'hindi-byline' src = {hindiByline} />
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

export default connect(mapStateToProps)(HomePage);