import { useState } from 'react';
import { Loader } from '../../components/index';
import { TextArea, 
    InformationContainer, 
    Container, 
    FormInput, 
    FormButton, 
    SpanInput, 
    LabelInput } from './styles';

import { send } from 'emailjs-com';

import {  toast } from 'react-toastify';

export default function FormContact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        phone: '',
        email: '',
        emailabout: '',
        message: '',
    });

    const [showLoader, setShowLoader] = useState(false);

    const notify = () => toast.info('Mensagem enviada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyError = () => toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID)
        .then(() => {
            notify();
            setShowLoader(false)
            setToSend({
                from_name: '',
                phone: '',
                email: '',
                emailabout: '',
                message: '',
            });
        })
        .catch((err) => {
            setShowLoader(false)
            notifyError();
            console.log('FAILED...', err);
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <Container>                
                <InformationContainer>
                    <LabelInput>
                        <SpanInput>Nome:</SpanInput>
                        <FormInput name="from_name" 
                            type="text" 
                            placeholder="Digite seu nome" 
                            value={toSend.from_name} 
                            onChange={handleChange}/>
                    </LabelInput>
                    <LabelInput>
                        <SpanInput>Telefone:</SpanInput>
                        <FormInput name="phone" 
                            type="number" 
                            placeholder="(xx) 99999-0000" 
                            maxlength="11" 
                            value={toSend.phone} 
                            onChange={handleChange}
                            required/>  
                    </LabelInput>
                </InformationContainer>
                <InformationContainer>
                    <LabelInput>
                        <SpanInput>E-mail:</SpanInput>
                        <FormInput name="email" 
                            type="e-mail" 
                            placeholder="seuemail@exemplo.com.br"
                            value={toSend.email} 
                            onChange={handleChange} />
                    </LabelInput>
                    <LabelInput>
                        <SpanInput>Assunto:</SpanInput>
                        <FormInput name="emailabout" 
                            type="text" 
                            placeholder="Digite aqui" 
                            maxlength="11" 
                            value={toSend.emailabout} 
                            onChange={handleChange}
                            required/>  
                    </LabelInput>
                </InformationContainer>
                <TextArea name="message" 
                    placeholder="Escreva aqui a sua mensagem..."
                    value={toSend.message} 
                    onChange={handleChange}
                />        
                {showLoader && <Loader/>}        
                <FormButton type="submit" value="Enviar" />
            </Container>
      </form>
    )
}