import React, { useState } from "react";
import Slider from 'react-slick';
import './Hero.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { 
    Column1, 
    Column2,
    InfoRow, 
    InfoWrapper, 
    TextWrapper,
    ImgWrap, 
    TopLine, 
    Heading, 
    Subtitle } from "../standard/StSectionelements";
import { 
    HeroSection, 
    HeroWrapper } from "./HeroElements";

const Hero = ({ id, img, alt }) => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        draggable: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <>
            <HeroSection id={id}>
                <HeroWrapper>
                    <InfoWrapper>
                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>gm</TopLine>
                                    <Heading>Kami</Heading>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <div className='pilon'>
                                    <Slider {...settings}>
                                        {img.map((img, idx) => (
                                            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                                                <img src={img} alt={alt} />
                                            </div>
                                        ))}
                                    </Slider>
                                    </div>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </HeroWrapper>
            </HeroSection>
        </>
    )
};

export default Hero;