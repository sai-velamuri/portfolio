import React from 'react';
import emailInfo from '../../config/email';
import styled, { keyframes } from 'styled-components';

const aboutAnimation = keyframes`
  from {
    top: 25px;
    color: grey;
    visibility: hidden;
  }
  to {
    top: 5px;
    color: silver;
  }
`;

const AboutContainer = styled.section`
  display: flex;
  min-height: 100vh;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 150px;
  background-color: black;
  font-family: "SF Pro Text";
`;

const Heading1 = styled.h4`
  font-size: 1em;
  position: relative;
  margin: 0 0 10px 5px;
  animation: ${aboutAnimation} 0.75s;
  animation-fill-mode: both;
  @media all and (max-width: 750px) {
    margin-left: 5px;
  };
`;

const Heading2 = styled.h1`
  font-size: 4em;
  position: relative;
  animation: ${aboutAnimation} 0.75s;
  animation-fill-mode: both;
  animation-delay: 0.3s;
  margin: 0 0 10px 0;
  @media all and (max-width: 750px) {
    font-size: 3em;
    margin-left: 3px;
  };
`;

const Heading3 = styled.h3`
  font-size: 2em;
  position: relative;
  animation: ${aboutAnimation} 0.75s;
  animation-fill-mode: both;
  animation-delay: 0.6s;
  margin: 0 0 10px 3px;
  @media all and (max-width: 750px) {
    font-size: 1em;
    margin-left: 7px;
  };
`;

const AboutDescription = styled.div`
  max-width: 600px;
  position: relative;
  margin: 0 0 10px 7px;
  font-size: 1em;
  animation: ${aboutAnimation} 0.75s;
  animation-fill-mode: both;
  animation-delay: 0.8s;
`;

const GetInTouch = styled.div`
  position: relative;
  animation: ${aboutAnimation} 2s;
  animation-delay: 0.9s;
  animation-fill-mode: both;
  margin-top: 20px;
  margin-left: 7px;
`;

const AnchorTag = styled.a`
  border: 1px solid silver;
  border-radius: 5px;
  text-decoration: none;
  color: silver;
  padding: 10px;
  &:hover {
    font-weight: bold;
    color: white;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <Heading1>
        Hi, my name is 
      </Heading1>
      <Heading2>
        Sarath Velamuri.
      </Heading2>
      <Heading3>
        I build web applications.
      </Heading3>
      <AboutDescription>
        I'm a software engineer based in Toronto, ON
        specializing in building and occassionally exceptional,
        high-quality websites and applications.
      </AboutDescription>
      
      <GetInTouch>
        <AnchorTag 
          href={`mailto:${emailInfo.email}?cc=${emailInfo.cc}&subject=Exciting%20Opportunity`}
        >
          Get in Touch
        </AnchorTag>
      </GetInTouch>
    </AboutContainer>
  )
}
