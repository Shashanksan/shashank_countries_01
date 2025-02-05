import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios  from "axios"
import { Player } from '@lottiefiles/react-lottie-player';
import loaderAnimation from "./catloader.json"

import Light from './Light';
import './index.css'
export default function Countries() {
    const {cca2}=useParams();

    const [country,setcountry]=useState(null);

    
    useEffect(()=>{
         async function fetchData1()
         {
                   const resp1=await axios.get(`https://restcountries.com/v3.1/alpha/${cca2}`);
                   setcountry(resp1.data[0])
            }
 fetchData1()
},[cca2])



 return (
        
     
        <div className='countrydetails_main'>

          <div className="countrydetails_header">

          <div className="backto">
             <nav> <Link to="/">back to home</Link></nav> 
                </div>
          <div className="dark">
           <h1><Light color={"black"}/></h1>
           </div>
          
          </div>
           
{country?  <div className='singleCountry_info'>
        <div className="singleCountry_info_sub1">
          
     
      <img src={country.flags.png} alt="" />
      <h1>neighbouring countries:{(country.borders==undefined)?"no borders":<h1 id="borders">{country.borders.map(v=><h1><Link to={`/Countries/${v}`}>{v}</Link></h1>)}</h1>}</h1>
      </div>
      <div className="singleCountry_info_sub2">
      <li>name:- {country.name.common}</li>
      <li>continent:- {country.continents}</li>
      <li>capital:- {country.capital? <li>{country.capital}</li>:  <li>{"No capital"}</li>}</li>
      <li>population:-{country.population}</li>
      <li>languages:- {country.languages?Object.values(country.languages).join(','):<h1>{"no languages"}</h1>}</li>
      <li>tld:-{country.tld}</li>
      <h1 id="nativename">{ country.name.nativeName?Object.keys(country.name.nativeName).map((vkey)=>(<li key={vkey}>nativename:-{vkey}</li>) ):<li>native name:-{ "no native name"}</li>} </h1>

<h1>  {country.currencies?Object.values(country.currencies).map((v)=><li>currency name:-{v.name}{ " &  "}currency  symbol:-{v.symbol}</li>):<li>currency:-{"no currency"}</li>}</h1>
</div>

</div>: <h1>
<Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: '300px', width: '300px' }} // Adjust size as needed
      />
</h1>

}
</div>
 )
}
