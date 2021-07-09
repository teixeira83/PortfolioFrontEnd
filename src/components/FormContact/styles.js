import styled from 'styled-components';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-top: ${GAPS.small};
    margin-bottom: ${GAPS.medium};
    @media (max-width: 720px) {
        flex-direction: column;
    }

`

export const TextArea = styled.textarea`
    width: 400px;
    height: 30vh;
    resize: none;
    font-size: 14px;
    margin-right: ${GAPS.medium};
    margin-bottom: ${GAPS.small};
    
    @media (max-width: 720px) {
        width: 98%;
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormInput = styled.input`
    margin-bottom: ${GAPS.small};
    height: 40px;
    font-size: 14px;
    margin-bottom: ${GAPS.small};

    @media (max-width: 720px) {
        width: 98%;
    }
`

export const FormButton = styled.input`
    height: 40px;
    background-color: #4e8ef7;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 720px) {
        width: 98%;
        height: 10vh;
    }
`