import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from './styles';
// import { PortfolioSquare } from '../index';

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
                {/* <PortfolioSquare image={portfolioUm} />
                <PortfolioSquare image={portfolioDois} />
                <PortfolioSquare image={portfolioTres} />
                <PortfolioSquare image={portfolioQuatro} />
                <PortfolioSquare image={portfolioCinco} />
                <PortfolioSquare image={portfolioSeis} />
                <PortfolioSquare image={portfolioSete} />
                <PortfolioSquare image={portfolioOito} />
                <PortfolioSquare image={portfolioNove} /> */}
            </Slider>
        </Container>
    );
  }
}