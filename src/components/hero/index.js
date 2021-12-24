import React from 'react';
import {HeroSection, HeroWrapper, HeroS, HeroSr, HeroImg} from './HeroElements';
import bg from '../../images/bikiLogo.png';

const Hero = () =>{
    return(
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroS>
                        <HeroSr>
                            <HeroImg src={bg}/>
                        </HeroSr>
                    </HeroS>
                </HeroWrapper>
            </HeroSection>
        </>
    )
}

export default Hero;