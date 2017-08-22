import React from 'react'
import GoogleMapReact from 'google-map-react';


class GoogleMap extends React.Component {
 render() {
    return (
      <div className='mw8 pa0-ns pa3 bg center relative'>
      <h1 className="fw2 mb2 ">{this.props.Title}</h1>
      <div className='w-100 mt4 map'>
       <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCijdsCQBRQrVePJG-TILtHF6KeekaPWb0"}}
        defaultCenter={{lat: 40.746673, lng: -98.990388}}
        defaultZoom={4}
        >
        </GoogleMapReact>
        </div>
        </div>
    );
  }
}


export default GoogleMap
