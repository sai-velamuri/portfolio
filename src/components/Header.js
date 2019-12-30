import React from 'react';
import resume from '../assets/SarathVelamuri.pdf';
import '../styles/Header.css';

const header = {
  position: 'fixed',
  top: '0px',
  height: '75px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
  marginBottom: '50px',
  backgroundColor: 'black',
  zIndex: 11,
  display: 'flex',
  justifyContent: 'flex-end'
}

const removeHeader = {
  visibility: 'hidden',
  height: '75px',
  marginBottom: '50px',
}

const header_list = {
  listStyleType: 'none',
  margin: 0,
  padding: '15px',
  display: 'flex',
  justifyContent: 'flex-end',
  flexFlow: 'row wrap'
};

const list__digits = {
  color: '#a8a7ae',
  marginRight: '5px'
};

const list__style = {
  padding: '10px',
  margin: '5px'
}

const resume_button = {
  fontSize: '18px',
  border: '1px solid #a8a7ae',
  borderRadius: '5px',
  float: 'right',
  padding: '10px',
  marginRight: '30px'
}

export default function Header({ scrollToFront, display }) {
  return (
    <div 
      style={display ? header : removeHeader}>
      <ul 
        style={header_list}
      >
        <li 
          style={list__style}
          onClick={() => scrollToFront('AboutMe')}
          className='listElementHover'
          > 
          <span style={list__digits}>01.</span> 
          About 
        </li>
        <li 
          style={list__style}
          onClick={() => scrollToFront('Experience')}
          className='listElementHover'>
          <span style={list__digits}>02.</span>
          Experience
        </li>
        <li 
          style={list__style}
          onClick={() => scrollToFront('Contact')}
          className='listElementHover'>
          <span style={list__digits}>03.</span>
          Contact
        </li>
        <li style={resume_button}>
          <a 
            href={resume}
            target='_blank' 
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#e5e4e2'
            }}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}