import styled from 'styled-components';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    width: 100%;
    height: 200px;
    margin-top: ${GAPS.big};
    display: flex;
    justify-content: center;
`

export const Icon = styled.img`
    width: 40;
    height: 40px;
    margin: 0 ${GAPS.small} ${GAPS.small} 0;
`