import React from 'react'
import IconCalendar from '../../assets/images/icons/calendar.png';
import IconLocation from '../../assets/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const Info = () => {
  return (
    <div className='bck_black'>
        <div className='center_wrapper'>
            <div className="vn_wrapper">

            <Zoom duration={500}>
                <div className="vn_item">
                    <div className="vn_outer">
                        <div className="vn_inner">
                            <div className='vn_icon_square bck_blue'></div>
                            <div 
                                className= 'vn_icon' style= {{
                                background: `url(${IconCalendar})`
                                }}>
                            </div>
                            <div className='vn_title'>
                                Event Date & Time
                            </div>
                            <div className="vn_desc">
                                4TH July 2019     
                                @ 08.00 PM
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>

            <Zoom duration={500} delay={500}>
                <div className="vn_item">
                    <div className="vn_outer">
                        <div className="vn_inner">
                            <div className='vn_icon_square bck_yellow'></div>
                            <div 
                                className= 'vn_icon' style= {{
                                background: `url(${IconLocation})`
                                }}>
                            </div>
                            <div className='vn_title'>
                                Event Location
                            </div>
                            <div className="vn_desc">
                                1938 Sullivan Ln, Metropolis, USA
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
            
            </div>
        </div>
    </div>
  );
};


export default Info