import React from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaFacebookSquare, FaEnvelope, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import Logo from '../arquivos/imgs/logo.png';
import InstagramLogo from '../arquivos/icons/instagram.svg';
import './Rodape.css';

function Rodape(){
    const tooltipEmail = <Tooltip id='tooltipEmail'><span>comercial@ecosistemasesolucoes.com.br <hr/> Clique para copiar!</span></Tooltip>

    function copyText(textToCopy){
        navigator.clipboard.writeText(textToCopy);
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    return (
        <>
        <div>
            <Row className='rodape rodapeText'>
                {/* GRANDE */}
                <Col xs={4} xxl={3} className='grande d-flex justify-content-center align-items-center'>
                    <span><b>Redes sociais</b></span>
                </Col>

                <Col xs={{span: 4, offset: 4}} xxl={{span: 3, offset: 6}} className='grande d-flex align-items-center justify-content-center textoAzulClaro'>
                    <b>Ajudamos sua empresa a vender mais.</b>
                </Col>
                <Col xs={4} xxl={3} className='grande d-flex flex-column justify-content-between'>
                    
                    <a href='https://www.facebook.com/ecosistemasesolucoes' title='Facebook' target='_blank' rel="noreferrer" className='text-decoration-none text-reset'>
                        <FaFacebookSquare size={24}/>{`  `}facebook.com/ecosistemasesolucoes
                    </a>
                    
                    <a href='https://www.instagram.com/ecosistemas_/' title='Instagram' target='_blank' rel="noreferrer" className='text-decoration-none text-reset' >
                        <FaInstagram size={24} />{`  `}@ecosistemas_
                    </a>
                    
                    <a href='https://wa.me/5551991672281' target='_blank' rel="noreferrer" title='Whatsapp' className='text-decoration-none text-reset'>
                        <FaWhatsapp size={24}/>{`  `}(51) 99167-2281
                    </a> 
                </Col>

                <Col xs={4} xxl={6} className='grande d-flex justify-content-center align-items-start'>
                    <img src={Logo} width={180} height={90} alt='logo'/>
                </Col>

                <Col xs={4} xxl={3} className='grande d-flex justify-content-center cursorPointer' onClick={scrollToTop }>
                    <div className='botaoRodape d-flex btn-4 text-center rounded-2'>
                        <span className='d-flex align-items-center h-100 px-3 icon-send'>
                            {/* <FaTelegramPlane /> */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                            </svg>
                        </span>
                        <span className='d-flex align-items-center px-2 text-center'>
                            Faça um teste grátis
                        </span>
                    </div>
                </Col>

                <Col xs={4} xxl={3} className='grande d-flex align-items-center'>
                    <OverlayTrigger trigger={['click', 'focus', 'hover']} placement='top' overlay={tooltipEmail}>
                        <span onClick={() => copyText('comercial@ecosistemasesolucoes.com.br')} className='cursorPointer'><FaEnvelope size={24}/>{`  `}comercial@ecosistemasesolucoes.com.br</span>
                    </OverlayTrigger>
                </Col>
                
                <Col xs={4} xxl={6} className='grande d-flex align-items-center justify-content-center textoAzulClaro'>
                    Copyright © 2022 ECO Sistemas e Soluções.
                </Col>
                <Col xs={4} xxl={3} className='grande d-flex align-items-center justify-content-center'>
                    <a href='politicadeprivacidade' className='textoAzulClaro'>Política de Privacidade.</a>
                </Col>
                {/* GRANDE */}
                
                {/* PEQUENO */}
                <Col xs={12} sm={6} className='pequeno d-flex flex-column justify-content-between'>
                    <span className='w-100 text-center'><b>Redes sociais</b></span>

                    <a href='https://www.facebook.com/ecosistemasesolucoes' title='Facebook' target='_blank' rel="noreferrer" className='text-decoration-none text-reset'>
                        <FaFacebookSquare size={24}/>{`  `}facebook.com/ecosistemasesolucoes
                    </a>
                    
                    <a href='https://www.instagram.com/ecosistemas_/' title='Instagram' target='_blank' rel="noreferrer" className='text-decoration-none text-reset' >
                        <FaInstagram size={24} />{`  `}@ecosistemas_
                    </a>
                    
                    <a href='https://wa.me/5551991672281' target='_blank' rel="noreferrer" title='Whatsapp' className='text-decoration-none text-reset'>
                        <FaWhatsapp size={24}/>{`  `}(51) 99167-2281
                    </a>

                    <span onClick={() => copyText('comercial@ecosistemasesolucoes.com.br')} className='cursorPointer'><FaEnvelope size={24}/>{`  `}comercial@ecosistemasesolucoes.com.br</span>
                </Col>                

                <Col xs={12} sm={6} className='pequeno d-flex flex-column justify-content-around'>
                    <Col xs={12} className='text-center textoLaranja'>
                        <b>Ajudamos sua empresa a vender mais.</b>
                    </Col>
                    <Col xs={12} className='d-flex justify-content-center cursorPointer' onClick={scrollToTop }>
                        {/* <div className='fundoTesteGratis textoLaranja w-50 text-center p-3 rounded-2'><b>Faça um teste grátis</b></div> */}
                        <div className='botaoRodape d-flex btn-4 text-center rounded-2'>
                            <span className='d-flex align-items-center icon-send'>
                                {/* <FaTelegramPlane /> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                                </svg>
                            </span>
                            <span className='texto d-flex align-items-center px-2 text-center'>
                                Faça um teste grátis
                            </span>
                        </div>
                    </Col>

                    <Col xs={12} className='text-center'>
                        <a href='politicadeprivacidade' className='textoAzulClaro'>Política de Privacidade.</a>
                    </Col>
                </Col>

                <Col xs={12} className='pequeno d-flex justify-content-center p-3'>
                    <img src={Logo} width={180} height={90} alt='logo'/>
                </Col>
                <Col xs={12} className='pequeno d-flex justify-content-center p-3 textoAzulClaro'>
                    Copyright © 2022 ECO Sistemas e Soluções.
                </Col>
                {/* PEQUENO */}
            </Row>
        </div>
        </>
    );
}

export default Rodape;