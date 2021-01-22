import { Container, MockSlick, MockSlickImage } from './styles';
import image from '../../assets/img/construcao.png';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <MockSlick>
                <MockSlickImage src={image} />
            </MockSlick>
        </Container>
    )
}