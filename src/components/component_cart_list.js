import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartComponent extends Component {
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

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title ">
              Items in the Basket:
              <div className="float-right">{this.props.itemCounter}</div>
            </h3>
          </div>
          <div className="panel-body">
            <h5 className="price">
              Original Price
              <div className="float-right">${this.props.summurizedPrices.originalPrice} </div>
            </h5>

            <h5 className="discount">
              Discount
              <div className="float-right">
                - ${this.props.summurizedPrices.originalPrice - this.props.summurizedPrices.finalPrice}
              </div>
            </h5>
            <hr />
            <h4 className="final-price">
              Final Price
              <div className="float-right">${this.props.summurizedPrices.finalPrice}</div>
            </h4>
          </div>
        </div>

        <ul className="list-group">
          {this.renderItemsIntoAList(this.props.itemsInsideCart)}
        </ul>

      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    itemsInsideCart:  state.itemsInsideCart,
    itemCounter:      state.itemCounter,
    summurizedPrices:  state.summurizedPrices,
  }
}
export default connect(mapsStateToProps)(CartComponent)