import React, { useState } from 'react';
import '../styles/Experience.css';
import companyData from '../data/companyExp';

const experienceContent = {
  display: 'flex'
}

export default function ExperienceContent() {
  const companiesWorked = ['Apple, Inc', 'Apple, Inc', 'TCS']
  const [state, setState] = useState(0)

  const setBorder = (e) => {
    if (e.target && e.target.tagName === 'LI') {
      setState(+e.target.className[0])
    }
  };

  return (
    <div style={experienceContent}>
      <ul 
        className='experience_list'
        onClick={(e) => setBorder(e)}
      >
        {
          companiesWorked.map((company, index) => (
            <li 
              className={`${index} experience__list__items ${state===index ? 'border__left': ''}`}
              key={`${index}_company`}>
              {company}
            </li>
          ))
        }
      </ul>
      <div>
      <h3>{companyData[state].role}</h3>
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
    </div>
  )
}