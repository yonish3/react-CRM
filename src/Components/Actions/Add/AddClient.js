import { inject } from 'mobx-react';
import React, { Component } from 'react';

class AddClient extends Component {
    constructor() {
        super()
        this.input = {}
      }
    
      handleInput = (e) => {
        this.input[e.target.name] = e.target.value
      }
    
      render() {
        return (
          <div className='addNewCustomer'>
              <form action="/action_page.php">
                  <input type="text" name="name" value={this.input.name} onChange={this.handleInput} placeholder="Name" /><br/>
                  <input type="text" name="email" value={this.input.Surname} onChange={this.handleInput} placeholder="Surname" /><br/>
                  <input type="text" name="owner" value={this.input.owner} onChange={this.handleInput} placeholder="Owner" /><br/>
                  <input type="text" name="country" value={this.input.country} onChange={this.handleInput} placeholder="Country" /><br/>
            <input type="submit" value="Add New Client"/>
            </form>
          </div>
        );
      }
}

export default AddClient;