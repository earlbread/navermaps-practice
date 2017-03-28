import React, { Component } from 'react';
import Map from './Map';

class App extends Component {
  render() {
    const initialCenter = {
      lat: 37.3595704,
      lng: 127.105399
    };

    const zoom = 10;

    return (
      <Map initialCenter={initialCenter} zoom={zoom} />
    );
  }
}

export default App;
