import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 98vh;
    background-color: ${COLORS.secondary};
`

export const SkillsContainer = styled.div`
    max-width: 1000px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    margin: ${GAPS.big} auto;
`