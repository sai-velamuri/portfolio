import React from 'react';
import emailInfo from '../../config/email';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  min-height: 100vh;
  flex-flow: column wrap;
  justify-content: center;
`;

const Heading1 = styled.h4`
  font-size: 1em;
  margin: 0 0 10px 5px;
  @media all and (max-width: 750px) {
    margin-left: 5px;
  }
`;

const Heading2 = styled.h1`
  font-size: 4em;
  margin: 0 0 10px 0;
  @media all and (max-width: 750px) {
    font-size: 3em;
    margin-left: 3px;
  }
`;

const Heading3 = styled.h3`
  font-size: 2em;
  margin: 0 0 10px 3px;
  @media all and (max-width: 750px) {
    font-size: 1em;
    margin-left: 7px;
  }
`;

const AboutDescription = styled.div`
  max-width: 600px;
  margin: 0 0 10px 7px;
  font-size: 1em;
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
      

      {/* 
        Get to this button later, maybe turn this into a 
        re-usable component
      */}
      <div className='get__in__touch'
        style={{
          marginLeft: '7px',
          marginTop: '20px'
        }}
      >
        <a 
          href={`mailto:${emailInfo.email}?cc=${emailInfo.cc}&subject=Exciting%20Opportunity`}
          style={{
            border: '1px solid #65e0a7',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#e5e4e2',
            padding: '10px',
            }}>
          Get in Touch
        </a>
      </div>
    </AboutContainer>
  )
}