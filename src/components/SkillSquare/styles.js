import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const Container = styled.div`
    min-width: 150px;
    height: 150px;
    background-color: ${COLORS.secondary};
    box-shadow: 0 0 1em grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${GAPS.small} ${GAPS.small};
`

export const Title = styled.span`
    margin-top: ${GAPS.smaller};
    color: ${COLORS.primary};
    font-weight: bold;
    font-size: 20px;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin: ${GAPS.smaller} 0;
`