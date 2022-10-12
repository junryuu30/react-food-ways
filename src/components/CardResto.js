import {Card} from 'react-bootstrap';

const CardResto = (props) => {
    return (
        <Card className='d-flex justify-content-center p-1' style={{ width: '100%' }}>
            <Card.Text className="">
                <h4 className='p-2'>
                    <Card.Img src={props.image} style={{ width: '50px' }} className="me-3"/> 
                    {props.restoName}
                </h4>
            </Card.Text>
        </Card>         
    )
}

export default CardResto