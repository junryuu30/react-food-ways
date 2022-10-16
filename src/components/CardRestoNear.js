import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardRestoNear = (props) => {
    const navigate = useNavigate();


    return (
        <Card style={{ width: '100%', cursor:'pointer' }} onClick={()=>navigate('/menu-detail')}>
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