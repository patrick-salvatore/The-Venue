import React from 'react';
import Carrousel from './Carrousel';
import CountDown from './CountDown';

const Feature = () => {
  return (
    <div style= {{
        position: 'relative'
    }}>

      <Carrousel/>
      
      <div className="artist_name">
        <div className="wrapper">
            The Venue
        </div>
      </div>

      <CountDown/>
    </div>
  )
}

export default Feature;