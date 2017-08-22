import React from 'react'


class LocationsPage extends React.Component {
  render() {
    return (
      <div className='center db mw8'>
      <section className="pv4-ns pv2 mw6 db center tc">
        <h2>We're here to help</h2>
        <p>Our customer support team are on hand 24/7 to answer your questions.</p>
        <div className="measure mt4 tl-ns tc pl5-ns  ml4-ns ">
          <div>
            <p className="dib-ns db tl-ns pt3" style={{minWidth: 192}}>Support Email:</p>
            <a href="mailto:support@numilli.com" className="link dim blue lh-solid tl-ns tc">Support@numilli.com</a>
          </div>
          <div>
            <p className="dib-ns db tl-ns pt3" style={{minWidth: 192}}>General enquiries:</p>
            <a href="mailto:info@numilli.com" className="link dim blue lh-solid tl-ns tc">Info@numilli.com</a>
          </div>
          <div>
            <p className="dib-ns db tl-ns pt3" style={{minWidth: 192}}>Press enquiries:</p>
            <a href="mailto:press@numilli.com" className="link dim blue lh-solid tl-ns tc">Press@numilli.com</a>
          </div>
          <div>
            <p className="dib-ns db tl-ns pt3" style={{minWidth: 192}}>Account infomation:</p>
            <a href="mailto:ac@numilli.com" className="link dim blue lh-solid tl-ns tc">ac@numilli.com</a>
          </div>
          <div>
            <p className="dib-ns db tl-ns pt3" style={{minWidth: 192}}>Phone:</p>
            <a href="tel:+1 917-789-5251" className="link dim blue lh-solid tl-ns tc">+1 917-789-5251</a>
          </div>
        </div>
      </section>
      </div>

    )
  }
}
export default LocationsPage

