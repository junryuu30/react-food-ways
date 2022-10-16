// import { Modal, Button, Form } from 'react-bootstrap';
// import { useState } from 'react';
// import User from '../../components/dataDummy/User' 

// const Login = ({
//     show,
//     setShow,
//     setShowRegister,
//     isLogin,
//     setIsLogin,
//     setUserRole,
//   }) => {

//     const handleClose = () => setShow(false);
  
//     const [userLogin, setUserLogin] = useState({
//       email: "",
//       password: "",
//       role: "user",
//     });
  
//     function successLogin(email, password) {
//       let statusMessage;
//       const emailCheck = User.filter((field) => field.email === email);
  
//       if (emailCheck.length === 0) {
//         statusMessage = "Email belum terdaftar";
//         return {
//           status: false,
//           message: statusMessage,
//         };
//       }
  
//       const result = User.filter((field) => field.password === password);
  
//       if (result.length === 0) {
//         statusMessage = "Password Anda Salah";
//         return {
//           status: false,
//           message: statusMessage,
//         };
//       }

//       statusMessage = "Login success";
//       return {
//         status: true,
//         message: statusMessage,
//         user: result[0],
//       };
//     }
  
//     return (
//       <>
//          <Modal show={show} onHide={handleClose}>
//             <Modal.Body className='form-login'>
//             {statusMessage != "" && 
//           <p className={!isLogin ? 'text-danger' : 'text-success'}>{statusMessage}</p>
//         }
//             <Form>
//             <h3 className='mt-4' style={{color:'#FFC700'}}>Login</h3>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control 
//                     label="Email"
//                     type="email"
//                     placeholder="Email"
//                     value={userLogin.email}
//                     onChange={(e) =>
//                       setUserLogin({ ...userLogin, email: e.target.value })
//                     } />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control 
//                 label="Password"
//                 type="password"
//                 placeholder="Password"
//                 value={User.password}
//                 onChange={(e) =>
//                   setUserLogin({ ...userLogin, password: e.target.value })
//                 } />
//             </Form.Group>
            
//             <div>
//                 <Button variant="secondary" size="sm" style={{width:'100%'}} className="btn-nav" 
//                         onClick={() => {
//                             // let hasLogin = successLogin(userLogin.email, userLogin.password);
//                             // if (hasLogin.status) {
//                             //   console.log("success login");
//                             // } else {
//                             //   console.log("failed login");
//                             // }
//                             // setUserRole(hasLogin.user.role);
//                             // setIsLogin(true);
//                             // setShow(false);
//                             let hasLogin = successLogin(userLogin.email, userLogin.password);
//                             hasLogin.status && setIsLogin(true);
//                             hasLogin.status && setUserRole(hasLogin.user.role);
//                             hasLogin.status && setShow(false);
//                             hasLogin.status && setStatusMessage('')
//                             hasLogin.user.role == 'admin' && navigate('/home-admin')
//             }}

//                           }}
//                         >
//                             Login</Button>
//             </div>
//             <p className='text-align-center p-2'>Don't have an account ?
//                 <span 
//                 onClick={() => {
//                 setShow(false);
//                 setShowRegister(true);
//               }} 
//                 style={{fontWeight:'bold', cursor:'pointer'}}> Klik Here </span>
//             </p>
//             </Form>

//             </Modal.Body>
//             </Modal>

//       </>
//     );
//   };

//   export default User;