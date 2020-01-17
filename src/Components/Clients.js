import React, { Component } from '../../node_modules/react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import Popup from './Popup'

@inject ('clients')
class Clients extends Component {

    constructor() {
        super();
        this.state = {
          showPopup: false,
          rowToEdit: {}
        }
      }

    togglePopup = (row) => {
        this.setState({
          showPopup: !this.state.showPopup,
          rowToEdit : row
        });
    }

    render() {
        return (
            <div>
                {this.state.showPopup ? <Popup text='Close Me' rowToEdit={this.state.rowToEdit} togglePopup={this.togglePopup} /> : null }
                <table style={{width:"100%"}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>First Contact</th>
                    <th>Email Type</th>
                    <th>Sold</th>
                    <th>Owner</th>
                    <th>Country</th>
                </tr>

                {this.props.clients.clientsArray.map(r => <Client row={r} togglePopup={this.togglePopup} />)}

                </table>
            </div>
        );
    }
}

export default Clients;