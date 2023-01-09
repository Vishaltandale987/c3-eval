import React from 'react'
import Project from '../../components/Project'

function index({repodata}) {
    console.log(repodata.items)
  return (
    <div>
        <h1><b>Project Page</b></h1>
            {
                repodata.items.map((e) => (
                

                    <div

                    key={e.id}
                    style={{
                        "display":"grid",
                        "gridTemplateColumns":"repeat(2, 1fr)" ,
                        "border": "1px solid black",
                        "textAlign":"center",
                        width:"30%",
                        backgroundColor:"#385898",
                        color:"white",
                        "marginTop":"30px"

                    }}
                    >

                    <Project 
                    // key={e.id}
                    name={e.full_name}
                    lan = {e.language}
                    fork = {e.forks}
                    wat = {e.watchers}
                    
                    />
                    {/* </div> */}
                    </div>
                ))
            }
    </div>
  )
}

export default index


export async function getStaticProps() {
    let res = await fetch(`https://api.github.com/search/repositories?q=user:Vishaltandale987+fork:true&sort=updated&per_page=10&type=Repositories`)
  
    let data = await res.json()
    return{
      props:{
        repodata:data
      }
    }
  }