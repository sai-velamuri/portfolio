import React, { useRef, useState, useEffect } from "react";
import styled, { injectGlobal } from "styled-components";
import LoadingGif from "./LoadingGif";
import Header from "./Header";
import About from "./About/About";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Contact from "./Contact";

injectGlobal`
  @font-face {
    font-family: "SF Pro Text";
  }

  body {
    font-family: "SF Pro Text";
  }
`;


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

const Gutter = styled.div`
  height: 10px;
  background-color: #fff;
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
        <>
          <Header 
            scrollToFront={scrollToFront}
          />
          <About />
          <AboutMe ref={aboutMeRef} />
          <Gutter></Gutter>
          <Experience ref={experienceRef} />
        </>
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
    //         {/*  />
    //         <Contact ref={contactRef} /> */}
    //       </div>
    //     </div>
    //   }
    // </div>
  );
}
