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
    }
  }

  handleItemAddition() {
    this.props.addItemToCart(this.state.title);
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
              <p>Price: {this.state.price}</p>
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