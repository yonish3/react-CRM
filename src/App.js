import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from './Components/Clients'
import Actions from './Components/Actions'
import Analytics from './Components/Analytics'


class App extends Component {
  
  render() {
    let a = "asasasas"
    console.log(a)

    return (
      <Router> 
        <div id='main-app'>

          <div id="main-links">
            <div className='clients'>
                <Link to="/clients">clients</Link>
            </div>
            <div className='actions'>
              <Link to="/actions">actions</Link>
            </div>
            <div className='analytics'>
              <Link to="/analytics">analytics</Link>
            </div>
          </div>
          
          <div className='tab-content'>
            <Route path="/clients" render={()=> <Clients />} />
            <Route path="/actions" render={()=> <Actions />} />
            <Route path="/analytics" render={()=> <Analytics />} />
            {/* <Route path="/breakdown" component={Breakdown} /> */}
          </div>  
        
        </div>
      </Router> 
    );
  }
}


export default App;
