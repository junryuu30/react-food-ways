import {Container, Row, Col, Button, Form, Modal} from 'react-bootstrap'
import { DataCart } from '../dataDummy/DataCart'
import {useState} from 'react';

import NavFoodWays from "../NavFoodWays"
import map from '../../assets/map.png'
import trash from '../../assets/trash.png'
import mapbox from '../../assets/MapBox1.svg';

const CartOrder = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <NavFoodWays/>
            <Container fluid>
                <Container className='mt-4 '>
                    <h2 className='pt-4'>
                        Geprek Bensu
                    </h2>
                    <h className='my-4'>Delivery Location</h>
                        <Row>
                            <Col className="col-12 col-md-9 mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Harbour Building'/>
                            </Col>
                            <Col className="col-12 col-md-3 mb-3">
                                <Button variant="secondary" className="btn-nav" style={{width:'100%'}}
                                        onClick={setShow}
                                >Select On Map</Button>
                                <img src={map} alt='' style={{
                                        marginLeft: '-80px',
                                        padding: '5px'}}/>

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

                        <h5>Review Your Order</h5>
                        <Row>
                            <Col className='col-lg-8'><hr/></Col>
                            <Col className='d-none d-lg-block'><hr/></Col>
                        </Row>

                                    
                        <Row>
                            <Col className='col-lg-8' >
                        {DataCart.map((item, index)=>(
                            <Col key={index}>
                                <Row className='d-flex align-items-center'>
                                    <Col>
                                        <Row className='d-flex align-items-center text-start'>
                                            <Col className='col-3'>
                                                <img src={item.image} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                            </Col>
                                            <Col className=' col-9 ps-5 ps-lg-0'>
                                                <h6 className='my-3 ff-abhaya fw-extra-bold'> {item.name} </h6>
                                                <h6 className='my-3 ff-avenir'>
                                                    <span className='m-2'> - </span>
                                                    <button className='border-0 rounded'> 2 </button>
                                                    <span className='m-2'> + </span>
                                                </h6>

                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='col-4 text-end'>
                                        <h6 className='text-danger my-3'> {item.price} </h6>
                                        <h6 className='text-danger my-3'><img src={trash} alt="" /></h6>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                            </Col>




                            <Col className='col-lg-4 col-md-12 col-sm-12'>
                                <Row>
                                    <Col className='col-7'>
                                        <h6>Sub Total</h6>
                                        <h6>Qty</h6>
                                        <h6>Ongkir</h6>
                                    </Col>
                                    <Col className='col-5 text-end'>
                                        <h6>Rp 35.000</h6>
                                        <h6>2</h6>
                                        <h6>10.000</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='col-lg-8'><hr/></Col>
                            <Col className='d-none d-lg-block'><hr/></Col>
                        </Row>

                        <Row className='d-flex justify-content-end align-items-end'>
                            <Col className='col-lg-4'>
                                <Row>
                                    <Col className='col-7'>
                                        <h6>Sub Total</h6>
                                    </Col>
                                    <Col className='col-5 text-end'>
                                        <h6>Rp 35.000</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    
                    <Form.Group className="my-4">
                        <div className="d-flex justify-content-end">
                            <Col className="col-lg-3 mb-3">
                                <Button variant="success" type="submit" 
                                        style={{width:'100%'}} 
                                        className='btn-bg-brown text-center'>Order</Button>
                            </Col>
                        </div>
                    </Form.Group>

                </Container>
            </Container>
        </>
    )
}

export default CartOrder