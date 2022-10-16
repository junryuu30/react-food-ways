// import { Navbar, Container, Row, Col, Button,
// Badge, Dropdown, Modal
// } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useContext } from 'react';
// // import { CardContext } from '../Contexts/CardContext'

// import logoWaysFood from '../assets/logo-ways-food.svg';
// import userProfile from '../assets/profileUser.svg';
// import basket from '../assets/basket.svg';
// import userimg from '../assets/userimg.png';
// import logout from '../assets/logout.png';
// import profilePatner from '../assets/profilePatner.svg';
// import foodicon from '../assets/foodicon.png';


// const AllNavbarsTwo = () => {

//     const navigate = useNavigate();

//     // const {isLogin, setIsLogin} = useContext(LoginContext);
//     // const { dataCart, setDataCart } = useContext(CartContext);

//     const [userRole, setUserRole] = useState("");
//     const [showLogin, setShowLogin] = useState(false);
//     const [showRegister, setShowRegister] = useState(false);

//     return(
//         <>
//         {/* All Navbar */}
//         <Navbar expand="lg" className='navbar-fw' style={{}}>
//         <Container>
//           <Link to="/" style={{ textDecoration: 'none' }}>
//           <Navbar.Brand className='my-2'>
//             WaysFood 
//             <img src={logoWaysFood} alt=''/>
//           </Navbar.Brand>
//           </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>

//           {!isLogin ? (
//             //   Button Navbar Login / Register
//             <Row>
//               <Col className='col-lg-6 col-md-6 col-sm-12 my-2'>
//                   <Button variant="secondary" className="btn-nav me-3" style={{ width: '100%'}}
//                           onClick={() => setShowRegister(true)}
                          
//                           >Register</Button>
//               </Col>
//               <Col className='my-2'>
//                   <Button variant="secondary" className="btn-nav" style={{ width: '100%'}}
//                           onClick={() => setShowLogin(true)}>Login</Button>
//               </Col>
//           </Row>

//             ) : userRole === 'user' ? (

//             <>
//                  {/* Nav User  */}
//                 <img src={basket} alt='' className='me-2'
//                     onClick={()=> navigate('/cart-order')}
//                     style={{cursor:'pointer'}}/>
//                 <Badge style={{ width: "25px", height: "20px", marginLeft:'-20px' }}
//                 className="bg-danger badge">
//                     {/* {dataCard.cart?.length} */}
//                 </Badge>

//                 <Dropdown>
//                 <Dropdown.Toggle variant="warning" id="dropdown-basic" className='bg-dropdown'>
//                     <img src={userProfile} alt=''/>
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Item onClick={()=> navigate('/profile-user')}>
//                     <img src={userimg} alt='' className='drop-patner-icon'/>
//                     Profile
//                     </Dropdown.Item>
//                     <hr/>
//                     <Dropdown.Item>
//                     <img src={logout}  alt='' className='drop-patner-icon'/>
//                     Logout
//                     </Dropdown.Item>
//                 </Dropdown.Menu>
//                 </Dropdown>
//             </>
//             ):(
//             <>
//             {/* Nav Admin */}
//             <Dropdown>
//               <Dropdown.Toggle variant="warning" id="dropdown-basic" className='bg-dropdown'>
//                 <img src={profilePatner} alt=''/>
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={()=> navigate('/profile-patners')}>
//                   <img src={userimg} className='drop-patner-icon' alt=''/>
//                   Profile Partner
//                 </Dropdown.Item>

//                 <Dropdown.Item onClick={()=> navigate('/add-product')}>
//                 <img src={foodicon} className='drop-patner-icon' alt=''/>
//                   Add Product
//                 </Dropdown.Item>

//                 <hr/>
//                 <Dropdown.Item href="#/action-3">
//                   <img src={logout} className='drop-patner-icon' alt=''/>
//                   Logout
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//         </>
//             )}


//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//     )
// }