import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Styling = styled(Link) `

// margin-right:10px;
// text-decoration:none;
// color:black;

// ` 

const Navbar = () => {
  return (
    <div>
       <Link  to='/Home'>Home</Link >
       <Link  to='/Login'>Login</Link >
       <Link  to='/Products'>Products</Link >
       <Link  to='/Register'>Register</Link >
     
       
    </div>
  )
}

export {Navbar}