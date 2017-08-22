import React from 'react'
import { Link } from 'react-router'


class Footer extends React.Component {
  render() {
    return (

 <footer className="pv4-ns pv2 mt4-ns mt0 pa0-ns pa3 mt4 bt b--black-10 bg-white overflow-auto">
        <div className="mw8 db center">
          <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
            <h4 className="fw5 mb3 f7 secondary-text">SUPPORT</h4>
            <a href="mailto:support@numilli.com" className="link f6 dim lh-solid b db pv2">
              Email: Support@numilli.com</a>
            <a href="tel:+1 917-789-5251" className="link f6 dim lh-solid b db pv2">
              Phone: +1 917-789-5251</a>
          </article>
          <article className="fl w-60 dib-ns w-auto-ns mr4-m mr5-l ml5-ns ml0 mb4 pr2 pr0-ns">
            <h4 className="fw5 mb3 f7 secondary-text">NAVIGATION</h4>
            <div className="fl w-auto">
              <Link className="f6 db mt2 dim link" to="/press">Press</Link>
              <Link className="f6 db mt2 dim link" to="/blog">Blog</Link>
              <Link className="f6 db mt2 dim link" to="/faq">FAQ</Link>
            </div>
            <div className="fl w-auto ml3 pl3">
              <Link className="f6 db mt2 dim link" to="/terms">Terms of Service</Link>
              <Link className="f6 db mt2 dim link" to="/privacy">Privacy Policy</Link>
            </div>
          </article>
          <article className="fr-ns fl w-100 dib-ns w-auto-ns pr2 pr0-ns v-top">
            <h4 className="fw5 mb3 f7 secondary-text mb2">DOWNLOAD</h4>
            <a className="ml4-ns ml0 fr-ns dib grow" target="blank" href="https://itunes.apple.com/us/genre/ios/id36?mt=8"><img src="/img/app-store.svg" alt="Download from app store" /></a>
            <a className="fr-ns dib grow" target="blank" href="https://play.google.com/store?hl=en_GB">
              <img src="img/google.svg" alt="Download from GooglePlay" /></a>
          </article>
          <article className="dt dt--fixed w-100">
            <div className="db dtc-ns mt4 tr-ns v-mid">
              <a href="https://www.facebook.com/" className="link dim dib mr3">
                <svg className="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                  <title>facebook icon</title>
                  <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z" />
                </svg>
              </a>
              <a href="https://twitter.com/" className="link dim dib mr3">
                <svg className="db w2 h2" data-icon="twitter" viewBox="0 0 32 32" fill="currentColor">
                  <title>twitter icon</title>
                  <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
                </svg>
              </a>
              <a href="https://medium.com/" className="link dim dib mr3" title="Impossible Labs on Medium">
                <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6" fill="currentColor">
                  <g>
                    <path fill="currentColor" className="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z" />
                    <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4   " />
                    <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z" />
                    <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z" />
                  </g>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/" className="link dim dib">
                <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48">
                  <lineargradient gradientUnits="userSpaceOnUse" x1="23.9995" y1={0} x2="23.9995" y2="48.0005">
                    <stop offset={0} />
                    <stop offset={1} />
                  </lineargradient>
                  <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z" />
                  <g>
                    <g>
                      <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </footer>

    )
  }
}
export default Footer

