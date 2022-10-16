import {Card, Button} from 'react-bootstrap';


const MenuCard = (props) => {

    return (
        <Card style={{ width: '100%' }} className=''>
            <Card.Text className="">
                <Card.Img src={props.image} style={{ width: '100%' }} className="p-2"/>
                <div className='px-2' >
                    <Card.Title className='card-title'>
                        {props.name}
                    </Card.Title>
                    <Card.Text className='card-text-menu-card'>
                        {props.price}
                    </Card.Text>
                </div>
            </Card.Text>
            <div className='d-flex justify-content-center m-2' >
                <Button variant="warning" style={{ width: '90%' }}
                
                >Order</Button>
            </div>
        </Card>    
    )
}

export default MenuCard
