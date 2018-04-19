import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>This is my first assignment.</p>
      <p>I am very much excited.</p>
      <p>Username: {props.userName} </p>
    </div>
  )
};

export default userOutput;
