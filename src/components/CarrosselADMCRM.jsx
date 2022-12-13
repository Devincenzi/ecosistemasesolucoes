import { useState } from 'react';
import { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import card1 from '../arquivos/imgs/ADMCRM/Card1.jpeg';
import card2 from '../arquivos/imgs/ADMCRM/Card2.jpeg';
import card3 from '../arquivos/imgs/ADMCRM/Card3.jpeg';
import card4 from '../arquivos/imgs/ADMCRM/Card4.jpeg';
import card5 from '../arquivos/imgs/ADMCRM/Card5.jpeg';
import card6 from '../arquivos/imgs/ADMCRM/Card6.jpeg';

function CarrosselADMCRM(props){

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card1} className="img-fluid cursorPointer" 
                        alt='Cadastro de clientes' onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card2} className="img-fluid cursorPointer" 
                        alt="Controle de caixa" onClick={props.click} />
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card3} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>        

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card4} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>          

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card5} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>     

            <Carousel.Item className='d-flex justify-content-center'>
                    <img src={card6} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
            </Carousel.Item>       
        </Carousel>
        </>
    );
}

export default CarrosselADMCRM;