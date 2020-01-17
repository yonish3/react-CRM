import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('clients')
class UpdateClient extends Component {
    render() {
        return (
            <div>
                <span>Transfer ownership to:</span>
                <input list="OwnerAutocomplete" placeholder="Owner"/>
                <datalist id="OwnerAutocomplete">
                    {this.props.clients.clientsArray.map(r => <option value={r.owner}/> )}
                </datalist>
                <button>TRANSFER</button>
            </div>
        );
    }
}

export default UpdateClient;