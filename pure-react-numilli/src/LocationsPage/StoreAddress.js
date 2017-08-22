import React from 'react'

class StoreAddress extends React.Component {
  render() {
    return (
      <article className="pa0-ns w-25-ns w-50 dib center mt2">
        <h4 className="f5 fw5 b">{this.props.name}</h4>
        <dl className="f6 lh-title mv2">
          <dt className="db b">Address</dt>
          <dd className="dib ml0 mt2 secondary-text" style={{maxWidth: '170'}}>{this.props.address}</dd>
          <dt className="db b mt3">Hours:</dt>
          <dd className="dib ml0 mt2 secondary-text">{this.props.hours}</dd>
        </dl>
        <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-primary mt3" target="blank" href="https://www.google.com/maps/place/American+Gourmet+Deli/@40.8364587,-73.8542049,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x89c2f4b7bf0b146f:0x8aebb9706e8d3f1d!2sAmerican+Gourmet+Deli,+1500+Castle+Hill+Ave,+Bronx,+NY+10462!2m2!1d-73.8520162!2d40.8364587!3m4!1s0x0:0x8aebb9706e8d3f1d!8m2!3d40.8364587!4d-73.8520162">GET DIRECTIONS</a>
      </article>
    )
  }
}
export default StoreAddress

