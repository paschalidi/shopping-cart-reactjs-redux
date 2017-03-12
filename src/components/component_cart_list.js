import React, { Component } from 'react';
import { connect } from 'react-redux'

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
      <ul className="component-items-list list-group">
        {/*todo add state here*/}
        <h3>Items in the Basket: </h3>
        <h4>Price: $</h4>
        {this.renderItemsIntoAList(this.props.itemsInsideCart)}
      </ul>
    );
  }
}

function mapsStateToProps(state) {
  return {
    itemsInsideCart: state.itemsInsideCart,
  }
}
export default connect(mapsStateToProps)(ItemListComponent)