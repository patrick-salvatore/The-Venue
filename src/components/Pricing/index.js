import React, { Component } from 'react';
import LilButton from '../utils/Button';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
  
  state= {
    prices: [100,150,250],
    seating: ['Balcony', 'Medium', 'VIP'],
    desc: [
      'It has survived not only five centuries, but also the leap into electronic ',
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet',
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy.'
    ],
    link: ['http://sales/a','http://sales/b', 'http://sales/c'],
    delay: [500,0,500]
  }

  showPrices = () => (
    this.state.prices.map((price, i) => (
      <Zoom
        key= {i}
        delay= {this.state.delay[i]}
      >
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.seating[i]}</span>
            </div>
            <div className='pricing_description'>
              {this.state.desc}
            </div>
            <div className='pricing_buttons'>
              <LilButton
                text='Purchase Tickets'
                bck='#ffa800'
                color='#ffffff'
                link={this.state.link}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className='bck_black'>
          <div className='center_wrapper pricing_section'>
            <h2 >Pricing</h2>
            <div className='pricing_wrapper'>
              {this.showPrices()}
            </div>            
          </div>
      </div>
    )
  }
}

