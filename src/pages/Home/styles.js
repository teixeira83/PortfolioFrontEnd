import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const AboutMeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.fourth};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImageAbout = styled.img`
    height: 90%;
    margin-left: ${GAPS.bigger};
`

export const ProfileContainer = styled.div`
    width: 60%;
    height: 100%;
    margin-right: ${GAPS.bigger};
    
`

export const TextContainer = styled.div`
    height: 60%;
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