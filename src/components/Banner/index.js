import { Container, NotebookImage } from './styles';
import notebook from '../../assets/img/notebook.png';
// import { SectionTitle } from '../index';

export default function Banner( ) {
    return (
        <Container>
            <NotebookImage src={notebook} />
            {/* <SectionTitle color='white' title='Desenvolvedor Web'/> */}
        </Container>
    )    
}