import React, { Component } from 'react';
import './App.css';
import Servers from './components/Servers';

class App extends Component {
 //State of servers that need to be tested
    state = {
     serverStats : [
         {
             id : '1',
             title: 'Server 1',
             html : 'http://httpstat.us/200'
         },
         {
             id : '2',
             title: 'Server 2',
             html : 'http://httpstat.us/300'
         },
         {
             id : '3',
             title: 'Server 3',
             html : 'http://httpstat.us/400'
         },
         {
             id : '4',
             title: 'Server 4',
             html : 'http://httpstat.us/500'
         },
         {
             id : '5',
             title: 'Server 5',
             html : 'http://httpstat.us/201'
         },
         {
             id : '6',
             title: 'Server 6',
             html : 'http://httpstat.us/404'
         }
     ]
 }

  render() {
    return (
      <div className="App">
        <Servers serverStats={this.state.serverStats}/>
      </div>
    );
  }
}

export default App;
