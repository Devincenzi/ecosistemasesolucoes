import { useState } from 'react';
import { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import adm1 from '../arquivos/imgs/ADMApp/adm1.jpg';
import adm2 from '../arquivos/imgs/ADMApp/adm2.jpg';
import adm3 from '../arquivos/imgs/ADMApp/adm3.jpg';
import adm4 from '../arquivos/imgs/ADMApp/adm4.jpg';
import adm5 from '../arquivos/imgs/ADMApp/adm5.jpg';
import adm6 from '../arquivos/imgs/ADMApp/adm6.jpg';
import adm7 from '../arquivos/imgs/ADMApp/adm7.jpg';

function CarrosselADMApp(props){

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm1} className="img-fluid cursorPointer" 
                        alt='Cadastro de clientes' onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm2} className="img-fluid cursorPointer" 
                        alt="Controle de caixa" onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm3} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>        

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm4} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>          

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm5} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>     

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm6} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>
                        
            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={adm7} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>            
        </Carousel>
        </>
    );
}

export default CarrosselADMApp;