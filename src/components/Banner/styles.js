import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 580px;
    background-color: ${COLORS.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: ${COLORS.secondary};
    margin-top: ${GAPS.big};
    font-size:38px;
`

export const NotebookImage = styled.img`
    margin-left: 50px;
    margin-top: ${GAPS.medium};
`