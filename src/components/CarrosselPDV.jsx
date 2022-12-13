import React, { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import PDV1 from '../arquivos/imgs/PDV/AddCliente.png';
import PDV2 from '../arquivos/imgs/PDV/Caixa.png';
import PDV3 from '../arquivos/imgs/PDV/Delivery.png';
import PDV4 from '../arquivos/imgs/PDV/Imagens.png';
import PDV5 from '../arquivos/imgs/PDV/Pagamento.png';
import PDV6 from '../arquivos/imgs/PDV/Pesquisa.png';

function CarrosselPDV(props){
    const tooltipPDV1 = <Tooltip id='PDV1'><span>Cadastro de clientes</span></Tooltip>
    const tooltipPDV2 = <Tooltip id='PDV2'><span>Controle de caixa</span></Tooltip>
    const tooltipPDV3 = <Tooltip id='PDV3'><span>Delivery</span></Tooltip>
    const tooltipPDV4 = <Tooltip id='PDV4'><span>Cadastro de imagens</span></Tooltip>
    const tooltipPDV5 = <Tooltip id='PDV5'><span>Financeiro</span></Tooltip>
    const tooltipPDV6 = <Tooltip id='PDV5'><span>Tela de pesquisas</span></Tooltip>

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV1}>
                    <img className="d-block w-100 img-fluid cursorPointer" src={PDV1} 
                        alt='Cadastro de clientes' onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV2}>
                    <img src={PDV2} className="d-block w-100 img-fluid cursorPointer" 
                    alt="Controle de caixa" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV3}>
                    <img src={PDV3} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>
            
            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV4}>
                    <img src={PDV4} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Cadastro de imagens" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV5}>
                    <img src={PDV5} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Financeiro" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipPDV6}>
                    <img src={PDV6} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Tela de pesquisas" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>
            
        </Carousel>
        </>
    );
}

export default CarrosselPDV;