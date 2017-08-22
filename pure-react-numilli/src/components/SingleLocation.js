import React from 'react'
import { Link } from 'react-router'

class SingleLocation extends React.Component {
  render() {
    return (
        <article className="w-third-ns w-100 dib relative" style={{height: 220}}>
          <Link to={this.props.link} className="absolute mh2 mv2 top-0 bottom-0 left-0 right-0 hoverable cover">
          <img className='w-100 h-100 br2 ' src={this.props.img} role="presentation" />
          <div className="bg-black-30 absolute top-0 bottom-0 left-0 right-0">
          <h1 className="f3 fw6 tc white db center mt4 pt5">{this.props.Location}</h1>
          </div>
          </Link>
        </article>
    )
  }
}
export default SingleLocation

