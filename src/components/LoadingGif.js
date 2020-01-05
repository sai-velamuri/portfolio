import React from 'react';
import LoadingGifIcon from '../assets/loadingscreen.gif';

const loadingGifStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export default function LoadingGif() {
  return (
    <div 
      style={loadingGifStyle}
    >
      <img 
        src={LoadingGifIcon} 
        alt='loadingGif'
        style={{
          width: '200px',
          height: '150px'
        }}
      />
    </div>
  )
}