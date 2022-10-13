import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import NavPatner from '../NavPatner';
import klip from '../../assets/klip.svg'
import map from '../../assets/map.png'
import FormAll from '../Atom/FormAll';


const EditTwo = () => {
    return (
        <>
            <NavPatner/>
            <Container fluid>
                <Container className=''>
                    <h2 className='m-4'>Edit Profile Partner</h2>
                    <Form>
                            <Row>
                                <Col className='col-12 col-lg-9'>
                                    <FormAll 
                                    label="Full Name" 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="mb-3" />
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 p-2 rounded bg-white" controlId="formBasicEmail" >
                                        <Form.Control type="file" placeholder="Attach Image" hidden />
                                        <Form.Label className="d-flex justify-content-between btn-full align-items-center border border-dark"
                                        style={{height: '100%'}}
                                        >
                                            <div className=''>Attach Image </div>
                                            <div className=''>
                                                <img src={klip} alt="" style={{marginLeft:'20px'}} />
                                            </div>
                                        </Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <FormAll 
                                label="Email" 
                                type="text" 
                                placeholder="Email" 
                                className="mb-3" />

                            <FormAll 
                                label="Phone" 
                                type="text" 
                                placeholder="Phone" 
                                className="mb-3" />
                            
                            <Row>
                            <Col className="col-12 col-md-9 mb-3">
                                <FormAll 
                                    label="Full Name" 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="mb-3" />
                            </Col>
                            <Col className="col-12 col-md-3 mb-3">
                                <Button variant="secondary" 
                                        className="btn-nav" 
                                        style={{width:'100%',
                                                height: '80%'
                                                }}
                                
                                >Select On Map</Button>
                                <img src={map} alt='' style={{
                                        marginLeft: '-80px'}}/>

                            </Col>
                        </Row>

                        <div className="d-flex justify-content-end">
                            <Col className="col-12 col-md-2 mb-3">
                                <Button variant="success" type="submit" 
                                        style={{width:'100%',
                                                height: '80%'}} 
                                        className='btn-edit-profile'>Save</Button>
                            </Col>
                        </div>
                    </Form>
                    </Container>
                </Container>
        </>
       
        
    )
}

export default EditTwo