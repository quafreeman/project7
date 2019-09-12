import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigate = () => {
    return (
      <nav className="main-nav">
      <ul>
          
          <li><NavLink to='/pandas'>pandas</NavLink></li>
          <li><NavLink to='/stars'>stars</NavLink></li>
          <li><NavLink to='/cats'>cats</NavLink></li>
          
        </ul>
        </nav>
    )


    }




  export default Navigate;