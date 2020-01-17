import React, { Component } from 'react';

class SendEmail extends Component {
    render() {
        return (
            <div>
                <span>Send Email:</span>
                <input list="emailType" placeholder="Email Type"/>
                <datalist id="emailType">
                    <option value="A"/>
                    <option value="B"/>
                </datalist>
                <button>SEND</button>
            </div>
        );
    }
}

export default SendEmail;