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
                                <img src={garis} style={{width:"100%"}} alt=''/>
                            </Col>
                            <Col className=''>
                                <p className="">Lets Order much food for boost your energy, your mood and make your life better because happy or send to your beloved people.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <img src={img} alt=''/> 
                    </Col>
                </Row>
            </Container>
            </Container>
            
        </div>
    )
}

export default Header