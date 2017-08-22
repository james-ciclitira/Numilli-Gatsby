import React from 'react'

class AboutPage extends React.Component {
  render() {
    return (
        <section className="mt5-ns mt3 mw8 db center overflow-auto">
        <article>
          <div className="ph3">
            <div className="w-30-ns w-100 ml5-ns ph5 ph2-ns ml0 dib">
              <img src="img/iOS-screenshot.png" alt="screenhot" />
              <img className="mt6 db-ns dn" src="img/iOS-screenshot-2.png" alt="screenhot" />
            </div>
            <div className="measure center w-60-ns w-100 fr dib lh-copy v-top">
              <h2 className="fw5">How Numilli works</h2>
              <p className="b">Step 1</p>
              <p>Download the App by searching numilli for on the App Store or Google Play</p>
              <div className="mt4">
                <a target="blank" href="https://itunes.apple.com/us/genre/ios/id36?mt=8">
                  <img src="img/app-store.svg" alt="Download from app store" className="dib pointer v-top w-30-ns w-40 pr2 pt2 grow" /></a>
                <a target="blank" href="https://play.google.com/store?hl=en_GB">
                  <img src="img/google.svg" alt="Download from GooglePlay" className="dib pointer v-top pl2-ns pl0 pt2 mb4 w-30-ns w-40 grow" /></a>
              </div>
              <div className="mt4">
                <p className="b">Step 2</p>
                <p>Sign Up by entering a user name and pin</p>
              </div>
              <div className="mt4">
                <p className="b">Step 3</p>
                <p>To send bitcoin, click the send button on the dashboard. Scan a QR code using your cell phone camera, upload one from your saved photos with the Photos button, or input a case sensitive bitcoin address using the Address button.</p>
              </div>
              <div className="mt4">
                <p className="b">Step 4</p>
                <p>To receive bitcoin, click the Request button on the dashboard. Scan the senders QR code using your cell phone camera, provide the sender a copy of your bitcoin address, or send a payment request to the sender through the Email or SMS buttons.</p>
              </div>
              <div className="mt4">
                <p className="b">Step 5</p>
                <p>To import the private keys from a paper wallet generated from a Coinsource machine, select scan QR code. Scan the code and select import funds. Your private key will then be migrated onto the secure Coinsource app, and you have full and complete access to your bitcoin.</p>
              </div>
            </div>
          </div>
          </article>
      </section>

    )
  }
}
export default AboutPage

