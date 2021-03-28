import styled from 'styled-components';

import { FiAnchor } from 'react-icons/fi';
import Colors from '../../Styles/Colors';
import colors from '../../Styles/Colors';
import {ReactComponent as HeaderIcon} from '../../Icons/brain.svg'




export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.lightYellow};
  width: 100%;
  height: 90px;
  border-bottom: 2px solid ${Colors.vibrantYellow};
  padding: 0 30px;
  position : absolute;
  border-bottom-right-radius: 15px;
  div {
    display: flex;
    align-items: center;
    background-color: ${colors.lightYellow}
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  strong {
    color: ${Colors.smokedBlack};
    font-size: 38px;
    font-weight: bold;
    padding-left: 20px;
    background-color: ${Colors.lightYellow}
  }
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnchorIcon = styled(HeaderIcon)`
  width: 5rem;
  height: 5rem;
`;