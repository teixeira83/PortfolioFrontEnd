import { Container } from './styles';
import { PortfolioSlider } from '../index';
import { SectionTitle } from '../index';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <SectionTitle color='white' title='Portfólio'/>
            <PortfolioSlider />
        </Container>
    )
}