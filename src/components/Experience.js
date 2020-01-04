import React from 'react';
import ExperienceContent from './ExperienceContent';

const aboutMe = {
  height: '100vh',
  padding: '0 150px', 
}


const Experience = React.forwardRef((props, ref) => {
  return (
    <div 
      className='about_me'
      style={aboutMe}
      ref={ref}
    >
      <h3>
        02. Where I've Worked
      </h3>
      <ExperienceContent />
    </div>
  )
})

export default Experience
