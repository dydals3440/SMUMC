import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.DARK.NAVY};
  padding: 200px 100px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    padding: 200px 50px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 200px 10px;
  }
`;

const ImgBanner = styled.img`
  display: flex;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 25px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 0;
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
`;

export { Wrapper, ImgBanner, TabContainer, TabButton };
