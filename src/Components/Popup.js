import React, { Component } from 'react';
import { observer, inject,  } from 'mobx-react'

@inject ('clients')
//@observer
class Popup extends React.Component {
  constructor() {
    super()
    this.row = {}
  }

  handleInput = (e) => {
    this.row[e.target.name] = e.target.value
  }

  //consider moving this to the store
  editRow = () => {
    let row = this.props.clients.rowToEdit
    for (const key in this.row) {
      if (row.hasOwnProperty(key)) {
        row[key] = this.row[key]
      }
    }
    this.props.clients.showPopup = false
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
              <input type="text" name="name" value={this.row.name} onChange={this.handleInput} placeholder="name" /><br/>
              <input type="text" name="email" value={this.row.email} onChange={this.handleInput} placeholder="email" /><br/>
              <input type="text" name="emailType" value={this.row.emailType} onChange={this.handleInput} placeholder="emailType" /><br/>
              <input type="text" name="sold" value={this.row.sold} onChange={this.handleInput} placeholder="sold" /><br/>
              <input type="text" name="owner" value={this.row.owner} onChange={this.handleInput} placeholder="owner" /><br/>
              <input type="text" name="country" value={this.row.country} onChange={this.handleInput} placeholder="country" /><br/>
        <button onClick={this.editRow}>Update</button>
        </div>
      </div>
    );
  }
}

export default Popup;
