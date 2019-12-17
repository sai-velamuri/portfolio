import React, { useRef } from 'react';
import Header from './Header';
import About from './About';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Contact from './Contact';

const container = {
  backgroundColor: '#2e2e2e',
  color: '#E8117F',
}

const aboutStyle = {
  marginLeft: '100px',
}

export default function App() {
  const aboutMeRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToFront = compName => {
    switch(compName) {
      case 'AboutMe':
        aboutMeRef.current.scrollIntoView({ 
          behavior: "smooth",
          block: "center"
        })
        break;
      case 'Experience':
        experienceRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
        break;
      case 'Contact':
        contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
        break;
      default:
        console.log('invalid')
        break;
    }
  };

  return (
    <div style={container}>
      <Header scrollToFront={scrollToFront}/>
      <div style={aboutStyle}>
        <About />
        <AboutMe ref={aboutMeRef}/>
        <Experience ref={experienceRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  )
}
