import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const AboutMeContainer = styled.div`
    width: 100%;
    height: 98vh;
    background-color: ${COLORS.third};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImageAbout = styled.img`
    height: 90%;
    margin-left: ${GAPS.bigger};
`

export const TextContainer = styled.div`
    width: 60%;
    margin-right: ${GAPS.bigger};
`

export const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`