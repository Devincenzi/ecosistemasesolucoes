import React, { useRef, useState, useEffect } from 'react';
import { Nav, NavDropdown, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import './App.css';

import FormContato from './components/FormContato';
import NavClient from './components/NavClient';
import WhatsappButton from './components/WhatsappButton';
import Ebook from './arquivos/pdfs/ebook.pdf';
import VideoHome from './arquivos/videos/videoEcoHome.mp4';

import Logo from './arquivos/imgs/logo.png';

import ModalCarrossel from './components/ModalCarrossel';
import CarrosselEmissorNF from './components/CarrosselEmissorNF';
import CarrosselPDV from './components/CarrosselPDV';
import CarrosselApp from './components/CarrosselApp';
import CarrosselADMApp from './components/CarrosselADMApp';
import CarrosselCRM from './components/CarrosselCRM';
import CarrosselADMCRM from './components/CarrosselADMCRM';

function App(){
	const topo = useRef(null);
	const vantagens = useRef(null);
	const empresa = useRef(null);
	const produtosEmissor = useRef(null);
	const produtosPDV = useRef(null);
	const appLoja = useRef(null);
	const appCRM = useRef(null);

	const [showEmissorNF, setShowEmissorNF] = useState(false);

    const handleShowEmissorNF = () => setShowEmissorNF(true);
    const handleCloseEmissorNF = () => setShowEmissorNF(false);

	const [showPDV, setShowPDV] = useState(false);

    const handleShowPDV = () => setShowPDV(true);
    const handleClosePDV = () => setShowPDV(false);

	const [showApp, setShowApp] = useState(false);

    const handleShowApp = () => setShowApp(true);
    const handleCloseApp = () => setShowApp(false);

	const scrollToSection = (elementRef) => {
		if(!elementRef)
		  return;
	
		window.scrollTo({
		  top: elementRef.current.offsetTop - 60,
		  behavior: 'smooth'
		});
	}

  return (
    <>
    <NavClient needHide={true}>
        <Nav className='w-100 d-flex justify-content-end'>
          <Nav.Link onClick={() => scrollToSection(vantagens)} href="#">Vantagens</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(empresa)} href="#">Empresa</Nav.Link>
          {/* <Nav.Link onClick={() => scrollToSection(produtos)} href="#">Produtos</Nav.Link> */}
		  <NavDropdown title='Produtos' menuVariant='dark'>
            <NavDropdown.Item href='#' onClick={() => scrollToSection(produtosEmissor)}>Emissor Fiscal</NavDropdown.Item>
            <NavDropdown.Item href='#' onClick={() => scrollToSection(produtosPDV)}>PDV</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='#'  onClick={() => scrollToSection(appLoja)}>Loja Online</NavDropdown.Item>
            <NavDropdown.Item href='#'  onClick={() => scrollToSection(appCRM)}>Loja CRM WIN</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Downloads' menuVariant='dark'>
            <NavDropdown.Item target='_blank' href={Ebook}>E-book NFCe</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
            <NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='politicadeprivacidade'>Política de Privacidade</Nav.Link>
        </Nav>
    </NavClient>

    <WhatsappButton />

    <Container fluid className='allFather'>
        <Row ref={topo} className='h100v'>
          <video autoPlay muted loop className='myVideo'>
            <source src={VideoHome} type="video/mp4"/>
          </video>

          <Col xs={12} md={4} className='d-flex flex-column justify-content-start zIndex99'>
			<div className='w-100 d-flex justify-content-center logoVideo'>
				<img src={Logo} className='img-fluid' width={148} height={79} alt='logo'/>
			</div>

            <div className={`fundoAzul text-white rounded-4 w-100 p-3 m-3`}>
              <div className='text-center pt-2 textoTitulo'><b>SISTEMAS APLICATIVOS E CONSULTORIA PARA A SUA EMPRESA</b></div>
              <hr/>
              <div className='w-100 px-3 justify-text'>
				A ECO Sistemas e Soluções presta serviço de consultoria em automação comercial, com destaque em sistemas e equipamentos para o comércio em geral. 
				Tem como foco a implantação e o suporte de sistemas comerciais para micro e pequenas empresas.
              </div>
            </div>

          </Col>

          <Col xs={0} md={4} ></Col>

          <Col xs={12} md={3} className='d-flex align-items-center justify-content-center zIndex99'>
            <FormContato />
          </Col>
        </Row>


		<Row ref={vantagens} className='justify-content-center pb-4'>
			<Col xs={12} className='text-center m-5 p-2 textoTitulo'>
				<h2>VANTAGENS NA AUTOMAÇÃO COMERCIAL</h2>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>            
				<div className='text-center textoTituloCard'>RESULTADOS DA AUTOMAÇÃO</div>
				<ul className='textoCard'>
					<li>Plano e elaboração do processo da empresa</li>
					<li>Organização dos setores da empresa</li>
					<li>Revisão e ajuste da classificação fiscal dos produtos</li>
					<li>Diminuição dos impostos pagos a maior</li>
					<li>Integração com outros sistemas</li>
					<li>Geração dos arquivos xml mensal para conferencia da contabilidade</li>
					<li>Aumento das vendas através do aplicativo próprio da loja</li>
					<li>Aumento das vendas através do aplicativo para vendedores externos</li>
				</ul>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTituloCard'>PROCESSOS DA AUTOMAÇÃO</div>
				<ul className='textoCard'>
					<li>Ganho na produtividade</li>
					<li>Integração dos setores</li>
					<li>Padronização do produtos e serviços</li>
					<li>Redução de erros manuais</li>
					<li>Histórico de compras e vendas</li>
					<li>Redução de custos</li>
					<li>Melhoria na tomada de decisões</li>
					<li>Análises abertura e fechamento do caixa</li>
				</ul>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTituloCard'>CONTROLES DA AUTOMAÇÃO</div>

				{/* aqui */}
				<ul className='textoCard'>
					<li>Redução de custos e desperdícios</li>
					<li>Melhoria na logística</li>
					<li> Financeiro a pagar receber</li>
					<li> Emissão de documentos fiscais</li>
					<li>Controle de estoque</li>
					<li>Controle sobre as vendas</li>
					<li>Gestão do relacionamento com os clientes</li>
					<li>Controle sobre o faturamento geral</li>
					<li>Impulso para as vendas</li>
					<li>Menos erros humano</li>
				</ul>
			</Col>
		</Row>

			{/* EMPRESA */}
			{/* <div ref={empresa} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={empresa} className='justify-content-center pb-4'>
				<Col  xs={12} className='text-center m-5 pt-2 textoTitulo'>
					<h2>NOSSA HISTÓRIA</h2>
				</Col>
				<Col xs={9} className='mb-2 pb-4 textoAdjacente justify-text'>
					<p>A ECO Sistemas e Soluções é uma empresa especializada na consultoria em automação comercial, somos especialistas na  instalação e configuração do sistema de venda ECO Sistema e PDV Win frente de caixa, revisão e atualização tributária dos cadastros dos produtos para venda, configuração dos equipamentos para ambiente do comércio varejista.  </p>
					<p>Desenvolvimento do aplicativo Loja Online para o comércio varejista, pagamento em cartão com as melhores taxas de mercado, calculo do frete por CEP na venda.  Painel Administrativo intuitivo com botões de função simples para publicar os produtos da loja.</p>
					<p>Desenvolvimento do aplicativo CRM WIN, uma ferramenta indispensável para afiliados e distribuidores alavancarem a venda dos produtos das empresas de Marketing Multinivel.</p>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<div className='text-center textoTituloCard'>MISSÃO</div>
					<span className='textoCard'>
						Promover o melhor desempenho do comercio através das tecnologias do mercado, 
						solucionando suas necessidades em informatização primando pela ética e confiabilidade.
					</span>
				</Col>

				<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>
					<div className='text-center textoTituloCard'>VISÃO</div>
					<span className='textoCard'>
						Ser referência na prestação de serviço em automação comercial através de parcerias sólidas 
						com fábricas de software e distribuidores de equipamentos.
					</span>
				</Col>

				<Col ref={empresa} xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>            
					<div className='text-center textoTituloCard'>VALORES</div>
					<span className='textoCard'>
						Honestidade e credibilidade
						<br/>Acessibilidade para o usuário
						<br/>Excelência no atendimento
						<br/>Compromisso com o cliente
						<br/>Oportunidade para novas gerações
					</span>
				</Col>
			</Row>

			{/* PRODUTOS EMISSOR*/}
			{/* <div ref={produtosEmissor} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={produtosEmissor} className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-4 pt-3 textoTitulo'>
					<h2>PRODUTOS</h2>
				</Col>
				<Col xs={12} className='mb-4 pb-2 text-center'>
					<h3 className='textoTitulo'>SOFTWARE ECO SISTEMA EMISSOR FISCAL</h3>
				</Col>
				
				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={8} className='mb-4'>
					<CarrosselEmissorNF click={handleShowEmissorNF}/>
				</Col>

				<Modal show={showEmissorNF} onHide={handleCloseEmissorNF} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='SOFTWARE ECO SISTEMA EMISSOR FISCAL'>
						<CarrosselEmissorNF />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={9} className='textoAdjacente'>
					<p>Software preparado para emissão de documentos fiscais e completa gestão da sua empresa com módulos de vendas, compras, estoque, logística, ligação bancaria, plataforma online de vendas e muito mais.</p>
					<p>O Emissor Fiscal é um software com uma extensiva lista de funcionalidades e se você necessita de um ERP completo para Gestão ou um PDV para Automação, ele é certamente a solução.</p>
					<p>Suporte tecnicamente capacitado para oferecer o melhor suporte, de treinamento  e até ajustes de software para as suas necessidades especificas.</p>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 pb-2 textoTitulo'>
					<h2>Características</h2>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Configuração de Tributos</li>
						<li>Histórico de movimento de caixa</li>
						<li>Importação automática de notas da SEFAZ</li>
						<li>Login e logout de operadores de caixa</li>
						<li>Compatível com todos os regimes fiscais</li>
						<li>Orçamentos de compra e venda</li>
						<li>Pedidos de compra e venda</li>
						<li>Recebimentos / contas a receber </li>
						<li>Confirmação manual de entradas em estoque</li>
						<li>Perfil de acesso configurável por usuário</li>
					</ul>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Cadastro de produtos</li>
						<li>Cadastro de Clientes </li>
						<li>Cadastro de Fornecedores</li>
						<li>Cadastro de Transportadoras</li>
						<li>Cadastro de Vendedores</li>
						<li>Cadastro de Organizações</li>
						<li>Cadastro de métodos de Pagamento</li>
						<li>Emissão de nota fiscal / NF-e </li>
						<li>Emissão de nota fiscal ao consumidor / NFC-e </li>
						<li>Pré-visualização da NF-e antes da emissão</li>
					</ul>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Atribuição inteligente de códigos tributários</li>
						<li>Pesquisa e Inutilização de nº de Nota</li>
						<li>Impressão de Carta de Correção </li>
						<li>Importação de arquivos XML de NF-e, NFCe</li>
						<li>Cadastrando automático de produtos e fornecedores pelas NF-e ou XML</li>
						<li>Comandas de mesas, avulsas, delivery e praça de alimentação</li>
						<li>Impressão de pedidos na cozinha ou copa</li>
						<li>Relatório de abertura e fechamento do caixa</li>
					</ul>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Disponibilidade de atualizações regulares</li>
						<li>Impressão de pedidos agrupados ou separados</li>
						<li>Nota Fiscal em XML e PDF</li>
						<li>Compatível com PDV de tela tátil</li>
						<li>Suporte a certificados A1 A3</li>
						<li>Calculo se substituição tributária ICMS-ST</li>
						<li>Alertas de prazo de validade do certificado</li>
						<li>Impressão de etiquetas</li>
						<li>Histórico detalhado do PDV por usuário</li>
						<li>Retiradas e suprimentos do caixa do PDV</li>
					</ul>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Emissão de NFC-e em contingência</li>
						<li>Cancelamento de NFC-e</li>
						<li>NFC-e em modo contingência com falha de rede</li>
						<li>Backup e restauração de base dados</li>
						<li>Dezenas de relatórios</li>
						<li>Número ilimitado de instalações </li>
						<li>Envio automático arquivos de XML para Contador em lotes</li>
						<li>Produtos de grade simples e composta</li>
						<li>Perfis de acesso configuráveis</li>
						<li>Ícones de acesso rápido</li>
					</ul>
				</Col>
				<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard'>
						<li>Vendas a credito PDV com limites por cliente</li>
						<li>Utilitários para funcionalidades avançadas</li>
						<li>TEF (Transferência Eletrônica de Fundos) da STONE e ZOOP</li>
						<li>Consultar chave NF-e de compra/venda</li>
						<li>Analise de produtos por CFOP de entrada e saída</li>
						<li>Definição e consulta do histórico de vendas mensal</li>
						<li>Consulta de produtos expirados</li>
						<li>Produtos compostos com subprodutos</li>
						<li>Venda de combustíveis e gás</li>
						<li>Cadastro de produtos pela NF-e de compra</li>
					</ul>
				</Col>
			</Row>

			{/* PRODUTOS PDV */}
			{/* <div ref={produtosPDV} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={produtosPDV} className='justify-content-center pb-4'>
				<Col xs={12} className=' m-5 pb-2 text-center'>
					<h3 className='textoTitulo'>SOFTWARE ECO SISTEMA PDV WIN</h3>
				</Col>

				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={8} className='mb-4'>
					<CarrosselPDV click={handleShowPDV}/>
				</Col>

				<Modal show={showPDV} onHide={handleClosePDV} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='SOFTWARE ECO SISTEMA PDV WIN'>
						<CarrosselPDV />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={9} className='textoAdjacente'> 
					<p>Software sem limitação no número de documentos fiscais emitidos e ainda disponibilizamos upgrades para que possa manter o software compatível com as demandas da SEFAZ e o funcionando atualizado. </p>
					<p>Cumprindo com todas as disposições legais impostas pela SEFAZ, este software, permite a emissão de NFC-e ou CF-e+SAT. Se não está obrigado a emitir documentos fiscais, pode também utilizar este PDV apenas para gestão e controle do seu comercio.</p>
					<p>Suporte especializado para  lhe ajudar  e até mesmo um upgrade de software que potencie ainda mais as suas vendas.</p>
					<p>O software permite também criar Pedidos, Orçamentos e até mesmo emissão Notas Fiscais e com isto você tem a possibilidade de emitir documentos no PDV e também na retaguarda.</p>
					<p>Disponibilizamos uma versão de teste completa  do software com muitas funcionalidades adicionais. </p>
					<p>Entre em contato agora mesmo e comece a fazer uso de um PDV completo por 30 dias Grátis. </p>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 pb-2 textoTitulo'>
					<h2>Características</h2>
				</Col>
				
			
				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul>
						<li>Transparêcia para com o cliente</li>
						<li>Listar produtos da venda</li>
						<li>Mostrar valor dos produtos</li>
						<li>Quantidades digitadas</li>
						<li>Método pagamento selecionado</li>
						<li>Resumo da venda</li>
						<li>Evitar desvios no caixa</li>
						<li>Agilizar vendas</li>
						<li>Para Celular ou Tablet</li>
						<li>Todos os tamanhos de tela </li>
					</ul>
				</Col>

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul>
						<li>Layout selecionável</li>
						<li>Layout programável por HTML</li>
						<li>Tela de PDV para cliente</li>
						<li>Apresentação do valor de troco</li>
						<li>Tela vertical ou horizontal</li>
						<li>Animações gráficas</li>
						<li>Imagem dos produtos</li>
						<li>Resumo da compra com totalizador</li>
						<li>Cliente confere as operações efetuadas no caixa</li>
						<li>Funcionamento sincronizado com o PDV</li>
					</ul>
				</Col>

				<Col xs={12} sm={6} lg={4}  className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul>
						<li>Utilitários para funcionalidades avançadas</li>
						<li>TEF (Transferência Eletrônica de Fundos) da STONE e ZOOP</li>
						<li>Consultar chave NF-e de compra/venda</li>
						<li>Analise de produtos por CFOP de entrada e saída</li>
						<li>Definição e consulta do histórico de vendas mensal</li>
						<li>Consulta de produtos expirados</li>
						<li>Produtos compostos com subprodutos</li>
						<li>Venda de combustíveis e gás</li>
						<li>Cadastro de produtos pela NF-e de compra</li>
					</ul>
				</Col>

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul>
						<li>Registro de operações não concluídas </li>
						<li>NFC-e em modo contingência com falha de rede</li>
						<li>Aparência personalizável</li>
						<li>Histórico detalhado do PDV por usuário</li>
						<li>Importação de arquivos XML de NF-e, NFCe</li>
						<li>Cancelamento de NFC-e</li>
						<li>Descontos/Acréscimos configuráveis por método de pagamento</li>
						<li>Pesquisa e inutilização de nº de nota</li>
						<li>Comandas de mesas avulsas, delivery e praça de alimentação</li>
						<li>Vendas a credito PDV com limites por cliente</li>
					</ul>
				</Col>
			</Row>

			{/* PRODUTOS App */}
			{/* <div ref={produtosApp} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={appLoja} className='justify-content-center pb-4'>
				<Col xs={12} className=' m-5 pb-2 text-center'>
					<h3 className='textoTitulo'>APLICATIVO LOJA ONLINE</h3>
				</Col>

				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={6} className='mb-4'>
					<CarrosselApp click={handleShowApp}/>
				</Col>

				<Modal show={showApp} onHide={handleCloseApp} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='APLICATIVO LOJA ONLINE'>
						<CarrosselApp />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={9} className='textoAdjacente'> 
					<p>O aplicativo Loja Online tem o intuito de apresentar as lojas do varejo, uma maneira mais fácil de ingressar no e-commerce e alavancar seus negócios.</p>
					<p>Versão com integração para pagamento em cartão com as melhores taxas do mercado, integração com Melhor Envio para calculo do frete, além de visual com tecnologia Google para oferecer aos seus participantes a melhor experiência de utilização.</p>
					<p>Novo Painel Administrativo, criamos botões de fácil acesso onde você poderá cadastrar seus produtos e publicar sua loja com facilidade acompanhar seus pedidos e verificar seus pagamentos no painel financeiro.</p>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 p-2 textoTitulo'>
					<h3>PAINEL ADMINISTRATIVO</h3>
				</Col>
				<Col xs={6} className='mb-4'>
					<CarrosselADMApp click={handleShowApp}/>
				</Col>

				<Modal show={showApp} onHide={handleCloseApp} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='PAINEL ADMINISTRATIVO'>
						<CarrosselADMApp />
					</ModalCarrossel>
				</Modal>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 p-2 textoTitulo'>
					<h3>COMO FUNCIONA VENDA ONLINE!</h3>
				</Col>
				
				<Col xs={9} className='mb-2 pb-4 textoAdjacente justify-text'>
					<p>Olhe à sua volta e veja onde está a atenção das pessoas. Seja no trânsito, em casa ou até no 
					trabalho, essas pequenas telas brilhantes estão sempre a um braço de distância. </p>

					<p>É inegável a facilidade que os dispositivos móveis trouxeram para nossas vidas diárias.</p>

					<p>Evidentemente, sua empresa ficará exposta a vários olhos se você investir em uma forte presença 
					digital. Mas sua marca e logotipo precisam ser vistos quando as pessoas desbloqueiam o celular. 
					Um aplicativo é sempre visto e lembrado, um site, por outro lado, está “escondido” dentro do 
					navegador. vamos comparar as duas experiências:</p>
				</Col>

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<div className='text-center textoTituloCard'>SITE RESPONSIVO</div>
					<span className='textoCard'>
						O usuário precisa receber algum estímulo forte (anúncio) para abrir o navegador e
						digitar corretamente o site da empresa. Após isso, ele precisa relembrar ou criar um novo login 
						de acesso, e então, finalmente, o possível cliente pode navegar e comprar 
						(se não houver outra distração pelo caminho)
					</span>
				 </Col>
				 
				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<div className='text-center textoTituloCard'>APLICATIVO</div>
					<span className='textoCard'>
						Entre as maiores vantagens dos aplicativos, estão, a possibilidade de inovação, 
						a maior proximidade com os clientes, a coleta de dados dos usuários e a maior vantagem competitiva.
					</span>
				 </Col>
			</Row>

			<Row ref={appCRM} className='justify-content-center pb-4'>
				<Col xs={12} className=' m-5 p-3 text-center'>
					<h3 className='textoTitulo'>APLICATIVO CRM WIN</h3>
				</Col>

				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={6} className='mb-4'>
					<CarrosselCRM click={handleShowApp}/>
				</Col>

				<Modal show={showApp} onHide={handleCloseApp} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='APLICATIVO CRM WIN'>
						<CarrosselCRM />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={9} className='textoAdjacente'> 
					<p>
						O Aplicativo CRM  WiN, foi desenvolvido  com o objetivo  de ser utilizado por distribuidores 
						afiliados no plano de negócio comercial das empresas que gerenciam a rede de distribuidores através 
						de uma plataforma de Marketing Multinívem . Sua funcionalidade é simples e intuitiva para o usuário 
						operar e obter informações privilegiadas na sua prospecção da venda e planejamento do negócio comercial.
					</p>
					<p>
						Através do Aplicativo CRM  WiN, o distribuidor afiliado cadastra o cliente potencial comprador do produto, 
						agenda visita comercial, localiza o endereço do cliente através do Google Maps, consulta a lista de 
						clientes aniversariantes do dia, pesquisa o cadastro do cliente na base de dados, também desenvolvemos 
						um método para o distribuidor pesquisar quais produtos e quantas vezes o cliente clicou nos produtos da 
						loja online. a comunicação com os consumidores cadastrados  é feita de dentro do aplicativo que esta integrado 
						ao link do Whatssap que faz a ligação para o  envio de mensagens, envio de imagens vídeos e demais conteúdos 
						informativos de marketing do negócio da “empresa fornecedora do produto”.	
					</p>
					<p><b>“O distribuidor vende e nós ajudamos!”</b></p>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 p-2 textoTitulo'>
					<h3>PAINEL ADMINISTRATIVO CRM WIN</h3>
				</Col>

				<Col xs={6} className='mb-4'>
					<CarrosselADMCRM click={handleShowApp}/>
				</Col>

				<Modal show={showApp} onHide={handleCloseApp} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='PAINEL ADMINISTRATIVO CRM WIN'>
						<CarrosselADMCRM />
					</ModalCarrossel>
				</Modal>
				
				<Col xs={9} className='mb-2 pb-4 textoAdjacente justify-text'>
					<p>O Painel Administrativo, fica ligado a API Rest do painel de gerenciamento dos afiliados 
					e API Rest do aplicativo Win. Os dados são coletados a partir dos cadastros realizados no
						painel de gerenciamento dos afiliados e, distribuidores, pedidos, clientes, consumidores 
						são importados e sua base de dados coletada fica armazenada em servidor Web, para 
						consultas da empresa distribuidora dos produtos na rede.</p>
					<p>
						A Plataforma ADMIN Win, foi desenvolvida para ser utilizada pela direção da empresa e 
						colaboradores que definem os processos de marketing e lançamentos dos produtos para prospecção da 
						venda na rede.
					</p>
				</Col>
			</Row>

    </Container>
    </>
  );
}

export default App;
