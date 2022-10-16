import {Modal, Button} from 'react-bootstrap';
import mapbox from '../../assets/MapBox1.svg';
// import React, {useContext} from 'react';
// import {MapBoxContext} from '../../Contexts/MapBoxContext';
// import { useState } from 'react'

const ModalMapBox = ({show, setShow,}) => {

    // const handleClose = () => setShow(false);

    // const { isMap, setMap } = useContext(MapBoxContext)

    

    return(
        <>
            <Modal>
                <Modal.Body>
                    <img src={mapbox} alt='' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='btn-bg-brown'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMapBox