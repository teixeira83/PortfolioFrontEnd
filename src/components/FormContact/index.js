import { TextArea, InformationContainer, Container, FormInput, FormButton, SpanInput,LabelInput } from './styles';

export default function FormContact() {

    return (
        <form class="contact-form">
            <Container>
                <InformationContainer>
                    <LabelInput>
                        <SpanInput>Nome:</SpanInput>
                        <FormInput name="name" type="text" placeholder="Digite seu nome"/>
                    </LabelInput>
                    <LabelInput>
                        <SpanInput>Telefone:</SpanInput>
                        <FormInput name="telphone" type="number" placeholder="(xx) 99999-0000" maxlength="11" required/>  
                    </LabelInput>
                </InformationContainer>
                <InformationContainer>
                    <LabelInput>
                        <SpanInput>E-mail:</SpanInput>
                        <FormInput name="email" type="e-mail" placeholder="seuemail@exemplo.com.br"/>
                    </LabelInput>
                    <LabelInput>
                        <SpanInput>Assunto:</SpanInput>
                        <FormInput name="emailabout" type="text" placeholder="Digite aqui" maxlength="11" required/>  
                    </LabelInput>
                </InformationContainer>
                <TextArea placeholder="Escreva aqui a sua mensagem...">
                </TextArea>
                <FormButton type="submit" value="Enviar" />
            </Container>
      </form>
    )
}