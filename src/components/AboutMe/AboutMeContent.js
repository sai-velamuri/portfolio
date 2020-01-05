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
  color: #666666;
`;

const AboutMeContentLeftDiv = styled.div`
  width: 70%;
  @media all and (max-width: 770px) {
    display: block;
    width: 100%;
  }
`;

const SkillSetContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  padding: 0;
  margin: 15px 0 15px 19px;
  height: 100px;
`;

const AboutMeDisplayPic = styled.img`
  width: 220px;
  height: 300px;
  border-radius: 10px;
`;

const AboutMeDisplayPicDiv = styled.div`
  width: 220px;
  @media all and (max-width: 770px) {
    margin: auto;
  }
`;

const UniversityButton = styled.a`
  text-decoration: none;
  color: #2997ff;
  &:hover {
    color: #06C;
  }
`;

export default function AboutMeContent() {
  return (
    <AboutMeContentContainer>
      <AboutMeContentLeftDiv>
        {aboutMeContent1}
        <UniversityButton
          href="https://www.colostate.edu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Colorado State University
        </UniversityButton>
        {aboutMeContent2}
        <SkillSetContainer>
          {skillSet.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </SkillSetContainer>
      </AboutMeContentLeftDiv>
      <AboutMeDisplayPicDiv>
        <AboutMeDisplayPic src={displayPic} alt="displaypic" />
      </AboutMeDisplayPicDiv>
    </AboutMeContentContainer>
  );
}