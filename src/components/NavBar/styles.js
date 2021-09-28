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
`

export const Logo = styled.img`
    width: 120px;
    height: 60px;
    margin-left: ${GAPS.small};
`

export const NavList = styled.ul`
    margin-right: ${GAPS.medium};
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`
export const NavListOptionLink = styled.a`
    color: ${COLORS.secondary};
    z-index: 1;
    color: white;
    text-decoration: none;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    padding: 15px 0px;
    width: 100px;
    text-align: center;

    &:before {
        content: "";
        position: absolute;
        height: 33.33%;
        width: 0;
        background-color: ${COLORS.secondary};
        bottom: 66.66%;
        left: 0px;
        transition: all 0.5s;
    }
    
    &:hover {
        color: ${COLORS.primary};
    }
`

export const NavListOption = styled.li`
    position: relative;
    padding: 0 20px;
    height: 50%;
    display: flex;
    &:before {
        content: "";
        position: absolute;
        height: 33.33%;
        width: 0;
        background-color: ${COLORS.secondary};
        right: 0;
        z-index: 0;
        top: 33.33%;
        transition: all 0.5s;
    }
    &:after {
        content: "";
        position: absolute;
        height: 33.33%;
        width: 0;
        background-color: ${COLORS.secondary};
        left: 0px;
        z-index: 0;
        bottom: 0;
        transition: all 0.5s;
    }
    &:hover:before,
    :hover:after,
    :hover {
        width: 100%;
    }
    &:hover ${NavListOptionLink}:before {
        width: 100%;
    }
    &:hover ${NavListOptionLink}:nth-child(n){
        color: ${COLORS.primary};
    }

    @media(max-width: 720px) {
        display: none;
    }
`

export const MenuContainer = styled.div`
    height: 100%;
    margin-top: 50px;
    margin-right: ${GAPS.small};
    
    @media(min-width: 720px) {
        display: none;
    }
`

export const MenuBar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #ffffff;
`
export const MenuIcon = styled.img`

    margin-right: 20px;

    @media(min-width: 720px) {
        display: none;
    }
`