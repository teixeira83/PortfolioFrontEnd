import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: ${GAPS.big};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    position: absolute;
    bottom: 0;
    font-family: 'Roboto', sans-serif;
`

export const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin: auto ${GAPS.smaller};
`