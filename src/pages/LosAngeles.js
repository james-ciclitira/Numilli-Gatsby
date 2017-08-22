import React from 'react'
import GoogleMapReact from 'google-map-react';
import StoreAddress from '../components/StoreAddress'
import Link from 'gatsby-link'

class LosAngelesPage extends React.Component {
    static defaultProps = {
    defaultcenter: {lat: 59.95, lng: 30.33},
    defaultzoom: 12
  };

  render() {
    return (
       <div className="mw8 db center mt4">
        <div className='mw8 pa0-ns pa3 bg center relative'>
        <h2 className="mt3">Los Angeles</h2>
        <Link className="f6 link dim fw6 primary" to="/locations/">View all locations</Link>
        <div className='w-100 mt4 map'>
          <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyCijdsCQBRQrVePJG-TILtHF6KeekaPWb0"}}
            defaultCenter={{lat: 34.052235, lng: -118.243683}}
            defaultZoom={12}
            >
          </GoogleMapReact>
        </div>
        <h2 className="primary mt5">Los Angeles</h2>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Los Angeles Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
      </div>
      </div>
    )
  }
}
export default LosAngelesPage

