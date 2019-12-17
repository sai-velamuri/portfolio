import React from 'react';
import AboutMeContent from './AboutMeContent';

const aboutMe = {
  border: '1px solid white',
  height: '500px',
  marginBottom: '300px'
}

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div 
      className='about_me'
      style={aboutMe}
      ref={ref}
    >
      <span>01. </span>About Me
      <AboutMeContent />
    </div>
  )
})

export default AboutMe