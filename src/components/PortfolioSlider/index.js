import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from './styles';
import { PortfolioSquare } from '../index';

import portfolioUm from '../../assets/img/portfolio01.png';
import portfolioDois from '../../assets/img/portfolio02.png';
import portfolioTres from '../../assets/img/portfolio03.png';
import portfolioQuatro from '../../assets/img/portfolio04.png';
import portfolioCinco from '../../assets/img/portfolio05.png';
import portfolioSeis from '../../assets/img/portfolio06.png';
import portfolioSete from '../../assets/img/portfolio07.png';
import portfolioOito from '../../assets/img/portfolio08.png';
import portfolioNove from '../../assets/img/portfolio09.png';

export default class PortfolioSlider extends Component {

    render() {
    
        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
    };

    return (
        <Container>          
            <Slider {...settings} style={{height: "70vh", padding: "30px"}}>
                <PortfolioSquare image={portfolioUm} />
                <PortfolioSquare image={portfolioDois} />
                <PortfolioSquare image={portfolioTres} />
                <PortfolioSquare image={portfolioQuatro} />
                <PortfolioSquare image={portfolioCinco} />
                <PortfolioSquare image={portfolioSeis} />
                <PortfolioSquare image={portfolioSete} />
                <PortfolioSquare image={portfolioOito} />
                <PortfolioSquare image={portfolioNove} />
            </Slider>
        </Container>
    );
  }
}