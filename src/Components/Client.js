import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject ('clients')
//@observer
class Client extends Component {

    popup = () => {
        this.props.clients.rowToEdit = this.props.row
        this.props.clients.showPopup = true
    }

    render() {
        let row = this.props.row
        return (
            <tr key={row._id} onDoubleClick={this.popup}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.firstContact}</td>
                <td>{row.emailType}</td>
                <td>{row.sold}</td>
                <td>{row.owner}</td>
                <td>{row.country}</td>
            </tr>
        );
    }
}

export default Client;