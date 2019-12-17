import React from 'react';
import emailInfo from '../config/email';

const name = {
  fontSize: '55px',
  position: 'relative',
  left: 0,
  margin: '15px 0px'
}

const content = {
  margin: '15px 0px',
  fontSize: '40px'
}

const aboutContent = {}

const about = {
  marginBottom: '300px'
}

const getInTouch = {
  border: '1px solid #65e0a7',
  borderRadius: '5px',
  padding: '10px',
  fontSize: '20px',
  width: '150px'
}

export default function About() {
  return (
    <div style={about}>
      Hi, my name is 
      <br/>
      <br/>
      <h2 style={name}>
        Sarath Velamuri.
      </h2>
      <h3 style={content}>
        I build web applications.
      </h3>
      <h4 style={aboutContent}>
        I'm a software engineer based in Toronto, ON <br/>
        specializing in building and <br/> occassionally exceptional,
        high-quality websites and applications.
      </h4>

      <div style={getInTouch}>
        <a href={`mailto:${emailInfo.email}?cc=${emailInfo.cc}&subject=Exciting%20Opportunity`}>
          Get in Touch
        </a>
      </div>
    </div>
  )
}
