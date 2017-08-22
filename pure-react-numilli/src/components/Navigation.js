import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
  render() {
    return (
        <nav className={`${this.props.color}`}>
        <div className="mw8 db center db dt-l w-100 border-box pa3 ph0-l">
          <Link className="db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb2 mb0-l pl0" to="/" title="Home">
            <img src="img/logo.svg" className="dib h2 ml4-ns ml0 mb0-ns mb3" alt="Numilli" />
          </Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l white">
            <Link className="link dim f6 f5-l dib mr3 mr4-l white" to="/about">How it Works</Link>
            <Link className="link dim f6 f5-l dib mr3 mr4-l white" to="/locations">Locations</Link>
            <Link className="link dim f6 f5-l dib white" to="/support">Support</Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navigation

