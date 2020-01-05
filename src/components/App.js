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
    text-align: justify;
    @media all and (max - width: 750 px) {
      .container {
        padding: 0 50px;
      }
    }
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
        aboutMeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case "Experience":
        experienceRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case "Contact":
        contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      default:
        console.log("invalid");
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
    }, 3000);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  {
    /* {dimensions < 751 ? 
    <MobileHeader /> : 
    <Header 
      scrollToFront={scrollToFront}
    />
  } */
  }

  return (
    <AppContainer>
      {displayLoadingGif ? (
        <LoadingGif />
      ) : (
        <>
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
