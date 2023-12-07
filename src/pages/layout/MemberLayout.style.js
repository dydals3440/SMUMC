import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  background-color: ${theme.COLOR.DARK.NAVY};
  height: 100%;
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
    margin-top: 300px;
    padding: 0 20px;
  }
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

export { Wrapper, ImgBanner, TabContainer, TabButton };
