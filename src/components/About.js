import React from 'react';
import emailInfo from '../config/email';

const about = {
  display: 'flex',
  minHeight: '100vh',
  flexFlow: 'row wrap',
  alignContent: 'center',
  justifyContent: 'center',
  padding: '0 150px'
}

const getInTouch = {
  fontSize: '20px',
  width: '100%',
  margin: '10px 0 0 0'
}

export default function About() {
  return (
    <div style={about}>
      <h1 style={{
          fontSize: '16px', 
          margin: 0,
          width: '100%'
        }}>Hi, my name is </h1>
     <h2 style={{
          fontSize: '60px', 
          margin: '10px 0 10px 0',
          width: '100%'
          }}>
        Sarath Velamuri.
      </h2>
     <h3 style={{
        fontSize: '35px',
        margin: '10px 0 10px 0',
        width: '100%'
        }}>
        I build web applications.
      </h3>
      <p style={{minWidth: '500px', marginTop: '50px'}}>
        I'm a software engineer based in Toronto, ON
        specializing in building and occassionally exceptional,
        high-quality websites and applications.
      </p>
      
      <div style={getInTouch}>
        <a 
          href={`mailto:${emailInfo.email}?cc=${emailInfo.cc}&subject=Exciting%20Opportunity`}
          style={{
            border: '1px solid #65e0a7',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#e5e4e2',
            padding: '10px',
            }}>
          Get in Touch
        </a>
      </div>
    </div>
  )
}
