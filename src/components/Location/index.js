import React from 'react'

export default function Location() {
  return (
    <div className='location_wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.9537761581346!2d-73.99577045902417!3d40.750503858548434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb011c85%3A0x33df10e49762f8e4!2sMadison+Square+Garden!5e0!3m2!1sen!2sus!4v1553000044705" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        allowFullScreen
        title='Venue Location'
        ></iframe>


        <div className='location_tag'>
            <div>Location</div>
        </div>
    
    </div>
  )
}
