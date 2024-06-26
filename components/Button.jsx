// components/Button.js
import React from 'react';

const Button = () => {
  const buttonStyles = {
    position: 'relative',
    height: '50px',
    padding: '0 30px',
    border: '2px solid #000',
    background: '#e8e8e8',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    transition: 'all 0.05s linear',
    fontFamily: 'inherit',
    cursor: 'crosshair', // Added for hover effect
    boxSizing: 'border-box',
    zIndex: '1', // Ensure content is above pseudo-elements
  };

  const beforeStyles = {
    content: '""',
    position: 'absolute',
    background: '#e8e8e8',
    transition: 'all 0.2s linear',
    width: 'calc(100% + 6px)',
    height: 'calc(100% - 16px)',
    top: '8px',
    left: '-3px',
  };

  const afterStyles = {
    content: '""',
    position: 'absolute',
    background: '#e8e8e8',
    transition: 'all 0.2s linear',
    width: 'calc(100% - 16px)',
    height: 'calc(100% + 6px)',
    top: '-3px',
    left: '8px',
  };

  const handleHover = () => {
    beforeStyles.height = 'calc(100% - 32px)';
    beforeStyles.top = '16px';
    afterStyles.width = 'calc(100% - 32px)';
    afterStyles.left = '16px';
  };

  const handleHoverOut = () => {
    beforeStyles.height = 'calc(100% - 16px)';
    beforeStyles.top = '8px';
    afterStyles.width = 'calc(100% - 16px)';
    afterStyles.left = '8px';
  };

  const handleActive = () => {
    buttonStyles.transform = 'scale(0.95)';
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onMouseDown={handleActive}
      onMouseUp={handleHoverOut}
    >
      <span style={{ zIndex: '3', position: 'relative', fontWeight: '600' }}>Button Text</span>
      <span style={{ ...beforeStyles }}></span>
      <span style={{ ...afterStyles }}></span>
    </button>
  );
};

export default Button;
