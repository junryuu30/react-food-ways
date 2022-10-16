import {Container, Row, Col} from 'react-bootstrap';
import { DataMenu } from '../dataDummy/DataMenu';
import MenuCard from './MenuCard';
import '../../css/MenuCard.css'
import NavUser from '../NavUser';

const MenuDetail = () => {
    
    return (
        <>
            <NavUser/>
            <Container fluid className='container-menu-detail'>
                <Container className='container-menu-detail'>
                    <h2 className='p-4'>Geprek Bensu, Menu</h2>
                    <Row className='d-flex'>
                        {DataMenu.map((item, index)=>(
                            <Col key={index} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                <MenuCard name={item.name} price={item.price} image={item.image}/>
                            </Col>
                        ))} 

                    </Row>
                </Container>
            </Container>        
        </>
        
    )
}

export default MenuDetail