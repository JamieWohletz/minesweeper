import React from 'react';
import './Menu.css';

export default (props) => {
  return (
    <div className="Menu">
      <button className="easy button" onClick={props.onEasyClick}>Easy (10x10)</button>
      <button className="medium button" onClick={props.onMediumClick}>Medium (15x15)</button>
      <button className="hard button" onClick={props.onHardClick}>Hard (23x23)</button>
    </div>
  );
}