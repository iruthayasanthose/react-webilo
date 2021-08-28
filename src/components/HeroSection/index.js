import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../../components/ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'  

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Design. Innovate. Create.</HeroH1>
                <HeroP>Get your Custom Website at affordable prices from us. Show your business smarter using smarter websites.</HeroP>
                <HeroBtnWrapper>
                    <Button for="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
