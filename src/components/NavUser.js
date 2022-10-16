import {Navbar, Container, Dropdown, Badge} from 'react-bootstrap';
import logoWaysFood from '../assets/logo-ways-food.svg';
import userProfile from '../assets/profileUser.svg';
import basket from '../assets/basket.svg';
import userimg from '../assets/userimg.png';
import logout from '../assets/logout.png';
// import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import {Link, useNavigate} from 'react-router-dom';

 

function NavUser() {
  const navigate = useNavigate();
  const { dataCart, setDataCart } = useContext(CartContext);

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
            <img src={basket} alt='' className='me-2'
              onClick={()=> navigate('/cart-order')}
              style={{cursor:'pointer'}}
            />
            {dataCart.length > 0 && (
            <Badge style={{ width: "25px", height: "20px", marginLeft:'-20px' }}
            className="bg-danger badge">
              {dataCart.length}
            </Badge>
            )}

            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" className='bg-dropdown'>
                <img src={userProfile} alt=''/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> navigate('/profile-user')}>
                  <img src={userimg} alt='' className='drop-patner-icon'/>
                  Profile
                </Dropdown.Item>
                <hr/>
                <Dropdown.Item>
                  <img src={logout}  alt='' className='drop-patner-icon'/>
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