import React, {useState} from 'react';
import { HeaderBox, HeaderWrapper, LeftSide, RightNav, HamburgerMenu, LineMenu, LineMenu1, LineMenu2, TypingText, TypingTextBar } from './headerElements';

const Header = ({isActive,setActiveHandler}) => {



    return (
        <>
            <HeaderBox active = {isActive}>
                <HeaderWrapper>
                    <RightNav>
                        <HamburgerMenu onClick = {setActiveHandler}>
                            <LineMenu active = {isActive}></LineMenu>
                            <LineMenu1 active = {isActive}></LineMenu1>
                            <LineMenu2 active = {isActive}></LineMenu2>
                        </HamburgerMenu>
                    </RightNav>
                </HeaderWrapper>
            </HeaderBox>
        </>
    );
}

export default Header;
