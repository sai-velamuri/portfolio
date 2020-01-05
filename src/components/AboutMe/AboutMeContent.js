import React from 'react';
import styled from 'styled-components';
import {
  aboutMeContent1,
  aboutMeContent2,
  skillSet
} from '../../content/content';

import displayPic from '../../assets/displayPic.jpeg';

const AboutMeContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  @media all and (max-width: 750px) {
    display: block;
    font-size: 0.8em;
  }
`;

const AboutMeContentLeftDiv = styled.div`
  width: 70%;
  @media all and (max-width: 750px) {
    display: block;
    width: 100%;
  }
`;

const SkillSetContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  padding: 0;
  margin: 15px 0 15px 14px;
  height: 100px;
`;

const AboutMeDisplayPic = styled.img`
  width: 220px;
  height: 300px;
  border-radius: 10px;
`;

const AboutMeDisplayPicDiv = styled.div`
  width: 220px;
  @media all and (max-width: 750px) {
    margin: auto;
  }
`;

export default function AboutMeContent() {
  return (
    <AboutMeContentContainer>
      <AboutMeContentLeftDiv>
        {aboutMeContent1} 
        <a 
          href='https://www.colostate.edu/' 
          style={{
            color: 'rgb(101, 224, 167)', 
            textDecoration: 'none'
          }} 
          target='_blank'
        >
          Colorado State University
        </a>
        {aboutMeContent2}
        <SkillSetContainer>
            {
              skillSet.map(skill => 
                <li
                  key={skill}
                >
                  {skill}
                </li>)
            }
          </SkillSetContainer>
      </AboutMeContentLeftDiv>
      <AboutMeDisplayPicDiv>
        <AboutMeDisplayPic
          src={displayPic} 
          alt='displaypic' 
        />
      </AboutMeDisplayPicDiv>
    </AboutMeContentContainer>
  )
}