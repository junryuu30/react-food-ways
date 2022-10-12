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
                            <Col className='col-lg-4 col-12 me-lg-3 mb-3'>
                                <img src={garis} style={{width:"100%"}}/>
                            </Col>
                            <Col className=''>
                                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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