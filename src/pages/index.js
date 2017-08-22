import React from "react"
import Stores from '../components/Stores'
import Footer from '../components/Footer'


const IndexPage = () =>
    <div>
        <section className="w-100 overflow-auto bg-primary">
        <div className="mw8 db mt4 center">
          <div className="fr w-50-ns w-100">
            <img className="w-80-ns w-50 center db" src="img/landing-preview.png" alt="Numilli app - iOS screenshot" />
          </div>
          <div className="tc tl-ns fl w-50-ns w-100 mt3 ph4 ">
            <h1 className="fw5 f2-ns f3 lh-title white">The easiest way to buy and sell bitcoins</h1>
            <p className="white-90 db-ns dn mv4 lh-copy ">Find Bitcoin ATM locations easily with Numilli. Bitcoin ATMs are one of the easiest and quickest ways to buy and sell bitcoins.
              <br />
              <br />Lorem ipsum dolor sit amet, vide altera sed ad, ex probo ceteros erroribus pri. Cum postea percipit philosophia et.</p>
            <div className="w-100 mv0-ns mv3">
              <a className="ml0-ns mr2" target="blank" href="https://itunes.apple.com/us/genre/ios/id36?mt=8">
                <img className="grow" src="img/app-store.svg" alt="Download from app store" /></a>
              <a target="blank" href="https://play.google.com/store?hl=en_GB">
                <img className="grow" src="img/google.svg" alt="Download from GooglePlay" />
              </a>
            </div>
          </div>
        </div>
      </section>
       <section className="mw8 db center mt5">
        <div className="w-40-ns w-100 dib">
          <img className="fr-ns db center mr6-ns mr0 " src="img/atm.png" alt="Numilli-atm" />
        </div><main className="w-60-ns w-100 pl4-ns pa0-ns pa3 dib v-top">
          <h2 className="mt0">The Nation's most Secure Bitcoin ATM Network</h2>
          <p className="f4 lh-copy measure">
            Numilli is a Bitcoin ATM Network in the United States of America. We now have over ## machines conveniently located across nine states, and plan to continue rolling out new terminals with growing customer demand.
          </p>
          <a className="primary no-underline" href="/locations.html" title>Locate the nearest atm</a>
          <h2 className="mt6-ns mt4">What We Do</h2>
          <p className="f4 lh-copy measure">
            We provide convenience and accessibility for the growing number of people using bitcoin for everyday transactions. Numilli ATMs are the fastest and most secure way to turn your bitcoin into cash, and your cash into bitcoin.
          </p>
        </main>
      </section>
      <div className='center db mw8'>
      <Stores Title='Bitcoin ATM Locations'/>
      </div>
            <Footer/>

      </div>

export default IndexPage
