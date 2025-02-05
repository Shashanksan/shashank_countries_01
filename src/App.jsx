import './App.css'
import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Countries_Main from './Countries_Main'
import Countries from './Countries.jsx'
import Light from './Light.jsx'
function App() {

  return (
  
   <BrowserRouter>
   <Routes>
     <Route path='/' Component={Countries_Main}/>
     <Route path='/Countries/:cca2' element={< Countries/>}/>
     <Route path='/Light' Component={Light}/>


    </Routes>
    </BrowserRouter>

    
  )
}
export default App
