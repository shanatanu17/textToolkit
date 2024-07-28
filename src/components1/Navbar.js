import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

 function Navbar(props)
{

    return(


      

        <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className="navbar-brand " href="#">{ props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        
      <li className="nav-item ">
          <Link className="nav-link active " aria-current="page" to="/ ">Home</Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link "to="/about ">{props.Home11} </Link>
        </li>
        

      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>

    

    {/* switch */}
    <div className={`form-check form-switch ${props.mode==='light'? 'dark':'light'}  `}>             
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changethemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
</div>
{/* switch */}


  </div>
</nav>


    
    )
}

export default Navbar;


Navbar.prototype = {
  title : PropTypes.string.isRequired, 
  Home11 :  PropTypes.string,
  color : PropTypes.string
}

Navbar.defaultProps = {
  title :'set Textutil here' , 
  Home11 :  'enter about us',
  color : 'blue'
}


