import styled from "styled-components";
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer `
    background: #101522;
`;

export const FooterWrap = styled.div `
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100xp;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div `
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div `
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    color: #fff;
    box-sizing: border-box;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1 `
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link) `
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color: #FF453C;
        transition: 0.3s ease-out;
    }
`;

export const CopyrightSection = styled.div `
    max-width: 1100px;
    width: 100%;
`;

export const CopyrightSectionWrap = styled.div `
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #fff;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;
export const CopyrightLogo = styled(Link) `
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    @media screen and (max-width: 820px){
        margin-top: 16px;
    }
`;

export const CopyrightText = styled.small `
    color: #fff;
    margin-bottom: 16px;
`;