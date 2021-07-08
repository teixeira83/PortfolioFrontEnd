import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: ${COLORS.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: ${COLORS.secondary};
    font-size:38px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    margin-bottom: ${GAPS.small} 
`

export const NotebookImage = styled.img`
    margin-left: 50px;
    margin-top: ${GAPS.big};
`