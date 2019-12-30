import React from 'react';
import emailInfo from '../config/email';

const aboutMe = {
  textAlign: 'center',
  height: '100vh',
  padding: '0 150px',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center'
}

const getInTouch = {
  border: '1px solid #65e0a7',
  borderRadius: '5px',
  padding: '10px',
  fontSize: '20px',
  width: '150px'
}

const Contact = React.forwardRef((props, ref) => {
  return (
    <div 
      className='about_me'
      style={aboutMe}
      ref={ref}
    >
      <h3>03. What's Next?</h3>

      <h3>Get In Touch</h3>
      <div style={{minWidth: '500px'}}>
        I'm a Permanent Resident of Canada who is actively looking for 
        opportunities (Full-Time, Contract-To-Hire, Consulting etc).
        <h4>My inbox is always open.</h4>
      </div>

      <div style={{textAlign: 'center', marginTop: '25px'}}>
        <a style={getInTouch} href={`mailto:${emailInfo.email}?cc=${emailInfo.cc}&subject=Exciting%20Opportunity`}>
          Get in Touch
        </a>
      </div>

    </div>
  )
})

export default Contact
