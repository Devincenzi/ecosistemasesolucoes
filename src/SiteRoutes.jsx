import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import PoliticadePrivacidade from './politicadeprivacidade';

function SiteRoutes(){
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/politicadeprivacidade' element={ <PoliticadePrivacidade /> } />
        </Routes>
    )
}

export default SiteRoutes;