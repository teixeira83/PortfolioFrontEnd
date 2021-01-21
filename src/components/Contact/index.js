import { Container, Title, FormContainer, Text } from './styles';
import { FormContact, SocialIcons } from '../index';

export default function Contact() {
    return (
        <Container>
            <Title>CONTATOS</Title>
            <Text>Fique a vontade para entrar em contato. Pode ser por e-mail, whatsapp ou até mesmo pelo instagram. </Text>
            <FormContainer>
                <FormContact />
            </FormContainer>
            <SocialIcons />
        </Container>
    )
}