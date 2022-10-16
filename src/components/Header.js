import {Container, Row, Col} from 'react-bootstrap';
import img from '../assets/pizza.svg'
import garis from '../assets/garis.svg'
import '../css/Header.css'


const Header = ()=>{
    return (
        <div>
            <div className='container-header'>
            <Container className='container-h1 py-5 text-center text-lg-start'>
                <Row className='Header-row d-flex'>
                    <Col className='col-lg-7'>
                        <h1 className='title-header'>Are You Hungry ? <br/> Express Home Delivery</h1>
                        <Row>
                            <Col className='col-lg-4 col-12 me-lg-3 mb-3'>
                                <img src={garis} style={{width:"100%"}} alt=''/>
                            </Col>
                            <Col className=''>
                                <p className="p-header">Let's Order many foods for boost your energy, your mood and make your life better because happy or send to your beloved people.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='col-lg-5'>
                        <img src={img} alt=''/> 
                    </Col>
                </Row>
            </Container>
            </div>
            
        </div>
    )
}

export default Header