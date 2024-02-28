import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.NAVY : theme.COLOR.LIGHT.WHITE};
  height: 100%;

  transition-timing-function: ease-in;
  transition: all 0.5s;
  min-height: 100vh;
`;

const ImgBanner = styled.img`
  display: flex;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 200px;
  padding: 0 10px;
  gap: 25px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    gap: 0;
    margin-top: 200px;
    padding: 0 10px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 0;
  }
`;

const OutletWrapper = styled.div`
  margin-top: auto;
`;

const TabButton = styled.button`
  display: flex;
  color: ${props => props.color};
  font-size: ${FONT_SIZE.FIVE_XL};
  font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
  border: 0;
  background-color: transparent;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.THREE_XL};
    margin: 0 10px;
  }
`;

const ContentsContainer = styled.div`
  flex: 1;
`;

export {
  Wrapper,
  ImgBanner,
  TabContainer,
  TabButton,
  OutletWrapper,
  ContentsContainer
};
