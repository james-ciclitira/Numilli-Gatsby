import React from 'react'
import Footer from '../components/Footer'


class FAQPage extends React.Component {
  render() {
    return (
      <div>
        <article className="pv3-ns ph4 mt4 mw7 db center f6">
        <h1 className="primary">Frequently asked questions</h1>
        <ul className="list pl0">
          <li className="pv3 pv4-ns">
            <b className="db f3 mb3">What is bitcoin?</b>
            <span className="f5 db lh-copy">
              Bitcoin is a form of digital currency. This means that if you have bitcoins you can use them as cash instead of handing bills and physical coins to the merchant. Currently, bitcoins are primarily used for online purchases and transfers as they are more liquid than physical currency (with lower transaction costs). There are thousands of online retailers that accept bitcoins with the number growing daily. Bitcoin is The Internet of Money.</span>
          </li>
          <li className="pv3 pv4-ns">
            <b className="db f3 mb3">How to buy bitcoins at a Coinsource Bitcoin ATM?</b>
            <span className="f5 db lh-copy pv2">Step 1: Verify your cell phone number by typing it in and inputing the SMS code.</span>
            <span className="f5 db lh-copy pv2">Step 2: Choose destination of where you would like the bitcoins to be sent. You can choose to scan a QR code (recommended), print a paper wallet, or manually enter your wallet address. Our machines can work with any bitcoin wallet, however if you don’t have one, you can download the Coinsource Bitcoin Wallet from the App Store or Google Play Store.</span>
            <span className="f5 db lh-copy pv2">Step 4: Hit “Finish” and choose to receive a paper or email receipt.</span>
          </li>
          <li className="pv3 pv4-ns">
            <b className="db f3 mb3">What is a Bitcoin Wallet?</b>
            <span className="f5 db lh-copy">
              Similar to a traditional wallet you may carry in your pocket, a bitcoin wallet is used to store money. The difference is that instead of storing a collection of bills and cards, a bitcoin wallet stores a collection of bitcoin private keys. Typically a wallet is encrypted with a password or otherwise protected from unauthorized access.
              Unlike the Bitcoin network, a Bitcoin wallet is controlled only by its owner (it's not distributed and shared like theblockchain). It's important to keep your bitcoin wallet safe by either setting a strong password or otherwise keeping it out of reach of malicious individuals.
            </span>
          </li>
          <li className="pv3 pv4-ns">
            <b className="db f3 mb3">Where are my bitcoins?</b>
            <span className="f5 db lh-copy">
              All Numilli purchases happen immediately so you should receive the coins right away. 9 times out of 10, if you do not see the coins in your wallet, it just needs to be refreshed by closing out of the app and opening it back up again. Some wallets will not show the coins until the transaction has been confirmed on the blockchain, which typically takes about 10 minutes, unless the network is running slow due to high transaction volume. If you are concerned about your coins not being sent, please check your transaction on the network by going to www.btc.com and using your wallet address to search for your transaction.
            </span>
          </li>
        </ul>

        </article>
        <Footer/>
        </div>
    )
  }
}
export default FAQPage

