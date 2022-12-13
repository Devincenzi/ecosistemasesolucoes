import React, { useEffect, useState } from 'react';
import { Navbar, Container, Collapse } from 'react-bootstrap';
import logosm from '../arquivos/imgs/logosm.png';

function NavClient(props){
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if(!props.needHide){
            setShowNav(true);
            return;
        }

        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0)
                setShowNav(true);
            else
                setShowNav(false);
        });
    }, []);

    return (
        <Collapse in={showNav}>
            <Navbar bg='dark' expand="lg" variant='dark' fixed='top' className='px-5'>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logosm} width={36} height={36} alt='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        {props.children}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Collapse>
    )
}

export default NavClient;