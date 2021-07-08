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
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: auto auto 50px auto;
    justify-content: center;
`