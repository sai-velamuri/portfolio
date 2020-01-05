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
   {
    background-color: black;
    font-family: "SF Pro Text";
    color: #e5e4e2;
    padding: 0 150px;
    text-align: left;
    @media all and (max-width: 750px) {
      padding: 0 50px;
    };
    @media all and (max-width: 400px) {
      padding: 0 30px;
    };
    @media all and (min-width: 1500px) {
      padding: 0 300px;
    };
  }
`;

export default function App() {
  const [displayLoadingGif, setDisplayLoadingGif] = useState(true);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [dimensions, setDimensions] = useState(751);

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

  const updateWindowDimensions = () => {
    setDimensions(window.innerWidth);
  };

  useEffect(() => {
    setDimensions(window.innerWidth);
    window.addEventListener("resize", updateWindowDimensions);
    setTimeout(() => {
      setDisplayLoadingGif(false);
    });

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  {
    /* {dimensions < 751 ? 
    <MobileHeader /> : 
  } */
}

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
    //         {/* <Experience ref={experienceRef} />
    //         <Contact ref={contactRef} /> */}
    //       </div>
    //     </div>
    //   }
    // </div>
  );
}
