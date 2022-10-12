import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import NavFoodWays from "../NavFoodWays"
import map from '../../assets/map.png'
import geprekOri from '../../assets/geprekori1.svg'
import trash from '../../assets/trash.png'
import geprekKeju2 from '../../assets/geprekkeju2.svg'

const CartOrder = () => {
    return (
        <>
            <NavFoodWays/>
            <Container fluid>
                <Container className='mt-4 '>
                    <h2 className='pt-4'>
                        Geprek Bensu
                    </h2>
                    <p>Delivery Location</p>
                    <Row>
                            <Col className="col-12 col-md-9 mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Harbour Building'/>
                            </Col>
                            <Col className="col-12 col-md-3 mb-3">
                                <Button variant="secondary" className="btn-nav" style={{width:'100%'}}>Select On Map</Button>
                                <img src={map} style={{
                                        marginLeft: '-80px',
                                        padding: '5px'}}/>

                            </Col>
                        </Row>

                        <Row>
                            <p>Review Your Order</p>
                            <Col className='col-12 col-md-8'>
                                <Card className='border-start-0 border-end-0 rounded-0'>
                                    <Card.Body className='d-flex'>
                                        <Row>
                                            <Col>
                                                <img src={geprekOri}/>
                                            </Col>
                                            <Col>
                                                <h5>Paket Geprek</h5>
                                                <Col className='d-flex justify-content-center'>
                                                    <div className='me-3'><h4>-</h4></div>
                                                    <div className='me-3'><h4>1</h4></div>
                                                    <div className='me-3'><h4>+</h4></div>
                                                </Col>
                                            </Col>
                                            <Col style={{textAlign:'end'}}>
                                                <p>Rp 15.000</p>
                                                <img src={trash}/>
                                            </Col>
                                        </Row>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='col-12 col-md-4'>
                                <Card className='border-start-0 border-end-0 rounded-0'>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <p>Subtotal</p>
                                                <p>Qty</p>
                                                <p>Ongkir</p>
                                            </Col>
                                            <Col style={{textAlign:'end'}}>
                                                <p>Rp 35.000</p>
                                                <p>2</p>
                                                <p>10.0000</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Row>
                                    <Col>
                                        <p>Total</p>
                                    </Col>
                                    <Col style={{textAlign:'end'}}>
                                        <p>Rp 45.000</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                        <Col className='col-12 col-md-8'>
                                <Card className='border-start-0 border-end-0 rounded-0'>
                                    <Card.Body className='d-flex'>
                                        <Row>
                                            <Col>
                                                <img src={geprekKeju2}/>
                                            </Col>
                                            <Col>
                                                <h5>Paket Geprek</h5>
                                                <Col className='d-flex justify-content-center'>
                                                    <div className='me-3'><h4>-</h4></div>
                                                    <div className='me-3'><h4>1</h4></div>
                                                    <div className='me-3'><h4>+</h4></div>
                                                </Col>
                                            </Col>
                                            <Col style={{textAlign:'end'}}>
                                                <p>Rp 15.000</p>
                                                <img src={trash}/>
                                            </Col>
                                        </Row>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                </Container>
            </Container>
        </>
    )
}

export default CartOrder