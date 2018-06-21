import React from 'react';

import { productItems, productCount } from '../constants.js';
import { connect } from 'react-redux';

import downloadIcon from '../resources/download.svg';

class ProductPage extends React.Component {
  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});
  }

  componentDidMount () {
    if(parseInt(document.documentElement.clientWidth) < 600) {
      let productsContainer = document.getElementById('products-wrapper');

      function scrollAnim ({ timing, draw, duration }) {

        let start = performance.now();

        requestAnimationFrame(function scrollAnim (time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;

          let progress = timing(timeFraction);

          draw(progress);

          if (timeFraction < 1) {
            requestAnimationFrame(scrollAnim)
          }
        });
      }

      
      // productsContainer.addEventListener('click', function () {
      //   let duration = 200;
      //   scrollAnim({
      //     duration: duration,
      //     timing (timeFraction) {
      //       return timeFraction
      //     },
      //     draw (progress) {
      //       console.log(counter);
      //       productsContainer.scrollTop = (482 * counter + progress * 482);
      //     }
      //   });
      //   setTimeout(function () { counter++ }, duration + 50);
      // });

      let counter = 0, duration = 200;
      let y1;
      productsContainer.addEventListener("touchstart", function(e){
          y1 = e.changedTouches[0].pageY;
      }, false);

      productsContainer.addEventListener("touchmove", function (e) {
        e.preventDefault();
      });

      productsContainer.addEventListener("touchend", function(e){
          let delta = e.changedTouches[0].pageY - y1;
          console.log(counter);
          //down
          if(delta > 0 && counter > 0) {
            scrollAnim({
              duration: duration,
              timing (timeFraction) {
                return timeFraction
              },
              draw (progress) {
                console.log(counter);
                productsContainer.scrollTop = (482 * counter - progress * 482);
              }
            });
            setTimeout(function () { counter-- }, duration + 50);
          }
      
          //up
          else if(delta < 0 && counter < productCount-1) {
            scrollAnim({
              duration: duration,
              timing (timeFraction) {
                return timeFraction
              },
              draw (progress) {
                console.log(counter);
                productsContainer.scrollTop = (482 * counter + progress * 482);
              }
            });
            setTimeout(function () { counter++ }, duration + 50);
          }
      });
    }
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
                    <div className = 'product-img-wrap'>
                      <div className = 'product-img' style = {{ background: `url(${item.img})`, backgroundSize: 'cover' }}></div>
                      <div className = 'product-img-hover'>
                        <a href = {item.img} download>
                          <img alt = 'Download Image' src = { downloadIcon } title = 'Download Image'/>
                        </a>
                      </div>
                    </div>
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