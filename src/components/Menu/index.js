import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' alt="Logo" src={Logo} />
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;