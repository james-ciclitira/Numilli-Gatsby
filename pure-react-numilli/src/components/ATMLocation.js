import React from 'react'
import SingleLocation from './SingleLocation'

class ATMLocation extends React.Component {
  render() {
    return (
      <section className="mt4">
        <h1 className="primary pl2">ATMs Locations</h1>
        <SingleLocation link='NewYork' Location='New York' img='https://www.nycgo.com/images/uploads/homepage/Empire-State-Building-Observatory-Tom-Perry-2618.jpg'/>
        <SingleLocation link='SanFrancisco' Location='San Francisco' img='https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/SanFrancisco.jpg'/>
        <SingleLocation link='Seattle' Location='Seattle' img='https://www.lacity.org/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/new-lacity.PNG'/>
        <SingleLocation link='LosAngeles' Location='Los Angeles' img='https://upload.wikimedia.org/wikipedia/commons/5/57/LA_Skyline_Mountains2.jpg'/>
        <SingleLocation link='Dallas' Location='Dallas' img='https://www.sixt.com/fileadmin/files/global/user_upload/pictures-city-page/dallas-citypage.jpg'/>
        <SingleLocation link='Phoenix' Location='Phoenix' img='http://americantruckgroupphoenix.com/wp-content/uploads/2014/05/Skyline-Mountains-Phoenix-Arizona-United-States.jpg'/>
      </section>
    )
  }
}
export default ATMLocation

