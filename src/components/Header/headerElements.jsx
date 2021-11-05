import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


export const HeaderBox = styled.div`
    width: 100%;
    height: 120px;
    transition: 1s;
    background-color: ${props => props.active ? 'white' : 'black'};
    position: fixed;
    top: 0;
    z-index: 999;

    
    @media screen and (max-width: 920px)
    {
        height: 70px;  
    }
`

export const HeaderWrapper = styled.nav`
    padding: 0px 100px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;

    
    @media screen and (max-width: 920px)
    {
      padding: 0px 60px;
    }

`
export const RightNav = styled.div`
    width: 30%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 920px)
    {
      justify-content: flex-end;
    }
    
`

export const HamburgerMenu = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`

export const LineMenu = styled.span`
width: 100%;
height: 3px;
transform-origin: left;
transition: 2s;
${props => props.active ? 'background-color: black; transform: rotate(45deg);' : 'background-color: white'};

`

export const LineMenu1 = styled.span`
width: 80%;
height: 3px;
transition: 0.5s;
${props => props.active ? 'background-color: black; opacity: 0' : 'background-color: white'};
`

export const LineMenu2 = styled.span`
width: 100%;
height: 3px;
transform-origin: left;
transition: 2s;
${props => props.active ? 'background-color: black; transform: rotate(-45deg);' : 'background-color: white'};

`