import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      price: this.props.price,
      description: this.props.description,
      itemsUntilDiscount: this.props.itemsUntilDiscount,
      discount: this.props.discount,

      timesItemIsInCart: 0,
      isDiscounted: false,
      priceAfterDiscount: this.props.price - parseInt((this.props.discount / 100) * this.props.price)
    }
  }

  updateState() {
    this.setState({ timesItemIsInCart: this.state.timesItemIsInCart + 1 });

    if (this.state.itemsUntilDiscount > 0)
      this.setState({ itemsUntilDiscount: this.state.itemsUntilDiscount - 1 });

    if (this.state.itemsUntilDiscount === 1)
      this.setState({ isDiscounted: true });
  }

  handleItemAddition() {
    this.updateState();

    this.props.addItemToCart(this.state.title);
    this.props.calculateItemsQuantity();
    this.props.calculateTotalPrices(this.state.price, this.state.priceAfterDiscount, this.state.isDiscounted)
  }

  renderPriceAndDiscountMessage() {
    if (this.state.isDiscounted) {
      return (
        <div>
          <p>Discounted Price : from {this.state.price}$ to {this.state.priceAfterDiscount}$</p>
          <p>You are getting {this.state.discount}% for every item you buy! Awesome!</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Price: {this.state.price} $</p>
          <p>
            Buy {this.state.itemsUntilDiscount} more and GET {this.state.discount}% DISCOUNT for
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
            <img src={this.state.image} alt="Something went wrong." />
            <div className="caption">
              <h4>{this.state.title}</h4>
              <p>{this.state.description}</p>
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