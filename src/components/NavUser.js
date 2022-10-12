import {Navbar, Container, Dropdown} from 'react-bootstrap';
import logoWaysFood from '../assets/logo-ways-food.svg';
import userProfile from '../assets/profileUser.svg';
import basket from '../assets/basket.svg';
import userimg from '../assets/userimg.png'
import logout from '../assets/logout.png'
// import React, { useState } from 'react';
 

function NavUser() {
  return (
    <>
      <Navbar expand="lg" className='navbar-fw'>
        <Container>
          <Navbar.Brand href="/">
            WaysFood 
            <img src={logoWaysFood}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>
            <img src={basket} className='me-2'/>

            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" className='dropdown-patner'>
                <img src={userProfile}/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img src={userimg} className='drop-patner-icon'/>
                  Profile Partner
                </Dropdown.Item>
                <hr/>
                <Dropdown.Item href="#/action-3">
                  <img src={logout} className='drop-patner-icon'/>
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

export default NavUser;