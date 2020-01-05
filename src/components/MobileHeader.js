import React from 'react';
import '../styles/MobileHeader.css';

export default function MobileHeader() {
  return (
    <div style={{
      height: '75px'
    }}>
      <ul className='hamburgerUL'>
        <li className='hamburgerLI' id='li1'></li>
        <li className='hamburgerLI' id='li2'></li>
        <li className='hamburgerLI' id='li3'></li>
      </ul>
    </div>
  )
}
