import {Container, Row, Col, Card} from 'react-bootstrap';
import CardResto from './CardResto';
import CardRestoNear from './CardRestoNear';
import {resto} from './dataDummy/DataPopularResto';
import {restoNear} from './dataDummy/restoNear';

const PopularRestaurant = () => {
    return (
        <Container fluid className='container-resto py-4'>
            <Container className='container-resto'>
                <h3 className='pt-4 py-2'><b>Popular Restaurant</b></h3>
                <Row className='d-flex'>
                    {resto.map((item, index)=>(
                        <Col className='col-lg-3 col-md-6 col-sm-12' key={index}>
                                <div className="d-flex m-2">
                                    <CardResto restoName={item.restoName} image={item.image} />
                                </div>
                        </Col>
                    ))}
                </Row>
                <Container className='mt-4 '>
                <h3 className='pt-4 pb-2'>Restaurant Near You</h3>
                <Row className='d-flex'>
                    {restoNear.map((item, index)=>(
                        <Col className='col-lg-3 col-md-6 col-sm-12' key={index}>
                                <div className="d-flex m-2">
                                    <CardRestoNear restoName={item.restoName} image={item.image} jarak={item.jarak}/>
                                </div>
                        </Col>
                    ))}
                </Row>
                </Container>
                
            </Container>
        </Container>
    )
}

export default PopularRestaurant