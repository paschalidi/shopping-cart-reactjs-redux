import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="component-navbar">
        <div className="navigation-bar">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  Shopping Chart
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <p className="navbar-text">
                    <span className="badge">{} number of items</span>
                  </p>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}