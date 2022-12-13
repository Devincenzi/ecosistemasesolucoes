import { useState } from 'react';
import { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

// import app1 from '../arquivos/imgs/app/home.jpg';
// import app2 from '../arquivos/imgs/app/quantidadeTamanho.jpg';
// import app3 from '../arquivos/imgs/app/removerCarrinho.jpg';
// import app4 from '../arquivos/imgs/app/finalizarCompra.jpg';
// import app5 from '../arquivos/imgs/app/dadosRetirarNaLoja.jpg';
// import app6 from '../arquivos/imgs/app/pagamentoCartao.jpg';
// import app7 from '../arquivos/imgs/app/numeroParcelas.jpg';
// import app8 from '../arquivos/imgs/app/pdfPedido.jpg';
// import app9 from '../arquivos/imgs/app/compartilharPedido.jpg';
// import app10 from '../arquivos/imgs/app/redesSociais.jpg';

import app1 from '../arquivos/imgs/app/app1.png';
import app2 from '../arquivos/imgs/app/app2.png';
import app3 from '../arquivos/imgs/app/app3.png';

function CarrosselApp(props){

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item className='d-flex justify-content-center'>
                {/* <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipapp1}> */}
                    <img className="img-fluid cursorPointer" src={app1} 
                        alt='Cadastro de clientes' onClick={props.click} />
                {/* </OverlayTrigger> */}
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                {/* <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipapp2}> */}
                    <img src={app2} className="img-fluid cursorPointer" 
                        alt="Controle de caixa" onClick={props.click} />
                {/* </OverlayTrigger> */}
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center'>
                {/* <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipapp3}> */}
                    <img src={app3} className="img-fluid cursorPointer" 
                        alt="Delivery" onClick={props.click} />
                {/* </OverlayTrigger> */}
            </Carousel.Item>            
        </Carousel>
        </>
    );
}

export default CarrosselApp;