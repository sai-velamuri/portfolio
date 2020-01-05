import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import LoadingGif from "./LoadingGif";
import Header from "./Header";
import About from "./About/About";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience";
import MobileHeader from "./MobileHeader";
import Contact from "./Contact";

const AppContainer = styled.div`
  background-color: #fbfbfd;
  font-family: "SF Pro Text";
  color: silver;
  text-align: left;
  box-sizing: border-box;
  @media all and (max-width: 750px) {
    padding: 0 50px;
  };
  @media all and (max-width: 400px) {
    padding: 0 30px;
  };
  @media all and (max-width: 1000px) {
    padding: 0 300px;
  };
`;

export default function App() {
  const [displayLoadingGif, setDisplayLoadingGif] = useState(true);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToFront = compName => {
    switch (compName) {
      case "AboutMe":
        if (aboutMeRef && aboutMeRef.current) {
          aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
        break;
      case "Experience":
        if (experienceRef && experienceRef.current) {
          experienceRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
        break;
      case "Contact":
        if (contactRef && contactRef.current) {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
        break;
      default:
        alert("invalid choice");
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoadingGif(false);
    });
  }, []);

  return (
    <AppContainer>
      {displayLoadingGif ? (
        <LoadingGif />
      ) : (
        <div style={{fontFamily: 'SF Pro Text'}}>
          <Header 
            scrollToFront={scrollToFront}
          />
          <About />
          <AboutMe ref={aboutMeRef} />
        </div>
      )}
    </AppContainer>


    // <div style={container}>
    //   {
    //     displayLoadingGif ?
    //     <LoadingGif /> :
    //     <div>
    //       <div>
    //         <About />
    //
    //         {/* <Experience ref={experienceRef} />
    //         <Contact ref={contactRef} /> */}
    //       </div>
    //     </div>
    //   }
    // </div>
  );
}
