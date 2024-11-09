import React from 'react'

export default function MainContent() {
  return (
    <div>
      <main
      style={
        {
          backgroundColor: 'lightgray',
          color: 'black',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
        }
      }>
        <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
    </div>
  )
}

