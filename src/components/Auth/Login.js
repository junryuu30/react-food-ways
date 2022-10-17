import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import User from '../../components/dataDummy/User';
import { useNavigate } from 'react-router-dom';

const Login = ({
    show,
    setShow,
    setShowRegister,
    isLogin,
    setIsLogin,
    setUserRole
    
  }) => {
    const navigate = useNavigate()
    // const handleClose = () => setShow(false);
  
    const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
      role: "user",
    });
  
    const [statusMessage, setStatusMessage] = useState("");
  
    function successLogin(email, password) {
      const emailCheck = User.filter((field) => field.email === email);
  
      if (emailCheck.length === 0) {
        setStatusMessage("Email belum terdaftar");
        return {
          status: false,
          message: statusMessage,
        };
      }
  
      const result = User.filter((field) => field.password === password);
  
      if (result.length === 0) {
        setStatusMessage("Password Anda Salah");
        return {
          status: false,
          message: statusMessage,
        };
      }
      setStatusMessage("Login success");
      return {
        status: true,
        message: statusMessage,
        user: result[0],
      };
    }

  
    return (
      <>
        <Modal>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={userLogin.email}
                    onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
              }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    label="Password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setUserLogin({ ...userLogin, password: e.target.value })
                      }
                    />
                </Form.Group>

                <div>
                    <Button variant="secondary" size="sm" style={{width:'100%'}} className="btn-nav"  
                    onClick={() => {
                        let hasLogin = successLogin(userLogin.email, userLogin.password);
                        hasLogin.status && setIsLogin(true);
                        hasLogin.status && setUserRole(hasLogin.user.role);
                        hasLogin.status && setShow(false);
                        hasLogin.status && setStatusMessage('')
                        hasLogin.user.role === 'admin' && navigate('/income-transaction')
                      }}

                    >Login</Button>
                </div>
                <p className='text-align-center p-2'>Already have an account ?  
                    <span style={{fontWeight:'bold', cursor:'pointer'}}
                    onClick={() => {
                        setShow(false);
                        setShowRegister(true);}}
                    > Click Here </span>
                </p>
                
            </Form>
            </Modal.Body>
        </Modal>

      </>
    );
  };

  export default Login;