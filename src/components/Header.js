import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <header className="header">
        <ul className="header__list">
          <li className="header__list--item">
            <a href="/">
              <img src={require("../assets/images/logo.svg")} 
                   className="logo-image" />
            </a>
          </li>
          <li className="header__list--item">
            <button className="btn btn-transparent btn-gps" 
                    onClick={ this.doLocationSearch() }>
              GPS
            </button>
          </li>
        </ul>
      </header>
    );
  }

  doLocationSearch() {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      if (coords != null) {
        const location = {
          lat: coords.latitude,
          lon: coords.longitude
        };

        // this.setState({ location });
        this.props.doLocationSearch(location);
      }
    })
  }
};

export default Header;