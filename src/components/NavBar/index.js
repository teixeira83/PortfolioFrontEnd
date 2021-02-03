import React, { Component } from 'react';

import { Logo, NavigationBar, NavList, NavListOption } from './styles';

import logo from '../../assets/img/logo.png'

export default class NavBar extends Component {
    
    constructor() {
        super();
        this.state = {
            show: true,
            scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        const currentScrollPosition = document.body.getBoundingClientRect().top;

        this.setState({
          scrollPos: currentScrollPosition,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    render() {
            return (
                <NavigationBar className={this.state.show ? 'active' : 'hidden'}>
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
}