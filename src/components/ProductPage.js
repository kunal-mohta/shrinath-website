import React from 'react';

import { productItems } from '../constants.js';
import { connect } from 'react-redux';

class ProductPage extends React.Component {
  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});
  }

  render () {
    return (
      <div id = 'productpage'>
        <div id = 'back-icon' title = 'Go Home' onClick = { this.navigateHome }></div>

        <div id = 'products-title'>Our Product</div>
        <div id = 'products-wrapper'>
          <div id = 'products'>
            {
              productItems.map(
                (item, index) => (
                  <div className = 'product' key = {index}>
                    <div className = 'product-img' style = {{ background: `url(${item.img})`, backgroundSize: 'cover' }}></div>
                    <div className = 'product-info'>
                      <div className = 'product-title'>{ item.title }</div>
                      <div className = 'product-subtitle'>{ item.subtitle }</div>
                    </div>
                  </div>
                )
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

export default connect(mapPropsToState)(ProductPage);