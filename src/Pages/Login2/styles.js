import styled from 'styled-components';
import color from '../../Styles/Colors';
import afterScreen from './afterScreen.png';
import verLinesLeft from './verLinesLeft.png';
import verLinesRight from './verLinesRight.png';


export const Container = styled.div`
    background-color: ${color.smokedBlack};
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
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
        height: 28px;
    }



`;


export const Screen = styled.div`
    margin: 105px  auto;
    background: ${color.vibrantYellow};
    width: 85%;
    height: 70%;
    position : relative;

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

export const Titulo = styled.h3`
    &::before{
        width: 108px;
        height: 18px;
        padding : 0;
        margin: 0 8px;
        content: "";
        display: inline-block;
        background: ${color.vibrantYellow}
        
    
    }
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    font-weight: 300;
    color: ${color.vibrantYellow};

    &::after{
        width: 108px;
        height: 18px;
        padding : 0;
        margin: 0 8px;
        content: "";
        display: inline-block;
        background: ${color.vibrantYellow}
    }
`;
