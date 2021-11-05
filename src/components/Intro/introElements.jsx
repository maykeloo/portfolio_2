import styled from "styled-components";


export const IntroBox = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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
    width: 70vh;


    @media screen and (max-width: 1200px)
    {
        display: none;
    }
`

export const BackgroundItemImageMobile = styled.img`

    display: none;

    @media screen and (max-width: 1200px)
    {
    display: flex;
    position: absolute;
    width: 70vw;
    object-fit: contain;
    }

`

export const AboutBox = styled.div`
    width: 30vw;
    height: 75vh;
    background-color: #3500D3;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 15vw;
    z-index: 2;
    
    @media screen and (max-width: 1200px)
    {
        display: none;
    }
`

export const TextBox = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    color: white;
    font-family: 'Playfair Display', serif;
`

export const Quote = styled.h2`
    color: white;
    display: inline;
    height: 50%;
    font-weight: bold;
    font-size: 6vh;
`

export const Name = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 4vh; 
    font-family: 'Playfair Display', serif;
`

export const AboutBoxMobile = styled.div`
    display: none;

    @media screen and (max-width: 1200px)
    {
    width: 90vw;
    height: 35vh;
    background-color: #3500D3;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-45vw);
    z-index: 6;
    bottom: 10px;
    }
`

export const TextBoxMobile = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    color: white;
    font-family: 'Playfair Display', serif;


`

export const QuoteMobile = styled.h2`
    color: white;
    display: inline;
    height: 50%;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
`

export const NameMobile = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Playfair Display', serif;
`