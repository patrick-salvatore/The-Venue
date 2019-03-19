import React, { Component } from 'react';
import './assets/css/styles.css'
import {Element} from 'react-scroll';

// Components
import Header from './components/header&footer/Header';
import Feature from './components/feature'
import Info from './components/Information/index';
import Hightlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header&footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Element name='home'>
        <Header/>
      </Element>

      <Element name='feature'>
        <Feature/>
      </Element>

      <Element name="info">
        <Info/>
      </Element>

      <Element name='hightlight'>
        <Hightlight/>
      </Element>

      <Element name='pricing'>
        <Pricing/>
      </Element>

      <Element name='location'>
        <Location/>
      </Element>
      
      <Footer/>
      </div>
    );
  }
}

export default App;
