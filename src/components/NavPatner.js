import {Navbar, Container, Dropdown} from 'react-bootstrap';
import logoWaysFood from '../assets/logo-ways-food.svg';
import profilePatner from '../assets/profilePatner.svg';
import basket from '../assets/basket.svg';
import userimg from '../assets/userimg.png'
import logout from '../assets/logout.png'
import foodicon from '../assets/foodicon.png'
// import React, { useState } from 'react';
 

function NavPatner() {
  return (
    <>
      <Navbar expand="lg" className='navbar-fw' style={{}}>
        <Container>
          <Navbar.Brand href="/">
            WaysFood 
            <img src={logoWaysFood} alt=''/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>
            <img src={basket} className='me-2' alt=''/>
            
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" className='dropdown-patner'>
                <img src={profilePatner} alt=''/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img src={userimg} className='drop-patner-icon' alt=''/>
                  Profile Partner
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                <img src={foodicon} className='drop-patner-icon' alt=''/>
                  Another action
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