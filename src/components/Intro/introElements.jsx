import styled from "styled-components";


export const IntroBox = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ParallaxBackgroundBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`


export const BackgroundItemImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;


    @media screen and (max-width: 920px)
    {
        display: none;
    }
`

export const BackgroundItemImageMobile = styled.img`

    display: none;

    @media screen and (max-width: 920px)
    {
        display: flex;
    position: absolute;
    width: 70%;
    object-fit: contain;
    }

`

export const AboutBox = styled.div`
    width: 30vw;
    height: 70vh;
    background-color: #3500D3;
    position: absolute;
`

export const Quote = styled.h2`
    color: white;
    font-weight: bold;
`