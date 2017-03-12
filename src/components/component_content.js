import React, { Component } from 'react';
import { connect } from 'react-redux'

class ContentComponent extends Component {
  renderCards(items) {
    return items.map((item, index) => {

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
            component with list of items goes here
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
