import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemListComponent extends Component {
  renderItemsIntoAList(items) {
    return items.map((item, index) => {
      if (item.title)
        return (
          <li key={index} className="list-group-item">
            <p className="list-group-item-text">
              {item.title}
            </p>
          </li>
        )
    })
  }

  render() {
    return (
      <div className="component-cart-list">
        <ul className="list-group">
          <h3>Items in the Basket: {this.props.itemCounter}</h3>
          <h4 className="price">Price: ${this.props.totalPrice}</h4>
          <h4 className="discounted-price">Discounted Price: ${this.props.totalDiscountedPrice}</h4>
          <h5>You got discount of ${this.props.totalPrice - this.props.totalDiscountedPrice}</h5>
          {this.renderItemsIntoAList(this.props.itemsInsideCart)}
        </ul>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    itemsInsideCart: state.itemsInsideCart,
    itemCounter: state.itemCounter,
    summurizedPrice: state.totalPrices.summurizedPrice,
    summurizedFinalPrice: state.totalPrices.summurizedFinalPrice
  }
}
export default connect(mapsStateToProps)(CartComponent)