import React from 'react'
import { LinkBar, SidebarBox, SidebarContentBox } from './sidebarElements'
import { LinkTo } from './sidebarElements'


const Sidebar = ({isActive, setActiveHandler}) => {
    return (
        <SidebarBox active = {isActive}>
            <SidebarContentBox>
                <LinkBar>
                    <LinkTo href = '#intro' onClick = {setActiveHandler}>Intro</LinkTo>
                    <LinkTo href = '#portfolio' onClick = {setActiveHandler}>Portfolio</LinkTo>
                    <LinkTo href = '#works' onClick = {setActiveHandler}>Works</LinkTo>
                    <LinkTo href = '#contact' onClick = {setActiveHandler}>Contact</LinkTo>
                </LinkBar>
            </SidebarContentBox>
        </SidebarBox>
    )
}

export default Sidebar
