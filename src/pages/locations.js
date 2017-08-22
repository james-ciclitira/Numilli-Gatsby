import React from 'react'
import ATMLocation from '../components/ATMLocation'
import Stores from '../components/Stores'
import LocationAddress from '../components/LocationAddress'
import Footer from '../components/Footer'


class locations extends React.Component {
  render() {
    return (
      <div>
      <div className='center db mw8'>
      <ATMLocation/>
      <div className='ph3 mt4'>
      <Stores Title='ATMs Locations'/>
      <LocationAddress/>
      </div>      </div>

            <Footer/>

      </div>

    )
  }
}
export default locations

