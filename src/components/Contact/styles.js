import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 580px;
    background-color: ${COLORS.primary};
`

export const Title = styled.h1`
    margin-top: ${GAPS.medium};
    color: ${COLORS.secondary};
    font-family: 'Bungee Outline', cursive;
`