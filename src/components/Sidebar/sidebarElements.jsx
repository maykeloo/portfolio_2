import styled from "styled-components";

export const SidebarBox = styled.div`
    width: 45vw;
    height: 100vh;
    transition: 1s;
    background-color: ${props => props.active ? 'white' : 'black'};
    position: fixed;
    right: ${props => props.active ? '0' : '-45vw'};
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    @media screen and (max-width: 920px)
    {
        width: 65vw;
        right: ${props => props.active ? '0' : '-65vw'};
    }

`

export const SidebarContentBox = styled.div`
    width: 90%;
    height: 80%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    
    @media screen and (max-width: 920px)
    {
        justify-content: flex-start;
    }
`

export const LinkBar = styled.nav`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const LinkTo = styled.a`
    font-size: 6vw;
    font-weight: bold;
    color: black;
    position: relative;
    text-decoration: none;
    margin-bottom: 30px;

    @media screen and (max-width: 920px)
    {
        font-size: 50px;
    }
`