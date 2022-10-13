import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import NavPatner from '../NavPatner'
import ProfileGeprek from '../../assets/ProfilePatners2.svg'

import logoFoodWays from '../../assets/logo-ways-food.svg'

const ProfilePatners = () => {
    return (
        <>
            <NavPatner/>
            <Container fluid className='container-profile-user'>
                <Container className='container-profile-user'>
                    <Row>
                        <Col>
                                <h2 className='m-4'></h2>
                            <Row>
                                <Col>
                                    <div style={{width:'180px'}} className=''>
                                        <img src={ProfileGeprek} alt=''/>
                                        <Button variant="secondary" style={{width:'100%'}} className="btn-nav">Profile Patners</Button>
                                    </div>
                                    
                                </Col>

                                <Col className='profile-tag'>
                                    <div>
                                        <h4>Nama Patner</h4>
                                        <p>Geprek Bensu</p>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>geprekbensu@gmail.com</p>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>083896833122</p>
                                    </div>
                                </Col>
                            </Row>

                            
                        </Col>

                        <Col>
                            <h2 className='m-4'>History Order</h2>
                            <Card style={{width:'450px'}}>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div>
                                        <h5><b>Andi</b></h5>
                                        <p><span><b>Saturday</b></span>, 12 March 2021</p>
                                        <p className='total-card-profile' style={{color:'#974A4A'}}>
                                            <b>Total : Rp 45.000</b>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>WaysFood  <img src={logoFoodWays} alt=''/></h2>
                                            <Button style={{width:'100%'}} className="btn-profile-user">Finished</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>        
        </>
        
    )
}

export default ProfilePatners