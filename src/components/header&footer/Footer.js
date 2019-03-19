import React from 'react'
import Fade from 'react-reveal/Fade';


export default function Footer() {
  return (
    <footer className='bck_red'>
        <Fade delay= {500}>
            <div className='font_righteous footer_logo_venue'>The venue</div>
            <div className='footer_copyright'>
                The Venue created by Patrick Salvatore 2019
            </div>
        </Fade>
    </footer>
  )
}
