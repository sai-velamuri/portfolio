import React from 'react';
import resume from '../assets/SarathVelamuri.pdf';

const header = {
  position: 'sticky',
  top: '5px',
  height: '75px',
  // boxShadow: '0 5px 5px #e9f2ee',
  marginBottom: '50px'
}

const header_list = {
  listStyleType: 'none',
  margin: 0,
  padding: '15px'
};

const list__digits = {
  color: '#65e0a7',
  marginRight: '5px'
};

const list__style = {
  float: 'right',
  padding: '10px',
  margin: '5px'
}

const resume_button = {
  fontSize: '18px',
  border: '1px solid #65e0a7',
  borderRadius: '5px',
  float: 'right',
  padding: '10px',
  marginRight: '30px'
}

const portfolio_icon = {}

export default function Header({ scrollToFront }) {
  return (
    <div style={header}>
      <ul style={header_list}>
        <li style={portfolio_icon}>

        </li>
        <li style={resume_button}>
          <a href={resume} target='_blank' rel="noopener noreferrer">Resume</a>
        </li>
        <li 
          style={list__style}
          onClick={() => scrollToFront('Contact')}>
          <span style={list__digits}>03.</span>
          Contact
        </li>
        <li 
          style={list__style}
          onClick={() => scrollToFront('Experience')}>
          <span style={list__digits}>02.</span>
          Experience
        </li>
        <li 
          style={list__style}
          onClick={() => scrollToFront('AboutMe')}> 
          <span style={list__digits}>01.</span> 
          About 
        </li>
      </ul>
    </div>
  )
}