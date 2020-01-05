import React from 'react';
import LoadingGifIcon from '../assets/loadingscreen.gif';

const loadingGifStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw'
}

export default function LoadingGif() {
  return (
    <div 
      style={loadingGifStyle}
    >
      <img 
        src={LoadingGifIcon} 
        alt='loadingGif'
        style={{}}
      />
    </div>
  )
}