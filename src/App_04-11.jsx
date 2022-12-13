import React, { useRef, useEffect, useState } from 'react';
import { Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

import FormContato from './components/FormContato';
import NavClient from './components/NavClient';
import WhatsappButton from './components/WhatsappButton';
import Rodape from './components/Rodape';
import Ebook from './arquivos/pdfs/ebook.pdf';
import VideoHome from './arquivos/videos/videoEcoHome.mp4';
import ImgAutomacao from './arquivos/imgs/automacao.png';
import ImgVantagens from './arquivos/imgs/vantagens2.png';
import ImgEstoque from './arquivos/imgs/controleEstoque.png';
import ImgEmpresa from './arquivos/imgs/empresa.png';

function App(){
	const topo = useRef(null);
	const vantagens = useRef(null);
	const empresa = useRef([]);

	const scrollToSection = (elementRef) => {
		if(!elementRef)
		  return;
	
		window.scrollTo({
		  top: elementRef.current.offsetTop,
		  behavior: 'smooth'
		});
	}

  return (
    <React.Fragment>
    <NavClient needHide={true}>
        <Nav className='w-100 d-flex justify-content-end'>
          <Nav.Link onClick={() => scrollToSection(vantagens)} href="#">Vantagens</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(empresa)} href="#">Empresa</Nav.Link>
          <NavDropdown title='Downloads' menuVariant='dark'>
            <NavDropdown.Item target='_blank' href={Ebook}>E-book NFCe</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
            <NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='politicaeprivacidade'>Política e Privacidade</Nav.Link>
        </Nav>
    </NavClient>

    <WhatsappButton />

    <Container fluid>
      {/* <div className='h100v'> */}
        <Row ref={topo} className='h100v'>
          <video autoPlay muted loop className='myVideo'>
            <source src={VideoHome} type="video/mp4"/>
          </video>

          <Col xs={12} md={4} className='d-flex align-items-center zIndex99'>
            <div className={`bg-dark bg-opacity-50 text-white rounded-4 w-100 p-3 m-2`}>
              <div className='text-center pt-2'>CONSULTORIA EM AUTOMAÇÃO COMERCIAL</div>
              <hr/>
              <div className='w-100 px-3'>
                A ECO Sistemas e Soluções presta serviço de consultoria em automação comercial, com destaque em sistemas e equipamentos para o comércio em geral. 
                Tem como foco a implantação e o suporte de sistemas comerciais para micro e pequenas empresas.
              </div>
            </div>
          </Col>

		  <Col xs={0} md={4} />

          <Col xs={12} md={3} className='d-flex align-items-center justify-content-center zIndex99'>
            <FormContato />
          </Col>
        </Row>

        <Row>
			{/* <Col xs={12} style={{
				backgroundImage: `url(${ImgAutomacao})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover'
				}} className={`h100v p-5 d-flex align-items-center`}>
			</Col> */}

			<Col ref={vantagens} xs={12} style={{
				backgroundImage: `url(${ImgVantagens})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'contain'
				}} className={`h100v p-5 d-flex align-items-center`}>
				
				<Row>
					<Col xs={0} md={4}></Col>
					<Col xs={12} md={4} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 p-4`}>
					<h3>VANTAGENS</h3>
					Os sistemas comerciais buscam armazenar informações essenciais ao negócio, 
					unificar e integrar as ferramentas de trabalho (compras, vendas, controle de estoque e faturamento), 
					gerar relatórios referente as operações anteriores e também, controlar o fluxo de caixa.
					</Col>
				</Row>
			</Col>

			<Col xs={12} style={{
				backgroundImage: `url(${ImgEstoque})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top',
				backgroundSize: 'auto'
				}} className={`h100v p-5 d-flex align-items-center justify-content-center`}>
				
				<Row>
				<Col xs={1} md={7}></Col>
				<Col xs={10} md={3} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 w-100 p-4`}>
          <h3>VANTAGENS</h3>
          -Otimização do espaço físico
          <br/>
					<br/>-Manter o fluxo de mercadorias de alta demanda
          <br/>
          <br/>-Economia de recursos reduzindo desperdício
				</Col>
				</Row>
			</Col>

			<Col ref={empresa} xs={12} style={{
              backgroundImage: `url(${ImgEmpresa})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'auto'
            }} className={`h100v p-2 d-flex align-items-center`}>
            
            <Row>
              <Col xs={0} sm={2} lg={3}></Col>
              <Col xs={12} sm={8} lg={6} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 p-2`}>
                <h3>EMPRESA</h3>
                <p>Atuante no mercado desde 2007, a Eco Sistemas e Soluções é uma empresa especializada na consultoria em automação comercial, somos especialistas na  instalação e configuração do sistema gerencial Eco Sistema, atualização tributária dos cadastros dos produtos para venda, configuração dos equipamentos para ambiente do comércio varejista, damos treinamento e suporte para operadores de retaguarda e frente de caixa do comércio em geral. Atendemos empresas das categorias: MEI, Simples Nacional e categoria do Lucro Presumido. Também desenvolvemos aplicativos para empresas do Marketing Multinivel e desenvolvemos a Plataforma Loja Online e aplicativo de venda para o comercio varejista em geral.</p>
                <p><b>Missão: </b>Promover o melhor desempenho do comercio através das tecnologias do mercado, solucionando suas necessidades em informatização primando pela ética e confiabilidade.</p>
                
                <p><b>Visão: </b>Ser referência na prestação de serviço em automação comercial através de parcerias sólidas com fábricas de software e distribuidores de equipamentos.</p>
                <p><b>Valores: </b>Honestidade e credibilidade, 
                Acessibilidade para o usuário, 
                Excelência no atendimento,
                Compromisso com o cliente,
                Oportunidade para novas gerações</p>
              </Col>
            </Row>

        </Col>

        </Row>
        <Rodape />
    </Container>
    </React.Fragment>
  );
}

export default App;
