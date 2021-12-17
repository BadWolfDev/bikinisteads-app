import About from '../images/about.svg';
import Road from '../images/roadmap.svg';
import Mint from '../images/mint.svg';
import FAQ from '../images/faq.svg';
import Kami from '../images/kami.svg';
import Kami1 from '../images/kami-1.jpg';
import Kami2 from '../images/kami-2.jpg';
import Kami3 from '../images/kami-3.jpg';
import Kami4 from '../images/kami-4.jpg';

export const heroObj = {
    id: 'home',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Kami',
    headLine: 'Kami is da wae brudahs',
    description: 'We are Kami, passionate about the Universe and all its forms of expression',
    buttonLabel: 'Mint',
    imgStart: true,
    img: [Kami1, Kami2, Kami3, Kami4],
    alt: 'kami',
    dark: true,
    primary: true,
    darkText: true
};

export const aboutObj = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Kami',
    headLine: 'Kami is da wae brudahs',
    description: 'We are Kami, passionate about the Universe and all its forms of expression',
    buttonLabel: 'Mint',
    imgStart: true,
    img: About,
    alt: 'kami',
    dark: true,
    primary: true,
    darkText: true,
    show: false,
};

export const RoadmapObj = {
    id: 'roadmap',
    lightBg: false,
    DarkText: false,
    lightText: true,
    img: Road,
    alt: 'road',
    imgStart: false,
};

export const mintObj = {
    id: 'mint',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Limited Supply',
    headLine: 'Mint your Kami, be Kami',
    description: 'Dis is da wae',
    buttonLabel: 'Mint',
    imgStart: true,
    img: Mint,
    alt: 'mint',
    dark: true,
    primary: true,
    darkText: true,
    show: true,
};

export const faqObj = {
    id: 'faq',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'FAQ',
    headLine: 'Mint your Kami, be Kami',
    span: 'x',
    description: 'Dis is da wae',
    buttonLabel: 'Mint',
    imgStart: false,
    img: FAQ,
    alt: 'faqs',
    dark: true,
    primary: true,
    darkText: true
};