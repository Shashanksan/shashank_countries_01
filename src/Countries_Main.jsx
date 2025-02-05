import './index.css'
import Header from './Header'
import axios from 'axios'

import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderAnimation from "./catloader.json"


import { Link } from 'react-router-dom'

export default function Countries_Main() 
{


   const  [load,setload]= useState(true)
   const  [region,setregion]= useState("All")
    const [result,setresult]= useState([])
    const [filtered,setfiltered]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>
      {
        async function fetchdata()
  {
          const resp =await  axios.get("https://restcountries.com/v3.1/all")
          setresult(resp.data)
          setload(false)
  }    
  fetchdata()
  console.log(result);
  
},[])
    

  useEffect(()=>{

         const filters =result.filter((v)=>{
            const filt = v.name.common.toLowerCase().includes(search.toLowerCase())
            const regions =  region === "All" || v.region === region 
           return filt && regions

       });
      setfiltered(filters)   
     

      
      }      
       ,[result,region,search])

   
      
return (
    <>

  <Header />

   <div className="main_contain">
   <div className="byName">
   <input type="text" className='byName'  placeholder='Search by name...' value={search} onChange={(e)=>{setSearch(e.target.value)}}  />

   </div>
   <div className="byRegion">
            <select className='byRegion'   onChange={(e)=>setregion(e.target.value)}   value={region}  >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
            </select>
   </div> 
   
</div>
        {load?( <h1>
<Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: '300px', width: '300px' }} 
      />
</h1>):
<div className="countries">
{


filtered.map((v,id)=>(
<div className="countries_info">
<nav>
<Link to={`/Countries/${v.cca2}`} key={v.cca2} className=''> 
<div  className='countries_sub' key={id}>

<img  src={v.flags.png} alt="" />
<h3 id="name">{ v.name.common}</h3>
<h3 id="population">Population:{" "}{v.population}</h3>
<h3 id="region">Region:{v.region}</h3>
<h3 id="capital">{" "}{v.capital? <h1>Capital:{v.capital}</h1>:  <h1> Capital:{"No capital"}</h1>}</h3>
</div>

</Link>
</nav>
</div>
))  
}

</div>
}


</>

  )
}
