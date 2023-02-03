// import React, { useEffect, useState } from 'react'
// import "./Style.css"
// import { CSSTransition } from "react-transition-group";
// import {NavLink} from "react-router-dom"

// const Header = () => {
//   const [isNavVisible , setNavVisibility]= useState(false);
//   const [isSmallScreen , setIsSmallScreen] = useState(false);

//   useEffect(()=>{
//     const mediaQuery = window.matchMedia("(max-width : 700px)");
//     mediaQuery.addEventListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);
//     return ()=>{
//       mediaQuery.removeEventListener(handleMediaQueryChange);
//     };

//   },[])
//   const handleMediaQueryChange = mediaQuery =>{
//     if(mediaQuery.matches){
//       isSmallScreen(true)
//     }else{
//       isSmallScreen(false)
//     };
//   };
  
//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
//   return (

 
//     <>
    
//       <nav>
//       <h3 className='green'>Sanjeevan<span className='pink'>Stro</span>^</h3>
//   <ul className='green'>
//       <li><NavLink to="/shop">Shop</NavLink></li>
//       <li><NavLink to="/about-us">About Us</NavLink></li>
//       <li><NavLink to="/contact-us">Contact Us</NavLink></li>
//       <li><NavLink to="/login">Login</NavLink></li>
//       <li><NavLink to="/sign-up">Sign Up</NavLink></li>
//   </ul>
//  </nav>
//  <button type="" onClick={toggleNav} className="star" >🌟</button></>

//   )
// }

// export default Header
                                                                                                                    
import React, { useEffect, useState } from 'react'
import "./Style.css"
import { CSSTransition } from "react-transition-group";
import {NavLink} from "react-router-dom"

const Header = () => {
  const [isNavVisible , setNavVisibility]= useState(false);
  const [isSmallScreen , setIsSmallScreen] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width : 700px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return ()=>{
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };

  },[])
  const handleMediaQueryChange = mediaQuery =>{
    setIsSmallScreen(mediaQuery.matches)
  };
  
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
    
    // console.log("toggle")
  };
  return (

 
    <>
    
      <nav className={`nav ${isNavVisible ? "nav-visible" : ""}`}>
      <h3 className='green'>Sanjeevan<span className='pink'>Stro</span>^</h3>
      <button  isSmallScreen="true"onClick= {toggleNav}
      
     class="navbar-toggler collapsed" 
    data-target="#navbarsExampleDefault" 
    data-toggle="collapse">
      
        <span class="line"></span> 
        <span class="line"></span> 
        <span class="line"></span>
 </button>  
  <ul className='green'>

      <li><NavLink to="/shop">Shop</NavLink></li>
      <li><NavLink to="/about-us">About Us</NavLink></li>
      <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/sign-up">Sign Up</NavLink></li>
      <li><NavLink to="/goals">Goals</NavLink></li> 
       </ul>
 </nav>
 </>
 

  )
} 

export default Header

