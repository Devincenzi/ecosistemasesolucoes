import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';

function ModalCarrossel(props){

    return (
        <>
        <Modal.Header closeButton>
            <Modal.Title>{props.titulo}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Container>
                {props.children}
            </Container>
        </Modal.Body>
        </>
    );
}

export default ModalCarrossel;