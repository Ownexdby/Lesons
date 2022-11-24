import "./Header.css";

import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.email = "userAndriyemail@gmail.com";
    this.name = "Andriy";
  }

  render() {
    // console.log(this.props);
    return (
      <div className='header'>
        <span className={this.props.islogdIn ? "blue_name" : "normal"}>
          {this.props.islogdIn ? this.name : "Гість"}
        </span>
        <span className={this.props.islogdIn ? "blue" : "normal"}>
          {this.props.islogdIn ? this.email : "Пусто"}
        </span>

        <div>
          <button
            className={this.props.islogdIn ? "blue_button" : "normal"}
            onClick={this.props.clickLogin}
          >
            {this.props.islogdIn ? "Logout" : "login"}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
