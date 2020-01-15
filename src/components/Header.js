import React, { useState } from 'react';
import resume from '../assets/SarathVelamuri.pdf';
import styled, { keyframes } from 'styled-components';

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

const open = keyframes`
  from {
    height: 0;
    opacity: 0;
  }

  to {
    height: 100vh;
    opacity: 1;
  }
`;

const close = keyframes`
  from {
    height: 100vh;
    opacity: 1;
  }
  
  to {
    height: 0;
    opacity: 0;
  }
`;

const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: wrap;
`;

const HeaderList = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0 25px 0 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media all and (max-width: 750px) {
    display: none;
  }
`;

const HeaderListItem = styled.li`
  padding: 10px;
  float: right;
`;

const ItemButton = styled.button`
  border: none;
  background: none;
  color: silver;
  outline: none;
  text-decoration: none;
  font-size: 0.9em;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const ResponsiveHeader = styled.div`
  width: 100%;
  display: none;
  padding: 10px;
  @media all and (max-width: 750px) {
    display: block;
  }
`;

const MenuButton = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const MenuButtonItem = styled.li`
  height: 1px;
  width: 20px;
  border-radius: 3px;
  background-color: white;
  margin-bottom: 5px;
  margin-right: 15px;
`;

const SideBar = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: silver;
  animation: ${props => {
    return props.keyframe ? open : close
    }
  } 1s;
  animation-fill-mode: both;
`;

const OrderedList = styled.li`
  color: red;
  height: 0;
  width: 100vw;
  opacity: 0;
  background-color: silver;
  animation: ${props => {
    return props.keyframe ? open : close
    }
  } 1s;
  animation-fill-mode: both;
`;

export default function Header({ scrollToFront }) {
  const [toggleSideBar, setToggleSideBar] = useState(false)
  const [init, setInit] = useState(false);

  const sideBar = () => {
    setToggleSideBar(!toggleSideBar);
    if (!init) {
      setInit(true);
    }
  };

  return (
    <HeaderContainer>
      <HeaderList>
        {
          headerListItems.map(item => (
            <HeaderListItem key={item.display}>
              { item.display.toLowerCase() === 'resume' ? 
                <a
                  aria-label={item.display}
                  href={resume} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.display}  
                </a>
                
                : 
                <ItemButton
                  onClick={() => scrollToFront(item.emit)}
                  aria-label={item.emit}
                >
                  {item.display}
                </ItemButton>
              }
            </HeaderListItem>
          ))
        }
      </HeaderList>
      <ResponsiveHeader>
        <MenuButton onClick={sideBar}>
          <MenuButtonItem></MenuButtonItem>
          <MenuButtonItem></MenuButtonItem>
        </MenuButton>
      </ResponsiveHeader>
      {
        init ? (
        <SideBar keyframe={toggleSideBar}>
          <OrderedList keyframe={toggleSideBar}>
            About
          </OrderedList>
        </SideBar>
        ) : ''
      }
    </HeaderContainer>
  )
}
