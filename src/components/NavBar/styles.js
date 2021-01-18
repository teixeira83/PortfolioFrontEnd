import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';
import { GAPS } from '../../assets/css/settings/gaps';

export const NavigationBar = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: ${COLORS.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 120px;
    height: 60px;
    margin-left: ${GAPS.big};
`

export const NavList = styled.ul`
    margin-right: ${GAPS.big};
`

export const NavListOption = styled.a`
    text-decoration: none;
    color: ${COLORS.secondary};
    margin: 0 ${GAPS.smaller};
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 16px;
    
    &:hover {
        border-bottom: 3px solid ${COLORS.secondary}; 
    }
`