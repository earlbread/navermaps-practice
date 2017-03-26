import React, { Component } from 'react';
import Map from './Map';

class App extends Component {
  render() {
    const center = {
      lat: 37.3595704,
      lng: 127.105399
    }

    return (
      <Map center={center} />
    );
  }
}

export default App;
