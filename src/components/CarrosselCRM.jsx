import { useState } from 'react';
import { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import frame1 from '../arquivos/imgs/CRM/Frame1.png';
import frame2 from '../arquivos/imgs/CRM/Frame2.png';
import frame3 from '../arquivos/imgs/CRM/Frame3.png';
import frame4 from '../arquivos/imgs/CRM/Frame4.png';
import frame5 from '../arquivos/imgs/CRM/Frame5.png';
import frame6 from '../arquivos/imgs/CRM/Frame6.png';
import frame7 from '../arquivos/imgs/CRM/Frame7.png';
import frame8 from '../arquivos/imgs/CRM/Frame8.png';
import frame9 from '../arquivos/imgs/CRM/Frame9.png';

function CarrosselCRM(props){

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame1} className="img-fluid cursorPointer" 
                        alt='Cadastro de clientes' onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame2} className="img-fluid cursorPointer" 
                        alt="Controle de caixa" onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame3} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>        

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame4} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>          

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame5} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>     

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame6} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>
                        
            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame7} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>   

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame8} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>     

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={frame9} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>            
        </Carousel>
        </>
    );
}

export default CarrosselCRM;