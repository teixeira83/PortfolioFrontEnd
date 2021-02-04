import React from 'react';

import { Logo, NavigationBar, NavList, NavListOption } from './styles';

import logo from '../../assets/img/logo.png'

export default function NavBar() {
    return (
        <NavigationBar>
            <a href="/">
                <Logo src={logo} alt="Logo do desenvolvedor frontend Rafael Teixeira" />
            </a>
            <NavList>
                <NavListOption className="border-animation" href="#about">SOBRE MIM</NavListOption>
                <NavListOption href="#portfolio">PORTFÓLIO</NavListOption>
                <NavListOption href="#skills">HABILIDADES</NavListOption>
                <NavListOption href="#contact">CONTATOS</NavListOption>
            </NavList>
        </NavigationBar>
    )    
}