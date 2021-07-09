import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: ${COLORS.secondary};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

export const SkillsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: ${GAPS.medium} auto;
    justify-content: center;
`