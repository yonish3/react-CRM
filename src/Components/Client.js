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
            <tr key={row.id} onDoubleClick={this.popup}>
                <td>{row.id}</td>
                <td>{row.c_name}</td>
                <td>{row.email}</td>
                <td>{row.firstContact}</td>
                <td>{row.email_type}</td>
                <td>{row.sale_status}</td>
                <td>{row.owner}</td>
                <td>{row.country}</td>
            </tr>
        );
    }
}

export default Client;