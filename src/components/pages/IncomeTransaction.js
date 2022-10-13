import {Container, Button} from 'react-bootstrap';
import NavPatner from '../NavPatner';
import ceklis from '../../assets/ceklis.png'
import coret from '../../assets/x.png'

const IncomeTransaction = () => {
    return (
        <div>
            <NavPatner/>
                <Container className='container-income-transaction'>
                <h2 className='p-4'>Income Transaction</h2>
                    <table class="table table-bordered p-4">
                        <thead>
                            <tr style={{backgroundColor:'#828282'}}>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Products Order</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Sugeng No Pants</td>
                            <td>Cileungsi</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td style={{color:'#FF9900'}}>Waiting Approve</td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="secondary" size="sm" className="btn-table1 me-3">Cancel</Button>
                                    <Button variant="secondary" size="sm" className="btn-table2">Approve</Button>
                                </div>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row">2</th>
                            <td>Haris Gams</td>
                            <td>Serang</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td style={{color:'#78A85A'}}>Success</td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <img src={ceklis} alt=''/>
                                </div>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row">3</th>
                            <td>Aziz Union</td>
                            <td>Bekasi</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td style={{color:'red'}}>Cancel</td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <img src={coret} alt=''/>
                                </div>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row">4</th>
                            <td>Lae Tanjung Balai</td>
                            <td>Tanjung Balai</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td style={{color:'#00D1FF'}}>On The Way</td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <img src={ceklis} alt=''/>
                                </div>
                            </td>
                            </tr>
                        </tbody>       
                    </table>    


                </Container>
        </div>
       
        
    )
}

export default IncomeTransaction