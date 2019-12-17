import React from 'react';
import ExperienceContent from './ExperienceContent';

const aboutMe = {
  border: '1px solid white',
  height: '500px',
  marginBottom: '300px'
}

const Experience = React.forwardRef((props, ref) => {
  return (
    <div 
      className='about_me'
      style={aboutMe}
      ref={ref}
    >
      <span>02. </span>Where I've Worked
      <ExperienceContent />
    </div>
  )
})

export default Experience
