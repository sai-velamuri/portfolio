import React, { useRef, useState, useEffect } from 'react';
import LoadingGif from './LoadingGif';
import Header from './Header';
import About from './About';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Contact from './Contact';
import '../fonts/ttweb.ttf';

const container = {
  backgroundColor: 'black',
  color: '#e5e4e2',
  fontFamily: 'Titillium Web'
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
    })
  }, [])

  return (
    <div style={container}>
      {
        displayLoadingGif ?
        <LoadingGif /> :
        <div>
          <Header 
            scrollToFront={scrollToFront}
          />
          <div>
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
