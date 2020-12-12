import React from 'react'

// using `this.children` allows us to create a component, like <Scroll></Scroll> (see App.js), that can wrap around HTML-like React elements.
const Scroll = (props) => {
  // console.log(props)
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '850px' }}>
      {props.children}
    </div>
  )
}

export default Scroll
