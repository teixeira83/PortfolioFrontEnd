import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 98vh;
    background-color: ${COLORS.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SkillsContainer = styled.div`
    width: 75%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${GAPS.small};
`