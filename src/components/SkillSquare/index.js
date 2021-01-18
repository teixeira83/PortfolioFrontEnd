import { Container, Title, Image } from './styles';

export default function SkillSquare(props) {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Image src={props.image} />
        </Container>
    )
}