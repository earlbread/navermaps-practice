import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class GMap extends React.Component {
	render() {
    return <div className="GMap">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.props.zoom }</p>
      </div>
      <div className='GMap-canvas' ref="mapCanvas">
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

var initialCenter = { lat: 37.3595704, lng: 127.105399 }
var zoom = 10;

ReactDOM.render(<GMap initialCenter={initialCenter} zoom={zoom}/>, document.getElementById('container'));
