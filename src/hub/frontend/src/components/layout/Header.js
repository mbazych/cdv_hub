import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      //<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/archive" className="nav-link">
            Archive
          </Link>
        </li>

        <li className="nav-item">
          <button onClick={this.props.logout} className="nav-link btn btn-sm">
            Logout
          </button>
        </li>
      </div>
      // </ul>
    );

    const guestLinks = (
      //<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="navbar-brand h1" href="#">
                Car Reservations
              </a>
            </li>

            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
