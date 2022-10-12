import {Container, Row, Col} from 'react-bootstrap';
import { DataMenu } from '../dataDummy/DataMenu';
import NavFoodWays from '../NavFoodWays';
import MenuCard from './MenuCard';
import '../../css/MenuCard.css'

const MenuDetail = () => {
    return (
        <>
            <NavFoodWays/>
            <Container fluid className='container-menu-detail'>
                <Container className='container-menu-detail'>
                    <h2 className='p-4'>Geprek Bensu, Menus</h2>
                    <Row>
                        {DataMenu.map((item, index)=>(
                            <Col key={index} className='m-2' >
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