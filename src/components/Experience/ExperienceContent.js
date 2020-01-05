import React, { useState } from 'react';
import companyData from '../../data/companyExp';
import styled from 'styled-components';

const ExperienceContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  padding: 20px;
  color: #666666;
`;

const ExperienceContentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
  
const ExperienceContentListItem = styled.li`
  border-left: 2px solid #969696;
  padding: 8px;
  color: #969696;
  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0, 0.8);
    borderLeft: '2px solid rgb(0, 0, 0, 0.8)',
    border-radius: 0 5px 5px 0;
  }
`;


export default function ExperienceContent() {
  const [state, setState] = useState(0)

  const setBorder = (e, index) => {
    if (e.target && e.target.tagName === 'LI') {
      setState(index)
    }
  };

  return (
    <ExperienceContentContainer>
      <ExperienceContentList>
        {
          Object.values(companyData).map((company, index) => (
            <ExperienceContentListItem 
              style={ state === index ?
                {
                  color: 'black',
                  borderLeft: '2px solid rgb(0, 0, 0, 0.8)',
                  backgroundColor: 'rgb(230, 230, 230, 0.5)',
                  borderRadius: '0 5px 5px 0'
                }  : {}}
              onClick={(e) => setBorder(e, index)}
              key={`${index}_company`}>
              {company.client}
            </ExperienceContentListItem>
          ))
        }
      </ExperienceContentList>
      <div style={{
          minWidth: '500px',
          maxWidth: '750px',
          minHeight: '500px',
      }}>
      <h3 style={{
        margin: 0
      }}>{companyData[state].role}</h3>
      <h4>{companyData[state].location}</h4>
      <h5>{companyData[state].duration}</h5>
      <ul>
        {
          companyData[state].points.map((point, index) => (
            <li key={index}>{point}</li>
          ))
        }
      </ul>
      </div>
    </ExperienceContentContainer>
  )
}
