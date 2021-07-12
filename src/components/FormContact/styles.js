import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: ${GAPS.small} auto;
    padding-bottom: ${GAPS.small};
    &:before {
        content: "";
        width: 25%;
        height: 3px;
        display: block;
        background-color: ${COLORS.secondary};
        margin: 0 auto ${GAPS.small} auto;
    }
    
    @media (max-width: 720px) {
        flex-direction: column;
    }

`

export const TextArea = styled.textarea`
    width: 60%;
    height: 30vh;
    resize: none;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 10px;
    margin: ${GAPS.small} auto;
    
    @media (max-width: 720px) {
        width: 98%;
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${GAPS.smaller} ${GAPS.big};
    
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 720px) {
        margin: ${GAPS.smaller} 0;
    }
`

export const FormInput = styled.input`
    width: 95%;
    height: 40px;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 10px;
    @media (max-width: 720px) {
        width: 98%;
    }
    &[type=number] {
        -moz-appearance: textfield; 
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const FormButton = styled.input`
    width: 40%;    
    height: 40px;
    background-color: #4e8ef7;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 15px;

    @media (max-width: 720px) {
        width: 98%;
        height: 10vh;
    }
`

export const LabelInput = styled.label`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 ${GAPS.small};

    @media (max-width: 900px) {
        margin-bottom: 10px;
        width: 80%;
        justify-content: center;
    }
`
    
export const SpanInput = styled.span`
    font-size: 18px;
    color: ${COLORS.secondary};
    display: flex;
    margin-bottom: 5px;
`