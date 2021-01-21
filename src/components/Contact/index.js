import { Container, Title, FormContainer, Text } from './styles';
import { FormContact, SocialIcons } from '../index';

export default function Contact() {
    return (
        <Container>
            <Title>CONTATOS</Title>
            <Text>Fique a vontade para entrar em contato comigo. Pode ser por e-mail utilizando os campos abaixo ou por alguma das minhas redes sociais. </Text>
            <FormContainer>
                <FormContact />
            </FormContainer>
            <SocialIcons />
        </Container>
    )
}