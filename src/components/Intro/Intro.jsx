import React, { useEffect } from 'react'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import { AboutBox, BackgroundItemImage, BackgroundItemImageMobile,  IntroBox, ParallaxBackgroundBox} from './introElements'

const Intro = () => {


    useEffect(() => {
        document.addEventListener("mousemove", parallax)
        function parallax(e)
        {
            document.querySelectorAll(".object").forEach(function(move)
            {
                let movingValue = move.getAttribute("data-value");
                let x = e.clientX * movingValue;
                let y = e.clientY * movingValue;

                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
            })
        }
    }, []);

    return (
        <>
            <IntroBox id = 'intro'>
                <ParallaxBackgroundBox>
                    <BackgroundItemImage className = 'object' src = {image1} data-value = '0.15' style = {{top: '70px', left: '100px', bottom: '100px', zIndex: '3'}}/>
                    <BackgroundItemImage className = 'object' src = {image2} data-value = '0.1' style = {{top: '50px', left: '30vw', bottom: '-100px', zIndex: '0'}}/>
                    <BackgroundItemImage className = 'object' src = {image3} data-value = '-0.15' style = {{top: '100px', left: '100px', bottom: '200px', zIndex: '0'}}/>
                    <BackgroundItemImage className = 'object' src = {image4} data-value = '0.25' style = {{top: '200px', left: '20vw', bottom: '200px', zIndex: '2'}}/>
                    <AboutBox className = 'object' data-value = '0.45' style = {{rigth: '0px', bottom: '200px', zIndex: '0'}}>
                    <GlitchSquiggly >
                        Hello
                    </GlitchSquiggly>
                    </AboutBox>

                    <BackgroundItemImageMobile  src = {image1} style = {{left: '50px', top: '100px', zIndex: '2'}}/>
                    <BackgroundItemImageMobile  src = {image2} style = {{left: '50px', bottom: '100px', zIndex: '0', width: '60%' }}/>
                    <BackgroundItemImageMobile  src = {image3} style = {{top: '200px', zIndex: '0', transform: 'rotate(90deg)', width: '200%'}}/>
                    <BackgroundItemImageMobile  src = {image4} style = {{right: '20px',   bottom: '130px', zIndex: '1', width: '70%'}}/>
                </ParallaxBackgroundBox>
            </IntroBox>
        </>
    )
}

export default Intro
