import { Modal, Form, Button } from "react-bootstrap"


const Register = ({show, setShow, setShowLogin}) => {

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        label="Email"
                        type="email"
                        placeholder="Email"
                        // value={userLogin.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        label="Email"
                        type="password"
                        placeholder="Email"
                        // value={userLogin.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        label="Email"
                        type="email"
                        placeholder="Email"
                        // value={userLogin.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                            <option>Female</option>
                            <option>Male</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                        label="Email"
                        type="email"
                        placeholder="Email"
                        // value={userLogin.email}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Who Me</Form.Label>
                        <Form.Select>
                            <option>As User</option>
                            <option>As Patner</option>
                        </Form.Select>
                    </Form.Group>

                    <div>
                        <Button variant="secondary" size="sm" style={{width:'100%'}} className="btn-nav"  
                            onClick={() => setShow(false)}
                        >Register</Button>
                    </div>
                    <p className='text-align-center p-2'>Already have an account ?  
                        <span style={{fontWeight:'bold', cursor:'pointer'}}
                                onClick={() => { setShow(false)
                                                setShowLogin(true)}}
                        > Click Here </span>
                    </p>

                </Modal.Body>
            </Modal>
        
        </>
    )
}

export default Register