import styled from "styled-components";

export const Sections = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #E3E2DF;
    position: relative;
    top: 120px;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    scroll-behavior: smooth;

    @media screen and (max-width: 920px)
    {
        height: calc(100vh - 70px);  
        top: 70px;
    }

    &::-webkit-scrollbar
    {
        display: none;
    }

    > *
    {
        width: 100vw;
        height: calc(100vh - 120px);
        scroll-snap-align: start;

        @media screen and (max-width: 920px)
        {
            height: calc(100vh - 70px);  
        }
    }
    
`