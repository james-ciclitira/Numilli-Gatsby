import React from 'react'
import ATMLocation from './ATMLocation'
import Stores from './Stores'
import LocationAddress from './LocationAddress'


class LocationsPage extends React.Component {
  render() {
    return (
      <div className='center db mw8'>
      <ATMLocation/>
      <div className='ph3 mt4'>
      <Stores Title='ATMs Locations'/>
      <LocationAddress/>
      </div>
      </div>

    )
  }
}
export default LocationsPage

