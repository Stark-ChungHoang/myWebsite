import React, { useState } from 'react'
import  {Button} from ".././ButtonElements"
import Video from "../../Videos/chunghoang.mp4"
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,
    HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from "./HeroElements"
function HeroSection() { 

    const [hover,setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover )
    }
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}  type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual  Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in
                    creadit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter = {onHover}
                    onMouseLeave={onHover}
                    primary = "true" dark="true" to="signup">
                        Get Started {hover ? <ArrowForward /> :
                        <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
