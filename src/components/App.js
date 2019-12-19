import React, { useRef, useState, useEffect } from 'react';
import LoadingGif from './LoadingGif';
import Header from './Header';
import About from './About';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Contact from './Contact';

const container = {
  backgroundColor: 'black',
  color: '#e5e4e2',
}

const aboutStyle = {
  marginLeft: '100px',
}

export default function App() {
  const [displayLoadingGif, setDisplayLoadingGif] = useState(true)
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

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoadingGif(false)
    }, 3000)
  }, [])

  return (
    <div style={container}>
      {
        displayLoadingGif ?
        <LoadingGif /> :
        <div>
          <Header scrollToFront={scrollToFront}/>
          <div style={aboutStyle}>
            <About />
            <AboutMe ref={aboutMeRef}/>
            <Experience ref={experienceRef} />
            <Contact ref={contactRef} />
          </div>
        </div>
      }
    </div>
  )
}
