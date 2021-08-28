import styled from "styled-components";


export const ServicesContainer = styled.div `
    height: 900px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1700px;
    }

    @media screen and (max-width: 480px){
        height: 1900px;
    }
`;

export const ServicesWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

export const SevicesCard = styled.div `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1ox 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1 `
    font-size: 2.5rem;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.h2 `
    font-size: 1rem;
    text-align: center;
`;