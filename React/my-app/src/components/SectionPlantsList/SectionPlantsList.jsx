import "./SectionPlantsList.css";

import React, { Component } from "react";

class SectionPlantsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.listplats);
    return (
      <div
        className = "blok_list"
      >
        <ul>
          <li
            className={
             this.props.listplats[0] 
                ? "un-delet"
                : "delet"
            }
          >
            {this.props.listplats[0]?.name}
            <p className='text'>{this.props.listplats[0]?.text}</p>
            <button className='button_Is_Delet' onClick={this.props.deletClick}>
              Delet
            </button>
          </li>
          <li
            className={
              this.props.listplats.length > 0
                ? "un-delet"
                : "delet"
            }
          >
            {this.props.listplats[1]?.name}
            <p className='text'>{this.props.listplats[1]?.text}</p>
            <button className='button_Is_Delet' onClick={this.props.deletClick}>
              Delet
            </button>
          </li>
          <li
            className={
              this.props.listplats.length > 0
                ? "un-delet"
                : "delet"
            }
          >
            {this.props.listplats[2]?.name}
            <p className='text'>{this.props.listplats[2]?.text}</p>
            <button className='button_Is_Delet' onClick={this.props.deletClick}>
              Delet
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SectionPlantsList;
