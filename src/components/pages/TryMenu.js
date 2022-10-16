import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { DataMenu } from '../dataDummy/DataMenu';
import NavUser from '../NavUser';

import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';

const TryMenu = () => {
    const { dataCart, setDataCart } = useContext(CartContext);

    return (
        <>
            <NavUser/>
            <Container fluid className='container-menu-detail'>
                <Container className='container-menu-detail'>
                    <h2 className='p-4'>Geprek Bensu, Menu</h2>
                    <Row className='d-flex'> 
                        {DataMenu.map((item, index)=>(
                            <Col key={index} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                <Card style={{ width: '100%' }} className=''>
                                    <Card.Text className="">
                                    <Card.Img src={item.image} style={{ width: '100%' }} className="p-2"/>
                                    <div className='px-2' >
                                        <Card.Title className='card-title'>
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className='card-text-menu-card'>
                                            {item.price}
                                        </Card.Text>
                                        </div>
                                    </Card.Text>
                                    <div className='d-flex justify-content-center m-2' >
                                        <Button variant="warning" style={{ width: '90%' }}
                                            onClick={() => {
                                                setDataCart([...dataCart, {}]);
                                                console.log(dataCart);
                                              }}
                                        >
                                            Order</Button>
                                    </div>
                                </Card>    

                            </Col>
                        ))} 

                    </Row>
                </Container>
            </Container>        
        </>
        
    )
}

export default TryMenu