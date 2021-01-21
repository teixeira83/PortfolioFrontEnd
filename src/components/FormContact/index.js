import { TextArea, InformationContainer, Container, FormInput, FormButton } from './styles';

export default function FormContact() {

    return (
        <form class="contact-form">
            <Container>
                <TextArea placeholder="Escreva aqui a sua mensagem..." />
                <InformationContainer>
                    <FormInput name="name" type="text" placeholder="Nome"/>
                    <FormInput type="tel" name="telphone" placeholder="(xx) 99999-0000" maxlength="11" required/>  
                    <FormButton type="submit" value="Enviar" />
                </InformationContainer>
            </Container>
      </form>
    )
}