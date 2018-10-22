import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recentBuses: [
    ],
    busstops: [1334, 1335, 151, 1847, 1846, 1340]
  };


  // 1334, 1335 wagnera
  // Suchanino : 151, 1874 ?
  // Nad jarem 1846, 1340

  componentDidMount() {
      this.state.busstops.map(busstopId => {
        this.getBusstopData(busstopId).then(newState => {
        
          this.setState({
            recentBuses: [...this.state.recentBuses, ...newState]
          })
        });  
      })
  }
  
  getBusstopData(busstopId) {
    const busstopUrl = "http://87.98.237.99:88/delays?stopId="
    return fetch(busstopUrl + busstopId, {mode: 'cors'})
    .then(response => response.json())
    .then(jsonResponse => 
      jsonResponse.delay.map((bus) => ({
          routeId: bus.routeId,
          headsign: bus.headsign,
          estimatedTime : bus.estimatedTime,
          theoreticalTime : bus.theoreticalTime
      }))
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.recentBuses.map(bus => {
          return (
          
          <div>
            <p>Numer autobusu: {bus.routeId}</p>
            <p>Kierunek: {bus.headsign}</p>
            <p>Czas przyjazdu: {bus.estimatedTime}</p>
            <p>Czas rozkladowy: {bus.theoreticalTime}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
