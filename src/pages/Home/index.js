import React from 'react'
import { NavBar, Banner, Skills, Contact } from '../../components/index';
import { AboutMeContainer, ImageAbout, ProfileContainer, Paragraph, ProfilePic, TextContainer } from './styles';
import imageAbout from '../../assets/img/about.png';
import profilePic from '../../assets/img/aboutprofilepic.png';

export default function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <Banner />
            <AboutMeContainer id="about"> 
                <ImageAbout src={imageAbout} />
                <ProfileContainer>
                    <ProfilePic src={profilePic}/>

                    <TextContainer>
                        <Paragraph>Olá, meu nome é Rafael Teixeira, um desenvolvedor de software apaixonado 
                            pela transformação que a tecnologia causa em nossas vidas e por uma boa caneca de café forte.
                        </Paragraph>
                        <Paragraph>
                            Entender como um computador funcionava sempre me fascinou. Por isso, comecei a programar desde 
                            quando era um adolescente. Na verdade, até hoje fico incrédulo que com apenas um celular
                            temos acesso a educação, novas culturas, artigos cientificos, imagens de lugares paradisíacos,
                            acesso a amigos e familiares fisicamente distantes, transações bancárias e tantas outras facilidades.
                        </Paragraph>
                        <Paragraph>
                            A tecnologia não para de evoluir e se adaptar as novas necessidades da nossa sociedade.
                            Por isso, ao longo dos últimos anos, venho trabalhando com as mais diversas stacks de programação com
                            o objetivo de estreitar a relação entre as demandas da sociedade e a complexidade tecnológica que 
                            essa evolução gerou.
                        </Paragraph>
                        <Paragraph>
                            Minha missão é entender qual a melhor solução tecnológica para um problema e através do 
                            desenvolvemento de um website, aplicativo mobile ou um sistema transformar
                            este problema em um processo coeso e eficiente.
                        </Paragraph>
                    </TextContainer>
                </ProfileContainer>
            </AboutMeContainer>
            {/* <Portfolio /> */}
            <Skills />
            <Contact />
        </React.Fragment>
        
    )
}