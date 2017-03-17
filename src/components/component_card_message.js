import React, { Component } from 'react';

export default class CardMessage extends Component {
  render() {
    if (this.props.isDiscounted) {
      return (
        <div>
          <p>Discounted Price : from {this.props.price}$ to {this.props.priceAfterDiscount}$</p>
          <p>You are getting {this.props.discount}% for every item you buy! Awesome!</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Price: {this.props.price} $</p>
          <p>
            Buy {this.props.itemsUntilDiscount} more and GET {this.props.discount}% DISCOUNT for
            the next items of this kind!
          </p>
        </div>
      )
    }
  }
}
