import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: ${COLORS.secondary};
    font-family: 'Bungee Outline', cursive;
    font-weight: bold;
    font-size: 50px;
    margin: 80px 0 20px 0;
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
    height: 300px;
    display: flex;
    justify-content: center;
`