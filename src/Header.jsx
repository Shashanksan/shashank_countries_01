
import { Link } from 'react-router-dom'
import './index.css'

import Light from './Light'

export default function Header() {
 

  return (
     <div className='header_contain'>
        <h1>Where in the world</h1>
      <h1 id="switch"><Light/></h1>
         </div>
  )
}
