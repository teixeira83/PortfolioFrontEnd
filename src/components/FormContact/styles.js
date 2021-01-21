import styled from 'styled-components';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    text-align: center;
    margin-bottom: ${GAPS.big};
`

export const TextArea = styled.textarea`
    width: 500px;
    height: 200px;
    margin-right: ${GAPS.medium};
    resize: none;
    font-size: 14px;
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
`

export const FormButton = styled.input`
    height: 40px;
    background-color: #4e8ef7;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`