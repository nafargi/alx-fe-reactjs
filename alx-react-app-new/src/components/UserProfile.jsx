
import React from 'react'

const UserProfile = (props) => {
    return (
      <div style={{
        boreder: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: 'red',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }}>
        <h2 style={{ color: 'blue'}}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight : 'bold'}}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
  