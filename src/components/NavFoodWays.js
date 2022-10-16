import {Container, Row, Col, Navbar, Button, Modal} from 'react-bootstrap';
import logoWaysFood from '../assets/logo-ways-food.svg';
import React, { useState } from 'react';
import {Link} from "react-router-dom";



function NavFoodWays() {
  //register
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };


  //login
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  

  return (
    <>
      <Navbar expand="lg" className='navbar-fw' style={{}}>
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='my-2'>
            WaysFood 
            <img src={logoWaysFood} alt=''/>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>
            <Row>
              <Col className='col-lg-6 col-md-6 col-sm-12 my-2'>
                <Button variant="secondary" className="btn-nav me-3" style={{ width: '100%'}}
                        onClick={handleShowRegister}>Register</Button>
              </Col>
              <Col className='my-2'>
                <Button variant="secondary" className="btn-nav" style={{ width: '100%'}}
                        onClick={handleShowLogin}>Login</Button>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleCloseLogin}>

        <Modal.Body className='form-login'>
          <form className='form-auth'>
            <h3 className='mt-4' style={{color:'#FFC700'}}>Login</h3>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div>
            <Button variant="secondary" size="sm" style={{width:'100%'}} className="btn-nav" onClick={handleCloseLogin}>Login</Button>
            </div>
            <p className='text-align-center p-2'>Don't have an account ?
              <span onClick={handleShowRegister} style={{fontWeight:'bold', cursor:'pointer'}}> Klik Here </span>
            </p>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>

        <Modal.Body className='form-login'>
          <form className='form-auth'>
            <h3 className='mt-4' style={{color:'#FFC700'}}>Register</h3>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
            </div>

            <div className="mb-3">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Gender'/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone'/>
            </div>

            <select className="form-select mb-3" aria-label="Default select example">
              <option selected>Who Me</option>
              <option value="1">As User</option>
              <option value="2">As Patner</option>
            </select>

            <div>
            <Button variant="secondary" size="sm" style={{width:'100%'}} className="btn-nav"  onClick={handleCloseRegister}>Register</Button>
            </div>
            <p className='text-align-center p-2'>Already have an account ?  
              <span onClick={handleShowLogin} style={{fontWeight:'bold', cursor:'pointer'}}> Klik Here </span>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
    
  );
}

export default NavFoodWays;