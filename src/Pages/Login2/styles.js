import styled from 'styled-components';
import color from '../../Styles/Colors';
import afterScreen from './afterScreen.png';
import verLinesLeft from './verLinesLeft.png';
import verLinesRight from './verLinesRight.png';
import horDots from './horDots.png';
import smallLines from './smallLines.png'
import tiltedLines from './tiltedLines.png'

export const Envelocro = styled.div`
    max-width: 1500px;
    height: 100%;
    position: relative;
`;


export const Container = styled.div`
    background-color: black;
    left: 0;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 655px;
    padding: 25px;

    &::after{
        content: "";
        display: block;
        background: url(${afterScreen}) no-repeat 50%;;
        margin: -50px auto;
        width: 100%;
        max-width: 500px;
        height: 52px;
    }



`;


export const Screen = styled.div`
    position: relative;
    margin: 0 auto;
    width: 90%;
    max-width: 1080px;
    height: 488px;
    border-top: 18px solid #000;
    border-bottom: 10px solid #000;
    border-image: url(${horDots}) 17 11 17 round;
    display: block;
    margin: 0 58.406;

    &::after{
        left: -73px;
        content: "";
        position: absolute;
        background: url(${smallLines}) no-repeat 50%;
        width: 73px;
        height: 460px;
    }
    &::before{
        right: -73px;
        content: "";
        position: absolute;
        background: url(${smallLines}) no-repeat 50%;
        width: 73px;
        height: 460px;
    }
    
 
`; 



export const InsideScreen = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position : absolute;

    &::after {
        content: "";
        display: inline-block;
        background: url(${verLinesLeft}) no-repeat 50%;
        width: 35px;
        height: 460px;
        position : absolute;
        right: 0;
        top: 0;
    }
    
    &::before{
        content: "";
        display: inline-block;
        background: url(${verLinesRight}) no-repeat 50%;
        width: 35px;
        height: 460px;
        position: absolute;
        left: 0;
        top : 0;
    }
    
    
    
`;

export const InnerBox = styled.div`

    display: inline-block;
    width: calc(100% - 70px);
    max-width: 1010px;
    text-transform: uppercase;
    text-align: center;

    &::before{
        content: "";
        display: inline-block;
        background: url(${tiltedLines}) no-repeat 50%;
        max-width: 642px;
        width: 100%;
        height: 42px;
    }

    
    
    
`;


export const Titulo = styled.h3`
    &::before{
        width: 108px;
        height: 18px;
        padding : 0;
        margin: 0 8px;
        content: "";
        display: inline-block;
        background: #db0e15;
        
    
    }
    text-transform: uppercase;
    text-align: center;
    color: #db0e15;
    margin: 25px 0;
    font-size: 26px;
    font-weight: 300;
    text-shadow: 0 0 5px rgb(219 14 21 / 80%);

    &::after{
        width: 108px;
        height: 18px;
        padding : 0;
        margin: 0 8px;
        content: "";
        display: inline-block;
        background: #db0e15;
    }
`;
