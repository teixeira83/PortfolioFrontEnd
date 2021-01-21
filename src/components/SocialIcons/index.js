import { Container, Icon } from './styles';

import facebook from '../../assets/img/facebook.png';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import linkedin from '../../assets/img/linkedin.png';
import twitter from '../../assets/img/twitter.png';

export default function SocialIcons() {
    return (
        <Container>
            <a href="https://www.facebook.com/rafaeldeteixeira">
                <Icon src={facebook} />
            </a>
            <a href="https://www.instagram.com/rafaelteixeira91">
                <Icon src={whatsapp} />
            </a>
            <a href="https://www.instagram.com/rafaelteixeira91">
                <Icon src={instagram} />
            </a>
            <a href="https://www.linkedin.com/in/rafaelalvesdemedeirosteixeira/">
                <Icon src={linkedin} />
            </a>
            <a href="https://twitter.com/Teixeira_83">
                <Icon src={twitter} />
            </a>
        </Container>
    )
}