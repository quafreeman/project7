import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigate = () => {
    return (
      <nav className="main-nav">
      <ul>
          <li><NavLink to='/search'>Search</NavLink></li>
          <li><NavLink to='/Pandas'>Pandas</NavLink></li>
          <li><NavLink to='/Stars'>Stars</NavLink></li>
          <li><NavLink to='/Cats'>Cats</NavLink></li>
          
        </ul>
        </nav>
    )


    }




  export default Navigate;