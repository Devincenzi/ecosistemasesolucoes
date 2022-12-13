import React from "react";
import { useState } from 'react';
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import axios from 'axios';
import '../App.css';

const sucesso = <><h6>Sua mensagem foi enviada com sucesso!</h6><p>Por favor aguarde nosso retorno.</p></>
const fracasso = <><h6>Falha ao enviar a mensagem!</h6><p>Por favor tente novamente mais tarde, ou por outro meio de contato.</p></>

function FormContato(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [mensagemResposta, setMensagemResposta] = useState(sucesso);

    const handleClose = () => setShowModal(false);

    function handleSubmit(event){
        event.preventDefault();

        // axios({
        //     method: 'get',
        //     url: `https://ecosistemasesolucoes.com.br/contact.js?nome=${nome}&email=${email}&assunto=${assunto}&mensagem=${mensagem}`,
        //     withCredentials: false,
        //   }).then(function (response){
        //     console.log(response.data);
        //     if(response.status == 200){
        //         clearForm();
        //         setMensagemResposta(sucesso);
        //         setShowModal(true);
        //     }else{
        //         setMensagemResposta(fracasso);
        //         setShowModal(true);
        //     }
        // }).catch(function (error) {
        //     console.log(error);
        //     setMensagemResposta(fracasso);
        //     setShowModal(true);
        // });;

        axios.get(`https://ecosistemasesolucoes.com.br/contact?nome=${nome}&email=${email}&assunto=${assunto}&mensagem=${mensagem}`)
            .then(function (response){
                console.log(response.data);
                if(response.status == 200){
                    clearForm();
                    setMensagemResposta(sucesso);
                    setShowModal(true);
                }else{
                    setMensagemResposta(fracasso);
                    setShowModal(true);
                }
            }).catch(function (error) {
                console.log(error);
                setMensagemResposta(fracasso);
                setShowModal(true);
            });

        clearForm();
        setShowModal(true);
    }

    function clearForm(){
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    }

    return (
        <>
        <div className={`w-100 fundoAzul text-light rounded-4 p-2`}>
            <div className='text-center pt-3 textoTitulo'><b>ENTRE EM CONTATO</b></div>
            <hr/>
            {/* <div className='w-100 px-2'> */}
                <Form onSubmit={(e) => handleSubmit(e)}>
                {/* <Form method='GET' action="contact.js"> */}
                    <Row>
                        <Col xs={4} md={12}>
                            <Form.Group className='px-1'>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control required type='text' placeholder='Seu nome' value={nome} autoFocus onChange={e => setNome(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs={4} md={12}>
                            <Form.Group className='px-1'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type='email' placeholder='Seu email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={4} md={12}>
                            <Form.Group>
                                <Form.Label>Assunto</Form.Label>
                                <Form.Control required type='text' placeholder='Digite o assunto' value={assunto} onChange={e => setAssunto(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control required as='textarea' placeholder='Digite sua mensagem' value={mensagem    } onChange={e => setMensagem(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>

                        <div className='w-100 text-end p-2'>
                            <Button variant='primary' type='submit'>Enviar</Button>
                        </div>
                    </Row>
                </Form>
            {/* </div> */}
        </div>

        <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Body className='text-center w-100'>
                {mensagemResposta}
            </Modal.Body>
            <Modal.Footer>
                <div className='d-flex justify-content-center w-100'>
                    <Button variant='primary' onClick={handleClose}> OK </Button>
                </div>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default FormContato;