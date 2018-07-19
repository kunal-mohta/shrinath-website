import React from 'react';

import OrderFormField from './OrderFormField';
import OrderFormItem from './OrderFormItem';

import { connect } from 'react-redux';

class OrderPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      itemCount: 2
    };
  }

  addFormItem = () => {
    this.setState({ itemCount: this.state.itemCount + 1 });
  }

  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});
  }

  render () {
    const items = [];

    for (var i = 0; i < this.state.itemCount; i++) {
      items.push(<OrderFormItem itemNo = { i + 1 } key = {i}/>);
    }

    return (
      <div id = 'orderpage' className = 'page'>
        <div id = 'back-icon' title = 'Go Home' onClick = { this.navigateHome }></div>

        <div id = 'order-title' className = 'page-title'>Order</div>
        <div id = 'order-form-wrapper'>
          <form id = 'order-form' action = 'https://formspree.io/shrinathsilkmills@gmail.com' method = 'POST'>
            <OrderFormField isRequired = {false} label = "Name" />
            <OrderFormField isRequired = {false} label = "GST No." />
            <OrderFormField isRequired = {false} label = "Broker" />
            <OrderFormField isRequired = {false} label = "Haste" />
            <OrderFormField isRequired = {false} label = "Goods despatched BY" />
            <OrderFormField isRequired = {false} label = "Goods despatched TO" />

            <div id = 'order-items-wrap'>
              {items}
            </div>

            <div id = 'order-add-item' onClick = { this.addFormItem } title = 'Add Item'><img src = {require('../resources/add.svg')} /></div>

            <input className = 'order-button' type = 'submit' value = 'Place Order' />
          </form>
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

export default connect(mapPropsToState)(OrderPage);