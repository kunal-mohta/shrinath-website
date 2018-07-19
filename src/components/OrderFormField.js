import React from 'react';

export default class OrderFormField extends React.Component {
  render () {
    return (
      <div className = 'order-form-field'>
        <div className = { (this.props.isRequired) ? 'required label' : 'label' }>{this.props.label}: </div>
        <input type = 'text' name = {this.props.label} placeholder = {this.props.label}/>
      </div>
    )
  }
}