import React from 'react';
import Slider from 'react-slick'

import Band from '../../assets/images/Band.jpg';
import Beyonce from '../../assets/images/Beyonce.jpg';
import TravisScott from '../../assets/images/TravisScott.jpg';

export default function Carrousel() {

    const settings = {
        dots: false, 
        infinite: true,
        autoplay: true,
        speed: 500
    }

  return (
    <div 
        className= "carrousel_wrapper"
        style= {{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}>
        <Slider {...settings}>
          <div>
              <div 
                  className="carrousel_image"
                  style = {{
                    backgroundImage: `url(${Band})`,
                    height: `${window.innerHeight}px`
                  }}
                >
              </div>
          </div>
          <div>
              <div 
                  className="carrousel_image"
                  style = {{
                    backgroundImage: `url(${Beyonce})`,
                    height: `${window.innerHeight}px`
                  }}
                  >
              </div>
          </div>
          <div>
              <div 
                    className="carrousel_image"
                    style = {{
                      backgroundImage: `url(${TravisScott})`,
                      height: `${window.innerHeight}px`
                    }}
                    >
              </div>
          </div>

        </Slider>
    </div>
  )
}
