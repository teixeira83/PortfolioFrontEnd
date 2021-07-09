import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: ${COLORS.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Text = styled.p`
    color: ${COLORS.secondary};
    font-size: 20px;
    width: 40%;
    line-height: 25px;
    margin-top: 40px;
`

export const FormContainer = styled.div`
    margin-top: 60px;
    width: 80%;
    height: 40%;
`