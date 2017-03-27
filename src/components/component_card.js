import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CardComponent extends Component {
  handleItemAddition() {
    let props = this.props;
    this.props.updateCard(props.id, props.price, props.discount, props.itemsUntilDiscount);
    this.props.addItemToCart(props.title);
    this.props.calculateTotalPrices(props.price, props.priceAfterDiscount, props.isDiscounted)
    this.props.calculateItemsQuantity();
  }

  renderPriceAndDiscountMessage() {
    let props = this.props;
    if (props.isDiscounted) {
      return (
        <div>
          <p>Discounted Price : from {props.price}$ to {props.priceAfterDiscount}$</p>
          <p>You are getting {props.discount}% for every item you buy! Awesome!</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Price: {props.price} $</p>
          <p>
            Buy {props.itemsUntilDiscount} more and GET {props.discount}% DISCOUNT for
            the next items of this kind!
          </p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="component-card">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail fixed-height-thumbnail">
            <img src={this.props.image} alt="Something went wrong." />
            <div className="caption">
              <h4>{this.props.title}</h4>
              <p>{this.props.description}</p>
              {this.renderPriceAndDiscountMessage()}
              <button className="btn btn-success bottom-left"
                      onClick={this.handleItemAddition.bind(this)}>
                Add robot to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(CardComponent)