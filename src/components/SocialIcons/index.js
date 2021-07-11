import { Container, Icon } from './styles';

import whatsapp from '../../assets/img/whatsapp.png';
// import instagram from '../../assets/img/instagram.png';
import linkedin from '../../assets/img/linkedin.png';

export default function SocialIcons() {
    return (
        <Container>
            <a href="https://api.whatsapp.com/send?phone=$5522996217098&text=Ol%C3%A1%21%20">
                <Icon src={whatsapp} />
            </a>
            {/* <a href="https://www.instagram.com/rafaelteixeira91">
                <Icon src={instagram} />
            </a> */}
            <a href="https://www.linkedin.com/in/rafaelalvesdemedeirosteixeira/">
                <Icon src={linkedin} />
            </a>
        </Container>
    )
}