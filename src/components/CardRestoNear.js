import {Card} from 'react-bootstrap';

const CardRestoNear = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Text >
            <div>
                <img 
                    src={props.image} alt=''
                    style={{ width: '100%' }}
                    className='p-2'/>
            </div>
            <div className='p-3'>
                <h5><b>{props.restoName}</b></h5>
                <p>{props.jarak}</p>
            </div>
            
            </Card.Text>
        </Card>         
    )
}

export default CardRestoNear