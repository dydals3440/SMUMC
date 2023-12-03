import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../../constants/size';
import { Link, NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 20px;
  z-index: 1;

  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  background-color: ${props =>
    props.isShow ? theme.COLOR.DARK.GRAY : theme.COLOR.TRANSPARENT};

  color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  font-size: ${FONT_SIZE.FOUR_XL};

  transition-timing-function: ease-in;
  transition: all 0.5s;

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

const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-size: ${FONT_SIZE.THREE_XL};
`;

const NavMenuWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

const LinkMenu = styled(NavLink)`
  text-decoration: none;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-size: ${FONT_SIZE.XL};

  &.active {
    color: ${theme.COLOR.LIGHT.YELLOW};
  }
`;

const BurgerMenuWrapper = styled.div`
  display: none;
  font-size: ${FONT_SIZE.LG};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: block;
  }
`;

export { NavWrapper, LinkHome, NavMenuWrapper, LinkMenu, BurgerMenuWrapper };
