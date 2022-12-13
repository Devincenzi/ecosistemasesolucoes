import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css';

function WhatsappButton(){
    return (
        <> 
            <a href='https://wa.me/5551991672281' target='_blank' rel="noreferrer" className={`text-decoration-none text-reset whatsappButtonParent`}>
                <FaWhatsapp className='whatsappButton' fill='white'/>
            </a>
        </>
    );
}

export default WhatsappButton;