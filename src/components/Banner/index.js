import { Container, Title, NotebookImage } from './styles';
import notebook from '../../assets/img/notebook.png';

export default function Banner( ) {
    return (
        <Container>
            <Title>Desenvolvedor Web</Title>
            <NotebookImage src={notebook} />
        </Container>
    )    
}