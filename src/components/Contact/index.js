import { Container, FormContainer, Text } from './styles';
import { FormContact, SocialIcons } from '../index';
import { SectionTitle } from '../index';
export default function Contact() {
    return (
        <Container id="contact">
            <SectionTitle color='white' title='Contatos'/>
            <FormContainer>
                <Text>
                    Resta alguma dúvida? Pode entrar em contato comigo preenchendo os campos abaixo.     
                </Text>
                <FormContact />
            </FormContainer>
            <SocialIcons />
        </Container>
    )
}