import React from 'react';
import resume from '../assets/SarathVelamuri.pdf';
import styled from 'styled-components';

const headerListItems = [
  {
    display: '01. About',
    emit: 'AboutMe'
  },
  {
    display: '02. Experience',
    emit: 'Experience'
  },
  {
    display: '03. Contact',
    emit: 'Contact'
  },
  { display: 'Resume'}
];

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(0,0,0,0.8);
  font-family: "SF Pro Text";
`;

const HeaderList = styled.ul`
  list-style-type: none;
  margin: 0 25px 0 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const HeaderListItem = styled.li`
  padding: 10px;
`;

const ItemButton = styled.button`
  border: none;
  background: none;
  color: silver;
  outline: none;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  color: silver;
  &:hover {
    color: white;
  }
`;

export default function Header({ scrollToFront }) {
  return (
    <HeaderContainer>
      <HeaderList>
        {
          headerListItems.map(item => (
            <HeaderListItem key={item.display}>
              { item.display.toLowerCase() === 'resume' ? 
                <ItemButton>
                  <ResumeButton 
                    href={resume} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.display}
                  </ResumeButton>  
                </ItemButton>
                
                : 
                <ItemButton
                  onClick={() => scrollToFront(item.emit)}
                >
                  {item.display}
                </ItemButton>
              }
            </HeaderListItem>
          ))
        }
      </HeaderList>
    </HeaderContainer>
  )
}
