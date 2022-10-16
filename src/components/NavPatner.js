import {Navbar, Container, Dropdown} from 'react-bootstrap';
import logoWaysFood from '../assets/logo-ways-food.svg';
import profilePatner from '../assets/profilePatner.svg';

import userimg from '../assets/userimg.png'
import logout from '../assets/logout.png';
import foodicon from '../assets/foodicon.png';
import {Link, useNavigate} from 'react-router-dom';
// import React, { useState } from 'react';
 

function NavPatner() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className='navbar-fw' style={{}}>
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand>
            WaysFood 
            <img src={logoWaysFood} alt=''/>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>
            
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" className='bg-dropdown'>
                <img src={profilePatner} alt=''/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> navigate('/profile-patners')}>
                  <img src={userimg} className='drop-patner-icon' alt=''/>
                  Profile Partner
                </Dropdown.Item>

                <Dropdown.Item onClick={()=> navigate('/add-product')}>
                <img src={foodicon} className='drop-patner-icon' alt=''/>
                  Add Product
                </Dropdown.Item>

                <hr/>
                <Dropdown.Item href="#/action-3">
                  <img src={logout} className='drop-patner-icon' alt=''/>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
    
  );
}

export default NavPatner;