import React, { Component } from 'react';

export default class CardComponent extends Component {
  render() {
    return (
      <div className="component-card">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail fixed-height-thumbnail">
            <img src='...' alt="Something went wrong." />
            <div className="caption">
              <h4>title</h4>
              <p>description</p>
              <p>price</p>
              <p>discount</p>
              <button className="btn btn-success bottom-left"> Add robot to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}