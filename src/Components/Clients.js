import React, { Component } from '../../node_modules/react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import Popup from './Popup'
import axios from 'axios';

@inject ('clients')
@observer
class Clients extends Component {

    getClients = async () => {
       const result = await axios.get(`http://localhost:4000/clients/`)
       this.props.clients.clientsArray = result.data
       console.log(this.props.clients.clientsArray)
    }

    render() {

        this.getClients()

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