import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer.js'
import Navigation from './components/Navigation.js'
import AboutPage from './components/AboutPage.js'
import LocationsPage from './components/LocationsPage.js'
import SupportPage from './components/SupportPage.js'
import PressPage from './components/PressPage.js'
import FAQPage from './components/FAQPage.js'
import TermsPage from './components/TermsPage.js'
import PrivacyPage from './components/PrivacyPage.js'

import NewYorkPage from './LocationsPage/NewYorkPage.js'
import SanFranciscoPage from './LocationsPage/SanFranciscoPage.js'
import SeattlePage from './LocationsPage/SeattlePage.js'
import LosAngelesPage from './LocationsPage/LosAngelesPage.js'
import DallasPage from './LocationsPage/DallasPage.js'
import PhoenixPage from './LocationsPage/PhoenixPage.js'



const Home = () => (

  <div className='bg-grey'>
    <HomePage/>
    <Footer/>
  </div>
)

const About = () => (
  <div>
        <Navigation color='bg-primary'/>
        <AboutPage/>
        <Footer/>
  </div>
)


const Locations = () => (
  <div>
        <Navigation color='bg-primary'/>
        <LocationsPage/>
        <Footer/>
  </div>
)


const Support = () => (
  <div>
       <Navigation color='bg-primary'/>
       <SupportPage/>
        <Footer/>
  </div>
)



const Press = () => (
  <div>
       <Navigation color='bg-primary'/>
       <PressPage/>
        <Footer/>
  </div>
)


const Blog = () => (
  <div>
       <Navigation color='bg-primary'/>
       <SupportPage/>
        <Footer/>
  </div>
)

const FAQ = () => (
  <div>
       <Navigation color='bg-primary'/>
       <FAQPage/>
        <Footer/>
  </div>
)

const Terms = () => (
  <div>
       <Navigation color='bg-primary'/>
       <TermsPage/>
       <Footer/>
  </div>
)

const Privacy = () => (
  <div>
       <Navigation color='bg-primary'/>
       <PrivacyPage/>
        <Footer/>
  </div>
)


const NewYork = () => (
  <div>
       <Navigation color='bg-primary'/>
       <NewYorkPage/>
      <Footer/>
  </div>
)

const SanFrancisco = () => (
  <div>
       <Navigation color='bg-primary'/>
       <SanFranciscoPage/>
        <Footer/>
  </div>
)

const Seattle = () => (
  <div>
       <Navigation color='bg-primary'/>
       <SeattlePage/>
        <Footer/>
  </div>
)

const LosAngeles = () => (
  <div>
       <Navigation color='bg-primary'/>
       <LosAngelesPage/>
        <Footer/>
  </div>
)
const Dallas = () => (
  <div>
       <Navigation color='bg-primary'/>
       <DallasPage/>
        <Footer/>
  </div>
)
const Phoenix = () => (
  <div>
       <Navigation color='bg-primary'/>
       <PhoenixPage/>
        <Footer/>
  </div>
)
ReactDOM.render((

  <Router history={hashHistory}>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Locations" component={Locations}/>
    <Route path="/Support" component={Support}/>
    <Route path="/Press" component={Press}/>
    <Route path="/Blog" component={Blog}/>
    <Route path="/FAQ" component={FAQ}/>
    <Route path="/Terms" component={Terms}/>
    <Route path="/Privacy" component={Privacy}/>
    <Route path="/NewYork" component={NewYork}/>
    <Route path="/SanFrancisco" component={SanFrancisco}/>
    <Route path="/Seattle" component={Seattle}/>
    <Route path="/LosAngeles" component={LosAngeles}/>
    <Route path="/Dallas" component={Dallas}/>
    <Route path="/Phoenix" component={Phoenix}/>

  </Router>

), document.getElementById('root'))

