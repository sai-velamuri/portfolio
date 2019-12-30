import React from 'react';
import AboutMeContent from './AboutMeContent';

const aboutMe = {
  height: '500px',
  marginBottom: '300px',
  padding: '0 150px'
}

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div 
      className='about_me'
      style={aboutMe}
      ref={ref}
    >
      <h3>01. About Me</h3>
      <AboutMeContent />
    </div>
  )
})

export default AboutMe