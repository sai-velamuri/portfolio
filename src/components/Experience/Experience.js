import React from 'react';
import ExperienceContent from './ExperienceContent';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  background-color: #fcfcfc;
  padding: 0 150px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  padding: 0 150px;
  height: 100vh;
`;

const Heading3 = styled.h3 `
  font-size: 2em;
  margin: 0;
  position: relative;
  top: 25px;
  left: 125px;
  @media all and (max-width: 750px) {
    font-size: 1em;
  }
  color: rgba(0,0,0,0.8);
`;

const Experience = React.forwardRef((_, ref) => {
  return (
    <ExperienceContainer
      ref={ref}
    >
      <Heading3>
        02. Where I've Worked
      </Heading3>
      <ExperienceContent />
    </ExperienceContainer>
  )
})

export default Experience
