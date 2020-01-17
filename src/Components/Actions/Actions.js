import React, { Component } from 'react';
import ClientInput from './Update/ClientInput'
import UpdateClient from './Update/UpdateOwner'
import SendEmail from './Update/SendEmail'
import DeclareSale from './Update/DeclareSale'
import AddClient from './Add/AddClient'

class Actions extends Component {
    render() {
        return (
            <div>
                <h2>UPDATE</h2>
                <ClientInput />
                <UpdateClient />
                <SendEmail />
                <DeclareSale />
                <h2>ADD CLIENT</h2>
                <AddClient />
            </div>
        );
    }
}

export default Actions;