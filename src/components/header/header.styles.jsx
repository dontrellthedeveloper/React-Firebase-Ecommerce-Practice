import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionsContainerStyles = css`
      padding: 10px 15px;
      cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  padding: 20px 80px;
  //box-shadow: 0 4px 2px -2px gray;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    //padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;