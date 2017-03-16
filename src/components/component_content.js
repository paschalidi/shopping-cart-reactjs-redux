import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './component_card';
import CartList from './component_cart_list';

class ContentComponent extends Component {
  renderCards(items) {
    return items.map((item, index) => {
      return <Card key={index}
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   itemsUntilDiscount={item.itemsUntilDiscount}
                   discount={item.discount}
                   description={item.description} />
    })
  }

  render() {
    return (
      <div className="component-content">
        <div className="row">
          <div className="col-sm-9 padding-left-none">
            {this.renderCards(this.props.items)}
          </div>

          <div className="col-sm-3">
            <CartList />
          </div>
        </div>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapsStateToProps)(ContentComponent)
