import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';

export const Container = styled.div`
    width: 100%;
    height: 98vh;
    background-color: ${COLORS.primary};
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    padding-top: 80px;
    color: ${COLORS.secondary};

`