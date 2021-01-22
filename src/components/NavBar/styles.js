import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const NavigationBar = styled.nav`
    width: 100%;
    height: 80px;
    background-color: ${COLORS.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
`

export const Logo = styled.img`
    width: 120px;
    height: 60px;
    margin-left: ${GAPS.big};
`

export const NavList = styled.ul`
    margin-right: ${GAPS.big};
    height: 40px;
    display: flex;
    align-items: center;
`

export const NavListOption = styled.a`
    text-decoration: none;
    color: ${COLORS.secondary};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: bold;
    height: 70%;
    display: flex;
    margin-right: 10px;
    justify-content: center;
    align-items: center;

    &:hover {
        border-bottom: 2px solid ${COLORS.secondary};
        font-size: 16px;
        width: 110px;
        background-color: ${COLORS.primary};
        color: ${COLORS.secondary};
        transition: 0.2s;
    }
`