import React from 'react';

export default class OrderFormField extends React.Component {
  render () {
    return (
      <div className = 'order-form-item'>
        <div className = 'srno'>Item { this.props.itemNo }</div>
        <div className = 'item-detail-wrap'>
          <input className = 'description' type = 'text' name = {`Item ${this.props.itemNo} Description`} placeholder = 'Description'/>
          <input className = 'pcs' type = 'text' name = {`Item ${this.props.itemNo} Pieces`} placeholder = 'Pieces'/>
        </div>
      </div>
    )
  }
}