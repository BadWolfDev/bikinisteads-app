import styled, { css } from 'styled-components/macro';

export const HeroSection = styled.section`
height: auto;
position: relative;
overflow: hidden;
`;

export const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

export const HeroS = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

export const HeroSr = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const HeroImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;