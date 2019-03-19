import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import LilButton from '../utils/Button';

export default class Discount extends Component {

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>

            <Fade delay={1000}>
                <div className='discount_percentage'>
                    <span>30%</span>
                    <span>off</span>
                </div>
            </Fade>
                
            <Slide right>
                <div className='discount_description'>
                    <h3>Purchase Tickets before May 20th</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <LilButton
                      text="Purchase Tickets"
                      bck='#ffa800'
                      color='#ffffff'
                      link="http://google.com"
                    />
                </div>
            </Slide>

        </div>
      </div>
    )
  }
}
