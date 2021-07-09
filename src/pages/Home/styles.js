import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const AboutMeContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${COLORS.fourth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${GAPS.small};
`

export const ImageAbout = styled.img`
    height: 90vh;
    margin: auto;
    
    @media (max-width: 720px) {
        display: none;
    }
`

export const ProfileContainer = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const TextContainer = styled.div`
    height: 100%;
`

export const Paragraph = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    margin-bottom: ${GAPS.small};
    line-height: normal;

`


export const ProfilePic = styled.img`
    width: 200px;
    height: 160px;
    display: flex;
    margin: ${GAPS.medium} auto;
`