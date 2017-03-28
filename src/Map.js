import React from 'react';
import './Map.css';

class Map extends React.Component {
	render() {
    return <div className="Map">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.props.zoom }</p>
      </div>
      <div className='Map-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()

    // have to define window.naver maps event listeners here too
    // because we can't add listeners on the map until its created
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    window.naver.maps.event.clearListeners(this.map, 'zoom_changed')
  }

  createMap() {
    console.log(this.refs);
    let mapOptions = {
      zoom: this.props.zoom,
      center: this.mapCenter()
    }
    return new window.naver.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new window.naver.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new window.naver.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}

export default Map;
