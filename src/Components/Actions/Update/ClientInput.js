import React, { Component } from 'react';
import { inject } from 'mobx-react';


@inject('clients')
class ClientInput extends Component {
    render() {
        return (
            <div>
                <span>Client:</span>
                <input list="NameAutocomplete"/>
                <datalist id="NameAutocomplete">
                    {this.props.clients.clientsArray.map(r => <option value={r.name}/> )}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;