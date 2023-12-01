import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE } from '../../../constants/size';

const NavWrapper = styled.nav`
  width: 100%;
  background-color: ${theme.MAIN_COLOR.CONTENT_BACKGROUND};
  color: ${theme.COLOR.DARK.VULCAN};
  font-size: ${FONT_SIZE.SEVEN_XL};
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
