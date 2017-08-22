import React from 'react'
import { Link } from 'react-router'

class StoreAddress extends React.Component {
  render() {
    return (

      <article className="link dt w-100 pb2 pl3 mt1 relative">
        <p className="ml2 ma0 absolute top-0 left-0 f7">1.</p>
        <div className="dtc v-top pl3">
          <h1 className="f6 fw5 lh-title mv0">American Gourmet Deli</h1>
          <h2 className="f6 fw4 mt2 mb0 secondary-text ">1500 Castle Hill Ave, Bronx NY 10462 </h2>
          <p className="green f6 mt2 pb1 mb0">Open now - open 24/7</p>
          <a href="https://www.google.com/maps/place/American+Gourmet+Deli/@40.8364587,-73.8542049,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x89c2f4b7bf0b146f:0x8aebb9706e8d3f1d!2sAmerican+Gourmet+Deli,+1500+Castle+Hill+Ave,+Bronx,+NY+10462!2m2!1d-73.8520162!2d40.8364587!3m4!1s0x0:0x8aebb9706e8d3f1d!8m2!3d40.8364587!4d-73.8520162" className="mb2 ma0 f7 secondary-text no-underline dim">Get directions</a>
          <hr />
        </div>
      </article>
    )
  }
}
export default StoreAddress

