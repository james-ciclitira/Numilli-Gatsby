import React from 'react'
import GoogleMapReact from 'google-map-react';
import StoreAddress from '../components/StoreAddress'
import Link from 'gatsby-link'

class DallasPage extends React.Component {
  render() {
    return (
       <div className="mw8 db center mt4">
        <div className='mw8 pa0-ns pa3 bg center relative'>
        <h2 className="mt3">Dallas</h2>
        <Link className="f6 link dim fw6 primary" to="/locations/">View all locations</Link>
        <div className='w-100 mt4 map'>

          <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyCijdsCQBRQrVePJG-TILtHF6KeekaPWb0"}}
            defaultCenter={{lat: 32.7767, lng: -96.7970}}
            defaultZoom={12}>
          </GoogleMapReact>

        </div>
        <h2 className="primary mt5">Dallas</h2>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
        <StoreAddress name='Dallas Deli' address='1500 Castle Hill Ave Bronx NY 10462 United States of America' hours='24/7'/>
      </div>
      </div>
    )
  }
}
export default DallasPage

