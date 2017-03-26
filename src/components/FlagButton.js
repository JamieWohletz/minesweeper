import React from 'react';
import './FlagButton.css';

export default (props) => {
  return (
    <button className={`FlagButton button ${props.flagMode ? 'flagMode' : ''}`} onClick={props.onToggle}>
      ⚑ Flag
    </button>
  )
};