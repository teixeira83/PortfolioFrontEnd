import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

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
    width: 100%;
    line-height: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
`

export const FormContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: ${GAPS.medium} auto;
`