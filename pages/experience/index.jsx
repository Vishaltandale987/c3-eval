import React from 'react'

function index({apidata}) {
  return (
    <div>
        <h1><b>Experience Page</b></h1>
        <div
        style={{
          // "display":"flex",
          // "flexDirection":"row",
          "paddingTop":"20px",
          // backgroundColor:"#385898"
        }}
        >
          <h1>Experience</h1>
        <h1>{apidata.company}</h1>
        </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
    let res = await fetch(`https://api.github.com/users/Vishaltandale987`)
  
    let data = await res.json()
    return{
      props:{
        apidata:data
      }
    }
  }