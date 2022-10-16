import {Container, Row, Col, Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';

import NavPatner from '../NavPatner';
import klip from '../../assets/klip.svg';
import map from '../../assets/map.png';
import mapbox from '../../assets/MapBox1.svg';


const EditProfile = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <NavPatner/>
            <Container fluid className='container-edit-profile'>
                <Container className='container-edit-profile'>
                    <h2 className='m-4'>Edit Profile Partner</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row >
                                <Col className="col-12 col-md-9">
                                    <input type="text" className="form-edit-profile form-control border-dark mt-3" id="exampleInputEmail1" placeholder='Full Name'/>

                                </Col>
                                <Col className="col-12 col-md-3 d-flex" >
                                    <Form.Group  controlId="formBasicEmail" className='form-edit-file'>
                                        <Form.Control className="mt-3" type="file" placeholder="Attach Image" hidden />
                                        <Form.Label className="d-flex justify-content-between form-edit-profile form-control border-dark mt-3">
                                            <div>
                                                Attach Image
                                            </div>
                                            <div>
                                                <img src={klip} 
                                                        style={{
                                                        marginLeft: '',
                                                        padding: '',}}
                                                        className='klip' alt=''/>
                                            </div>
                                                
                                           
                                            
                                        </Form.Label>
                                        
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" className="form-edit-profile form-control border-dark" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="phone" className="form-edit-profile form-control border-dark"/>
                        </Form.Group>

                        <Row>
                            <Col className="col-12 col-md-9 mb-3">
                                <input type="text" className="form-edit-profile form-control border-dark mb-3" id="exampleInputEmail1" placeholder='Full Name'/>
                            </Col>
                            <Col className="col-12 col-md-3 mb-3">
                                <Button variant="secondary" className="btn-nav" style={{width:'100%'}}>Select On Map</Button>
                                <img src={map} alt='' style={{
                                        marginLeft: '-80px',
                                        padding: '5px' }}/>

                            </Col>
                        </Row>

                        <Modal
                            show={show} onHide={()=> setShow(false)}
                            size='xl'
                        >
                            <Modal.Body>
                                <img src={mapbox} alt='' 
                                    style={{width:'100%'}}/>
                            </Modal.Body>
                        </Modal>

                        <div className="d-flex justify-content-end">
                            <Col className="col-lg-3 mb-3">
                                <Button variant="success" type="submit" 
                                        style={{width:'100%'}} 
                                        className='btn-bg-brown text-center'>Save</Button>
                            </Col>
                        </div>
                    </Form>
                    </Container>
                </Container>
        </>
       
        
    )
}

export default EditProfile