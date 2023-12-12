import styled from 'styled-components';
import theme from '../../theme';
import { FONT } from '../../constants/font';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  height: 100%;
  background: ${theme.COLOR.DARK.NAVY};

  h1 {
    margin-top: 200px;
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.FIVE_XL};
    color: ${theme.COLOR.LIGHT.WHITE};
    text-align: center;
    padding: 20px;
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    padding: 20px;
    h1 {
      font-size: ${FONT_SIZE.THREE_XL};
    }
  }
`;

const CalendarText = styled.p`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  font-size: ${FONT_SIZE.FIVE_XL};
  color: ${theme.COLOR.LIGHT.WHITE};
  width: 80%;
  text-align: center;
  margin: 20px;
  margin-top: 200px;
  padding: 30px;

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    display: none;
  }
`;

export { Wrapper, CalendarText };
