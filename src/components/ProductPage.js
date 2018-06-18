import React from 'react';

import { productItems } from '../constants.js';

export default class ProductPage extends React.Component {
  render () {
    return (
      <div id = 'productpage'>
        <div id = 'products-title'>Our Product</div>
        <div id = 'products-wrapper'>
          <div id = 'products'>

            <div className = 'product'>
              <div className = 'product-img'></div>
              <div className = 'product-info'>
                <div className = 'product-title'>Delux Rayon</div>
                <div className = 'product-subtitle'>D.No. - 27</div>
              </div>
            </div>
            {
              productItems.map(
                (item, index) => (
                  <div className = 'product'>
                    <div className = 'product-img'></div>
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