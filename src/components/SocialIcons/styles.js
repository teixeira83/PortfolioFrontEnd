import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    background-color: ${COLORS.primary};
`

export const Icon = styled.img`
    width: 40;
    height: 40px;
    margin: 0 ${GAPS.small} ${GAPS.small} 0;
`