import React from 'react'

function Project({name,  lan, fork, wat}) {
  return (
    <div style={{
        "display":"grid",
        "gridTemplateColumns":"repeat(2, 1fr)"
    }}>
        <div>
          {/* <p>{key}</p> */}
        <h1>{name}</h1>
        <h1>{lan}</h1>
        <h1>Fork - {fork}</h1>
        <h1>Star - {wat}</h1>
        </div>
    </div>
  )
}

export default Project