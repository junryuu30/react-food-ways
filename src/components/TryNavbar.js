import { Navbar, Container, Row, Col, Button,
         Badge, Dropdown, Modal
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CardContext } from '../Contexts/CardContext'

import logoWaysFood from '../assets/logo-ways-food.svg';
import userProfile from '../assets/profileUser.svg';
import basket from '../assets/basket.svg';
import userimg from '../assets/userimg.png';
import logout from '../assets/logout.png';
import profilePatner from '../assets/profilePatner.svg';
import foodicon from '../assets/foodicon.png';
// import { useCol } from 'react-bootstrap/esm/Col';


const TryNavbar = () => {
  
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
            { isAdmin ?
            <AdminPage logoutAdmin={() => setIsAdmin(!isAdmin)}/> : 
            isLoggedin ?
            <PrivatePage logout={() => setIsLoggedin(!isLoggedin)}/>
              : <GuestPage  loginAdmin={() => setIsAdmin(!isAdmin)} login={() => setIsLoggedin(!isLoggedin)}/>
              }  
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>

    )
};


// Navbar for Private page

const PrivatePage = () => {
    const navigate = useNavigate();

    const [dataCard] = useContext(CardContext);

    return(
        <>
            <img src={basket} alt='' className='me-2'
              onClick={()=> navigate('/cart-order')}
              style={{cursor:'pointer'}}
            />
            <Badge style={{ width: "25px", height: "20px", marginLeft:'-20px' }}
            className="bg-danger badge">
                {dataCard.cart?.length}
            </Badge>

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
        </>
    );
};


// Navbar Before LogIn
const GuestPage = () => {
    //register
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  }

  //login
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  }

    return(
        <>
        
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
              <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder='Email'/>
            </div>

            <div className="mb-3">
              <input 
              type="password" 
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder='Password'/>
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
};


const AdminPage = () => {
    const navigate = useNavigate()

    return(
        <>
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
        </>
    )
};


export default TryNavbar