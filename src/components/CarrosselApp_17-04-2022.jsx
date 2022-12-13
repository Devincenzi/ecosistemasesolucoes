import { Row, Col } from 'react-bootstrap';
import './CarrosselApp.css';

import app1 from '../arquivos/imgs/app/home.jpg';
import app2 from '../arquivos/imgs/app/quantidadeTamanho.jpg';
import app3 from '../arquivos/imgs/app/removerCarrinho.jpg';
import app4 from '../arquivos/imgs/app/finalizarCompra.jpg';
import app5 from '../arquivos/imgs/app/dadosRetirarNaLoja.jpg';
import app6 from '../arquivos/imgs/app/pagamentoCartao.jpg';
import app7 from '../arquivos/imgs/app/numeroParcelas.jpg';
import app8 from '../arquivos/imgs/app/pdfPedido.jpg';
import app9 from '../arquivos/imgs/app/compartilharPedido.jpg';
import app10 from '../arquivos/imgs/app/redesSociais.jpg';

function CarrosselApp(props){

    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3;
        let next = el.nextElementSibling;

        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });

    return (
        <>
        <div className="row mx-auto my-auto justify-content-center">
            <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="col-md-3">                            
                            <img className="img-fluid cursorPointer" src={app1} 
                                alt='Cadastro de clientes' width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 1</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app2} className="img-fluid cursorPointer" 
                                alt="Controle de caixa" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 2</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app3} className="img-fluid cursorPointer" 
                                alt="Delivery" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 3</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app4} className="img-fluid cursorPointer" 
                                alt="Cadastro de imagens" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 4</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app5} className="img-fluid cursorPointer" 
                                alt="Financeiro" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 5</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app6} className="img-fluid cursorPointer" 
                                alt="Tela de pesquisas" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 6</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app7} className="img-fluid cursorPointer" 
                                alt="Tela de pesquisas" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 6</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app8} className="img-fluid cursorPointer" 
                                alt="Tela de pesquisas" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 6</div> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">                            
                            <img src={app9} className="img-fluid cursorPointer" 
                                alt="Tela de pesquisas" width={240} onClick={props.click} />
                                {/* <div className="card-img-overlay">Slide 6</div> */}
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
        </>
    )
}

export default CarrosselApp;