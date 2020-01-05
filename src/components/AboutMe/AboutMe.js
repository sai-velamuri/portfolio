import React from 'react';
import styled from 'styled-components';
import AboutMeContent from './AboutMeContent';

const AboutMeContainer = styled.section`  
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 100vh;
`;

const Heading3 = styled.h3 `
  font-size: 2em;
  margin: 0;
  @media all and (max-width: 750px) {
    font-size: 1em;
  }
`;

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <AboutMeContainer 
      ref={ref}
    >
      <Heading3>01. About Me</Heading3>
      <AboutMeContent />
    </AboutMeContainer>
  )
})

export default AboutMe