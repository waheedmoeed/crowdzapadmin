import * as React from 'react';
import './style.css'
import GoogleMapReact from 'google-map-react';
import MiniHouse from './Components/MiniHouse';


class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center:  {lat: 32.571144, lng: 74.075005},
      zoom: 15
    };
  }
  onMapChange = (newMapState) => {
    this.setState({
      zoom: newMapState.zoom,
      center : newMapState.center
    });
  }
  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this.onMapChange}
          bootstrapURLKeys={{
            key: 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4'
          }}
        >
          <MiniHouse lat={32.571144} lng={74.075005} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;