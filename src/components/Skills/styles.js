import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 580px;
    background-color: ${COLORS.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: ${COLORS.primary};
    margin-top: ${GAPS.big};
    font-size:38px;
    font-family: Roboto, sans-serif;
`

export const SkillsContainer = styled.div`
    margin-top: ${GAPS.medium};
    width: 75%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;

`