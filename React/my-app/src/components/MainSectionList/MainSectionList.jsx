// масив з обєктами в якому буде поле і текст
//юл має бути три ліжки текст в середині береться з масива який я створю
import "./MainSectionList.css";
import React, { Component } from "react";

class MainSectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <ul className={this.props.islogdIn && this.props.list.length > 0 ? "un-delet" : "delet"}>
        <li className='list-item'>{this.props.list[0]?.text}</li>
        <li className='list-item'>{this.props.list[1]?.text}</li>
        <li className='list-item'>{this.props.list[2]?.text}</li>
      </ul>
    );
  }
}

export default MainSectionList;
