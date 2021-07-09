import React, { useState, useEffect } from 'react';

import { Logo, MenuIcon, NavigationBar, NavList, NavListOption, NavListOptionLink } from './styles';

import logo from '../../assets/img/logo.png'
import hamburguerIcon from '../../assets/img/hamburguermenu.png';
import closeIcon from '../../assets/img/closemenu.png';

import styled from 'styled-components';

import { COLORS } from '../../assets/css/settings/colors';

export default function NavBar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    useEffect(() => {

    }, [open])

    function Dropdown() {

        const Container = styled.div`
            display: flex;
            flex-direction: column;
            height: 60vh;
            width: 100vw;
            position: absolute;
        `
        const Link = styled.a`
            height: 20vh;
            width: 100%;
            font-size: 18px;
            background-color: #242526;
            color: #ffffff;
            text-decoration: none;
            font-size: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
    
            &:hover {
                background: #ffffff;
                color: #000000;
            }
            
        `
    
        return (
            <Container>
                <Link href="#about" onClick={handleClick}>Sobre Mim</Link>
                <Link href="#skills" onClick={handleClick}>Habilidades</Link>
                <Link href="#contact" onClick={handleClick}>Contatos</Link>
            </Container>
        )
    }

    return (
        <>
            <NavigationBar>
                <a href="/">
                    <Logo src={logo} alt="Logo do desenvolvedor frontend Rafael Teixeira" />
                </a>
                <NavList>
                    <NavListOption>
                        <NavListOptionLink href="#about">SOBRE MIM</NavListOptionLink>
                    </NavListOption>
                    {/* <NavListOption href="#portfolio">PORTFÓLIO</NavListOption> */}
                    <NavListOption>
                        <NavListOptionLink href="#skills">HABILIDADES</NavListOptionLink>
                    </NavListOption>
                    <NavListOption>
                        <NavListOptionLink href="#contact">CONTATOS</NavListOptionLink>
                    </NavListOption>
                </NavList>
                {open ?  <MenuIcon src={closeIcon} onClick={handleClick} /> : <MenuIcon src={hamburguerIcon} onClick={handleClick} />}
            </NavigationBar>
            {open ? <Dropdown /> : null}
        </>
    )    
}

