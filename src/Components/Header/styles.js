import styled from 'styled-components';

import colors from '../../Styles/Colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  background: ${colors.orangeMain};
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  strong {
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    justify-self: center;
    font-family : Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height : 23px;
    align-self: center;
    background-color: ${colors.orangeMain};
    
  }

`;

