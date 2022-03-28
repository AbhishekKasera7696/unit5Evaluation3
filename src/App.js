import React from 'react';
import "./App.css";
import {Navbar} from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import {Home} from './Components/Home';
import { Login } from './Components/Login';

import {Register} from './Components/Register';
import { Products } from './Components/Products';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
        
           <Route path='/Home' element={< Home />}/>
           <Route path='/Login'  element={<Login/>}/>
           <Route path='/Products'  element={<Products/>}/> 
           <Route path='/Register'  element={<Register/>}/> 
             
            

        </Routes>
    </div>
        
       

       
  )
}

export default App
