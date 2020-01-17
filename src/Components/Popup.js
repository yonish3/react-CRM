import React, { Component } from 'react';
import { observer, inject,  } from 'mobx-react'

@observer
class Popup extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  editRow = () => {
    let row = this.props.rowToEdit
    for (const key in this.state) {
      if (row.hasOwnProperty(key)) {
        row[key] = this.state[key]
      }
    }
    this.props.togglePopup()
  }

  render() {
      console.log("rendering popup name: "+this.state.name)
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
              <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="name" /><br/>
              <input type="text" name="email" value={this.state.email} onChange={this.handleInput} placeholder="email" /><br/>
              <input type="text" name="emailType" value={this.state.emailType} onChange={this.handleInput} placeholder="emailType" /><br/>
              <input type="text" name="sold" value={this.state.sold} onChange={this.handleInput} placeholder="sold" /><br/>
              <input type="text" name="owner" value={this.state.owner} onChange={this.handleInput} placeholder="owner" /><br/>
              <input type="text" name="country" value={this.state.country} onChange={this.handleInput} placeholder="country" /><br/>
        <button onClick={this.editRow}>Update</button>
        </div>
      </div>
    );
  }
}

export default Popup;
