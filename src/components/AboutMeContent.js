import React from 'react';
import displayPic from '../assets/displayPic.jpeg';

const aboutMeContentContainer = {
  display: 'flex',
  justifyContent: 'space-evenly'
};

const aboutMeContentLeftDiv = {
  marginRight: '30px'
};

const aboutMeContentRightDiv = {
  border: '1px solid white',
  borderRadius: '10px',
  height: '300px'
}

const displayPicStyle = {
  width: '220px',
  height: '300px',
  borderRadius: '10px'
}

const aboutMeListOfTech = {
  listStyleType: 'disc',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  width: '450px',
  margin: '10px 0 0 0',
  padding: 0
}

const listOfTech = {
  margin: '10px',
  width: '180px'
}

export default function AboutMeContent() {
  return (
    <div style={aboutMeContentContainer}>
      <div style={aboutMeContentLeftDiv}>Hello! I'm Sarath, a software engineer based in Toronto, ON who enjoys building things that live on the internet. Occasionally, I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces using modern frameworks.

      Shortly after graduating from Colorado State University, I joined the information security team at Apple as a Consultant where I worked on a wide variety of interesting and meaningful projects on a daily basis.

      Here are a few technologies I've been working with recently:
      
      <ul style={aboutMeListOfTech}>
        <li style={listOfTech}>JavaScript (ES6)</li>
        <li style={listOfTech}>React.js</li>
        <li style={listOfTech}>Vue.js</li>
        <li style={listOfTech}>Node.js</li>
        <li style={listOfTech}>Express.js</li>
        <li style={listOfTech}>HTML & CSS</li>
        <li style={listOfTech}>d3.js</li>
        <li style={listOfTech}>Basic Golang</li>
      </ul>
      
      
      </div>
      <div style={aboutMeContentRightDiv}>
        <img src={displayPic} alt='displaypic' style={displayPicStyle}/>
      </div>
    </div>
  )
}