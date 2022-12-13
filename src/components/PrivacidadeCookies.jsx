import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './PrivacidadeCookies.css';

const cookies = new Cookies();

function PrivacidadeCookies(){
    const [showCardCookie, setShowCardCookie] = useState(true);

    const handleCloseCard = () => setShowCardCookie(false);

    useEffect(() => {
        function getCookiesData(){
            const jaAceito = cookies.get('politicadeprivacidade');
            setShowCardCookie(!jaAceito);
        }

        getCookiesData();
    }, []);

    const acceptCookies = () => {
        cookies.set('politicadeprivacidade', true);
        setShowCardCookie(false);
    }

    return (
        <>
        <div className={`cardCookie ${showCardCookie ? '' : 'd-none'}`}>
            <p className='tituloCookie'>Aviso de Cookies!</p>
            <p className='mb-0'>Esse site utiliza cookies para personalizar sua experiência. Ao continuar navegando 
                você concorda com nossa <a href='politicadeprivacidade'>Política de privacide de Cookies.</a>
            </p>
            <div className='d-flex justify-content-end'>
                <div className='botaoCookie text-center cursorPointer' onClick={acceptCookies}>ACEITAR COOKIES</div>
            </div>
        </div>
        </>
    );
}

export default PrivacidadeCookies;