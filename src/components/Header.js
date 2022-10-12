import {Container, Row, Col} from 'react-bootstrap';
import img from '../assets/pizza.svg'
import garis from '../assets/garis.svg'
import '../css/Header.css'


const Header = ()=>{
    return (
        <div>
            <Container fluid className='container-header'>
            <Container className='p-4'>
                <Row className='Header-row d-flex'>
                    <Col>
                        <h1>Are You Hungry ? <br/> Express Home Delivery</h1>
                        <Row>
                            <Col className='col-lg-4 col-md-12 col-sm-12'>
                                <img src={garis} />
                            </Col>
                            <Col className='col-lg-4 col-md-12 col-sm-12'>
                                <p className="ms-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <img src={img}/> 
                    </Col>
                </Row>
            </Container>
            </Container>
            
        </div>
    )
}

export default Header