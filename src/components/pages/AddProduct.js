import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import klip from '../../assets/klip.svg'
import NavPatner from '../NavPatner';

const AddProduct = () => {
    return (
        <>
            <NavPatner/>
            <Container fluid>
                <Container className=''>
                    <h2 className='m-4'>Add Product</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row >
                                <Col className="col-12 col-md-9">
                                    <input type="text" className="form-edit-profile form-control border-dark mt-3" id="exampleInputEmail1" placeholder='Title'/>

                                </Col>
                                <Col className="col-12 col-md-3 d-flex" >
                                    <Form.Group  controlId="formBasicEmail" className='form-edit-file'>
                                        <Form.Control className="mt-3" type="file" placeholder="Attach Image" hidden />
                                        <Form.Label className="d-flex justify-content-between form-edit-profile form-control border-dark mt-3">
                                            <div>
                                                Attach Image
                                            </div>
                                            <div>
                                                <img src={klip} className='klip' alt=''/>
                                            </div>  
                                        </Form.Label>
                                        
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Price" className="form-edit-profile form-control border-dark" />
                        </Form.Group>

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

export default AddProduct