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

import './components/PopoverFont.css';

const regexClass = /(Font-[a-zA-Z]+)/g;

const fonts = [
	'Font-Arial',
	'Font-TimesNewRoman',
	'Font-FranklinGothic',
    'Font-NotoSerif',
    'Font-Lato',
    'Font-Jost',
    'Font-FragmentMono',
	'Font-OpenSans',
	'Font-PTSerif',
	'Font-Roboto',
	'Font-Playfair'
];

function App(){
	const topo = useRef(null);
	const vantagens = useRef(null);
	const empresa = useRef(null);
	const produtosEmissor = useRef(null);
	const produtosPDV = useRef(null);

	const fontsList = useRef(null);
	const cardFonts = useRef(null);
	const [cardTopOffset, setCardTopOffset] = useState(null);
	const [cardRightOffset, setCardRightOffset] = useState(null);
	const toChangeFont = useRef(null);

	const [showEmissorNF, setShowEmissorNF] = useState(false);

    const handleShowEmissorNF = () => setShowEmissorNF(true);
    const handleCloseEmissorNF = () => setShowEmissorNF(false);

	const [showPDV, setShowPDV] = useState(false);

    const handleShowPDV = () => setShowPDV(true);
    const handleClosePDV = () => setShowPDV(false);

	const scrollToSection = (elementRef) => {
		if(!elementRef)
		  return;
	
		window.scrollTo({
		  top: elementRef.current.offsetTop,
		  behavior: 'smooth'
		});
	}

	useEffect(() => {

		function renderFontsList(){
			if(!toChangeFont.current)
				return;

			fontsList.current = fonts.map(f => 
                <span key={f} className={`itemList p-2 ${f}`} 
				onClick={() => changeFont(f)}>{f}</span> 
                )
				
			cardFonts.current.classList.remove('d-none');
		}

		renderFontsList();

	}, [toChangeFont.current]);

	const renderCardFonts = (event) => {
		if(toChangeFont.current == event.currentTarget){
			cardFonts.current.classList.add('d-none');
			toChangeFont.current = null;
			return;
		}

		toChangeFont.current = event.currentTarget;

		const cardHeight = toChangeFont.current.clientHeight;

		setCardTopOffset(event.clientY - cardHeight);
		setCardRightOffset(event.clientX);

		// console.log(cardFonts.current.classList.toggle('d-none'));

		// cardFonts.current.classList.toggle('d-none');
	}

	function changeFont(font){
		// console.log(target);
		const listaClassesElemento = toChangeFont.current.classList;

		const classToRemove = listaClassesElemento.value.match(regexClass);
		listaClassesElemento.remove(classToRemove);
		
		const selectedClass = classToRemove ? classToRemove[0] : 'font-teste';

		if(selectedClass === font)
			return;

		listaClassesElemento.add(font);
	}

  return (
    <>

	<div style={{top: `${cardTopOffset}px`, left: `${cardRightOffset}px`}} ref={cardFonts} 
		className='d-none cardFonts text-center' target={toChangeFont.current}>
		<Card>
			<Card.Body className='px-0'>
				{fontsList.current ? fontsList.current.map(e => e) : ''}
			</Card.Body>
		</Card>
	</div>

    <NavClient needHide={true}>
        <Nav className='w-100 d-flex justify-content-end'>
          <Nav.Link onClick={() => scrollToSection(vantagens)} href="#">Vantagens</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(empresa)} href="#">Empresa</Nav.Link>
          {/* <Nav.Link onClick={() => scrollToSection(produtos)} href="#">Produtos</Nav.Link> */}
		  <NavDropdown title='Produtos' menuVariant='dark'>
            <NavDropdown.Item href='#' onClick={() => scrollToSection(produtosEmissor)}>Emissor Fiscal</NavDropdown.Item>
            <NavDropdown.Item href='#' onClick={() => scrollToSection(produtosPDV)}>PDV</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='#'>Aplicativo</NavDropdown.Item>
          </NavDropdown>
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
        <Row ref={topo} className='h100v'>
          <video autoPlay muted loop className='myVideo'>
            <source src={VideoHome} type="video/mp4"/>
          </video>

          <Col xs={12} md={4} className='d-flex flex-column justify-content-start zIndex99'>
			<div className='w-100 d-flex justify-content-center p-5'>
				<img src={Logo} className='img-fluid' width={148} height={79} alt='logo'/>
			</div>

            <div className={`bg-dark bg-opacity-50 text-white rounded-4 w-100 p-3 m-3`}>
              <div className='text-center pt-2'>SISTEMAS APLICATIVOS E CONSULTORIA PARA A SUA EMPRESA</div>
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

		<Row>
			<Col xs={10}>

			</Col>
		</Row>

		<Row className='d-flex justify-content-center m-2'>
			<Col ref={vantagens} xs={12} className='text-center m-5 p-2 textoTitulo'><h1 onClick={renderCardFonts}>VANTAGENS</h1></Col>
			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
			<div className='text-center textoTitulo' onClick={renderCardFonts}>CONTROLES ATRAVÉS DA AUTOMAÇÃO COMERCIAL</div>

			{/* aqui */}
			<ul className='textoCard' onClick={renderCardFonts}>
				<li>Redução de custos e desperdícios</li>
				<li>Melhoria na logística</li>
				<li>Controle sobre as vendas</li>
				<li>Gestão do relacionamento com os clientes</li>
				<li>Controle sobre o faturamento</li>
				<li>Impulso para as vendas</li>
				<li>Menos erros humanos</li>
			</ul>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTitulo' onClick={renderCardFonts}>PROCESSOS ATRAVÉS DA AUTOMAÇÃO DE PROCESSOS</div>
				<ul className='textoCard' onClick={renderCardFonts}>
					<li>Ganho na produtividade</li>
					<li>Integração dos setores</li>
					<li>Padronização do produtos e serviços</li>
					<li>Redução de custos</li>
					<li>Análises abertura e fechamento do caixa</li>
					<li>Melhoria na tomada de decisões</li>
				</ul>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>            
				<div className='text-center textoTitulo' onClick={renderCardFonts}>RESULTADOS NA AUTOMAÇÃO COMERCIAL</div>
				<ul className='textoCard' onClick={renderCardFonts}>
					<li>Plano e elaboração do processo da empresa</li>
					<li>Organização dos setores da empresa</li>
					<li>Revisão e ajuste da classificação fiscal dos produtos</li>
					<li>Diminuição d impostos pagos a maior</li>
					<li>Integração com outros sistemas</li>
					<li>Geração dos arquivos xml mensal para conferencia da contabilidade</li>
					<li>Aumento das vendas através do aplicativo próprio da loja</li>
					<li>Aumento das vendas através do aplicativo para vendedores externos</li>
				</ul>
			</Col>
        </Row>

		{/* EMPRESA */}
		<div ref={empresa} className='d-flex justify-content-center mt-5 pt-1'>
			<div className='w-50 divisor'></div>
		</div>

		<Row className='d-flex justify-content-center m-2'>
			<Col  xs={12} className='text-center m-5 p-2 textoTitulo'><h1 onClick={renderCardFonts}>NOSSA HISTÓRIA</h1></Col>
			<Col xs={9} className='mb-2 pb-4'>
				<h5 className='textoTitulo justify' onClick={renderCardFonts}>Atuante no mercado desde 2007, a ECO Sistemas e Soluções é uma empresa especializada na consultoria em automação comercial, 
				cujo trabalho consiste em desenvolver  instalar e configurar sistemas e aplicativos, dar treinamento e suporte 
				para operadores de retaguarda e frente de caixa do comércio em geral. 
				<br/>Aliada aos conceitos de respeito e 
				compromisso com parceiros e clientes, a ECO Sistemas se propõe gerar resultados positivos e 
				reduzir custos nos processos de automação comercial.</h5>
			</Col>
			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTitulo' onClick={renderCardFonts}>MISSÃO</div>
				<span className='textoCard' onClick={renderCardFonts}>
					Promover o melhor desempenho do comercio através das tecnologias do mercado, 
					solucionando suas necessidades em informatização primando pela ética e confiabilidade.
				</span>
			</Col>

			<Col xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTitulo' onClick={renderCardFonts}>VISÃO</div>
				<span className='textoCard' onClick={renderCardFonts}>
					Ser referência na prestação de serviço em automação comercial através de parcerias sólidas 
					com fábricas de software e distribuidores de equipamentos.
				</span>
			</Col>

			<Col ref={empresa} xs={12} sm={6} lg={3} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>            
				<div className='text-center textoTitulo' onClick={renderCardFonts}>VALORES</div>
				<span className='textoCard' onClick={renderCardFonts}>
					Honestidade e credibilidade
					<br/>Acessibilidade para o usuário
					<br/>Excelência no atendimento
					<br/>Compromisso com o cliente
					<br/>Oportunidade para novas gerações
				</span>
			</Col>
        </Row>

		{/* PRODUTOS EMISSOR*/}
		<div ref={produtosEmissor} className='d-flex justify-content-center mt-5 pt-1'>
			<div className='w-50 divisor'></div>
		</div>

		<Row className='d-flex justify-content-center m-2'>
			<Col xs={12} className='text-center m-4 pt-3 textoTitulo'><h1 onClick={renderCardFonts}>PRODUTOS</h1></Col>
			<Col xs={12} className='mb-4 pb-2 text-center'>
				<h4 className='textoTitulo' onClick={renderCardFonts}>SOFTWARE ECO SISTEMA EMISSOR FISCAL</h4>
			</Col>
			
			{/* INÍCIO CARROSSEL IMAGENS */}
			<Col xs={6} className='mb-4'>
				<CarrosselEmissorNF click={handleShowEmissorNF}/>
			</Col>

			<Modal show={showEmissorNF} onHide={handleCloseEmissorNF} centered dialogClassName='w90per'>
				<ModalCarrossel titulo='SOFTWARE ECO SISTEMA EMISSOR FISCAL'>
					<CarrosselEmissorNF />
				</ModalCarrossel>
			</Modal>

			{/* FIM CARROSSEL IMAGENS */}

			<Col xs={9} className='textoCard' onClick={renderCardFonts}>
				<p>Seja você uma pequena empresa que necessita apenas de emitir Notas Fiscais  este é o software certo.</p>
				<p>Software preparado para emissão de documentos fiscais e completa gestão da sua empresa com módulos de vendas, compras, estoque, logística, ligação bancaria, plataforma online de vendas e muito mais.</p>
				<p>O Emissor Fiscal é um software com uma extensiva lista de funcionalidades e se você necessita de um ERP completo para Gestão ou um PDV para Automação, ele é certamente a solução.</p>
				<p>Faça uso de todos os benefícios de tecnologia WEB sem comprometer os dados confidenciais de sua empresa. Ao contrário de muitos outros softwares, cujos os dados são mantidos em servidores externos que você não controla, aqui você é quem decide. Pode manter o software 100% em nuvem instalado em VPS ou apenas no seu computador local.</p>
				<p>E caso necessite, nosso suporte de é tecnicamente capacitado para oferecer o melhor suporte, de treinamento  e até ajustes de software para as suas necessidades especificas.</p>
				<p>Com constantes atualizações e melhoramentos o Emissor Fiscal garante sempre o melhor custo benefício oferendo lhe as melhores e mais recentes tendências de mercado. Um software que cresce em funcionalidades e ajuda sua empresa a crescer financeiramente com aumentos performance e rentabilidade.</p>
				<p>Disponibilizamos também uma instalação grátis  limitada à emissão de NF-e, NFC-e e CF-e/SAT. Esta versão pode ser utilizada sem custos para você e com a garantia de que a qualquer momento pode fazer um Upgrade para versão completa com ajuda do nosso suporte.</p>
			</Col>
		</Row>

		<Row className='d-flex justify-content-center m-2'>
			<Col xs={12} className='text-center m-5 p-2 textoTitulo'><h1 onClick={renderCardFonts}>Características</h1></Col>
			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul className='textoCard' onClick={renderCardFonts}>
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
				<ul className='textoCard' onClick={renderCardFonts}>
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
				<ul className='textoCard' onClick={renderCardFonts}>
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
				<ul className='textoCard' onClick={renderCardFonts}>
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
				<ul className='textoCard' onClick={renderCardFonts}>
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
				<ul className='textoCard' onClick={renderCardFonts}>
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
		<div ref={produtosPDV} className='d-flex justify-content-center mt-5 pt-1'>
			<div className='w-50 divisor'></div>
		</div>

		<Row className='d-flex justify-content-center m-2'>
			<Col xs={12} className=' m-5 p-3 text-center'>
				<h4 className='textoTitulo' onClick={renderCardFonts}>SOFTWARE ECO SISTEMA PDV WIN</h4>
			</Col>

			{/* INÍCIO CARROSSEL IMAGENS */}
			<Col xs={6} className='mb-4'>
				<CarrosselPDV click={handleShowPDV}/>
			</Col>

			<Modal show={showPDV} onHide={handleClosePDV} centered dialogClassName='w90per'>
				<ModalCarrossel titulo='SOFTWARE ECO SISTEMA PDV WIN'>
					<CarrosselPDV />
				</ModalCarrossel>
			</Modal>

			{/* FIM CARROSSEL IMAGENS */}

			<Col xs={9} className='textoCard' onClick={renderCardFonts}> 
				<p>Software sem limitação no número de documentos fiscais emitidos e ainda disponibilizamos upgrades para que possa manter o software compatível com as demandas da SEFAZ e o funcionando atualizado. </p>
				<p>Cumprindo com todas as disposições legais impostas pela SEFAZ, este software, permite a emissão de NFC-e ou CF-e+SAT. Se não está obrigado a emitir documentos fiscais, pode também utilizar este PDV apenas para gestão e controle do seu comercio.</p>
				<p>Entre em contato agora mesmo e comece a fazer uso de um PDV completo por 30 dias Grátis. </p>
				<p>Suporte especializado para  lhe ajudar  e até mesmo um upgrade de software que potencie ainda mais as suas vendas.</p>
				<p>O software permite também criar Pedidos, Orçamentos e até mesmo emissão Notas Fiscais e com isto você tem a possibilidade de emitir documentos no PDV e também na retaguarda.</p>
				<p>Disponibilizamos uma versão de teste completa  do software com muitas funcionalidades adicionais. </p>
			</Col>
		</Row>

		<Row className='d-flex justify-content-center m-2'>
			<Col xs={12} className='text-center m-5 p-2 textoTitulo'><h1 onClick={renderCardFonts}>Características</h1></Col>
			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul onClick={renderCardFonts}>
					<li>Transparecia para com o cliente</li>
					<li>Listar produtos da venda</li>
					<li>Mostrar valor dos produtos</li>
					<li>Quantidades digitadas</li>
					<li>Método pagamento selecionado</li>
					<li>QR code de pagamento PIX</li>
					<li>Resumo da venda</li>
					<li>Evitar desvios no caixa</li>
					<li>Agilizar vendas</li>
					<li>Para Celular ou Tablet</li>
					<li>Todos os tamanhos de tela </li>
				</ul>
			</Col>
			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul onClick={renderCardFonts}>
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

			<Col xs={12} sm={6} lg={3}  className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul onClick={renderCardFonts}>
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

			<Col xs={12} sm={6} lg={3} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul onClick={renderCardFonts}>
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

    </Container>
    </>
  );
}

export default App;
