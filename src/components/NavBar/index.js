import React from 'react';

import { Logo, NavigationBar, NavList, NavListOption } from './styles';

import logo from '../../assets/img/logo.png'

export default function NavBar() {
    return (
        <NavigationBar>
            <Logo src={logo} alt="Logo da empresa Vxtel"/>
            <NavList>
                <NavListOption href="/">SOBRE MIM</NavListOption>
                <NavListOption href="/sobre">PORTFÓLIO</NavListOption>
                <NavListOption href="/calculadora">HABILIDADES</NavListOption>
                <NavListOption href="/calculadora">CONTATOS</NavListOption>
            </NavList>
        </NavigationBar>
    )    
}