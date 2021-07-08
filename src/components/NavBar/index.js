import React from 'react';

import { Logo, NavigationBar, NavList, NavListOption, NavListOptionLink } from './styles';

import logo from '../../assets/img/logo.png'

export default function NavBar() {
    return (
        <NavigationBar>
            <a href="/">
                <Logo src={logo} alt="Logo do desenvolvedor frontend Rafael Teixeira" />
            </a>
            <NavList>
                <NavListOption>
                    <NavListOptionLink className="border-animation" href="#about">SOBRE MIM</NavListOptionLink>
                </NavListOption>
                {/* <NavListOption href="#portfolio">PORTFÓLIO</NavListOption> */}
                <NavListOption>
                    <NavListOptionLink href="#skills">HABILIDADES</NavListOptionLink>
                </NavListOption>
                <NavListOption>
                    <NavListOptionLink href="#contact">CONTATOS</NavListOptionLink>
                </NavListOption>
            </NavList>
        </NavigationBar>
    )    
}