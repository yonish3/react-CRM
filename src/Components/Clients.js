import React, { Component } from '../../node_modules/react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import Popup from './Popup'

@inject ('clients')
@observer
class Clients extends Component {

    render() {
        return (
            <div>
                {this.props.clients.showPopup ? <Popup text='Close Me' /> : null }
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

                {this.props.clients.clientsArray.map(r => <Client row={r} />)}

                </table>
            </div>
        );
    }
}

export default Clients;