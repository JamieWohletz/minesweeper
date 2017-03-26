import React from 'react';
import './ModeButton.css';

export default (props) => {
  return (
    <button className={`ModeButton ${props.flagMode ? 'flagMode' : ''}`} onClick={props.onToggle}>
      ⚑ Flag
    </button>
  )
};