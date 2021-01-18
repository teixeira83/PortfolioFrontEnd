import { Container, Title, SkillsContainer } from './styles';
import { SkillSquare } from '../index';

//image icons
import html from '../../assets/img/html.png';
import js from '../../assets/img/js.png';
import css from '../../assets/img/css.png';
import react from '../../assets/img/react.png';
import node from '../../assets/img/node.png';
import docker from '../../assets/img/docker.png';
import ionic from '../../assets/img/ionic.png';
import java from '../../assets/img/java.png';
import spring from '../../assets/img/spring.png';
import mongodb from '../../assets/img/mongodb.png';



export default function Skills() {
    return (
        <Container>
            <Title>Habilidades</Title>
            <SkillsContainer>
                <SkillSquare title="HTML" image={html}/>
                <SkillSquare title="Javascript" image={js}/>
                <SkillSquare title="CSS" image={css}/>
                <SkillSquare title="React" image={react}/>
                <SkillSquare title="NodeJs" image={node}/>
                <SkillSquare title="Docker" image={docker}/>
                <SkillSquare title="Ionic" image={ionic}/>
                <SkillSquare title="Java" image={java}/>
                <SkillSquare title="Spring" image={spring}/>
                <SkillSquare title="MongoDb" image={mongodb}/>
            </SkillsContainer>
        </Container>
    )
}