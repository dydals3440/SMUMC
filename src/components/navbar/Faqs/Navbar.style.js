import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE } from '../../../constants/size';
import { FONT } from '../../../constants/font';

const NavWrapper = styled.nav`
  width: 100%;
  background-color: ${theme.MAIN_COLOR.TITLE};
  color: ${theme.COLOR.PRIMARY.BLUE};
  font-size: ${FONT_SIZE.SIX_XL};

  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  ${theme.ALIGN.ROW_CENTER};
  // 정렬 사용방법 (ROW_CENTER, COLUMN_CENTER)

  /* 태블릿 반응형 사용법 */
  @media ${theme.WINDOW_SIZE.TABLET} {
    background-color: ${theme.COLOR.LIGHT.YELLOW};
  }

  /* 모바일 반응형 사용법 */
  @media ${theme.WINDOW_SIZE.MOBILE} {
    background-color: ${theme.COLOR.PRIMARY.BLUE};
  }
`;

export { NavWrapper };
