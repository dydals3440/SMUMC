import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../../constants/size';
import { Link, NavLink } from 'react-router-dom';
import { FONT } from '../../../constants/font';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import SvgIcon from '@mui/material/SvgIcon';

const NavWrapper = styled.nav`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};

  position: fixed;
  top: 0;
  width: 100%;
  max-width: inherit;
  height: 100px;
  padding: 20px;
  z-index: 1;

  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  background-color: ${props =>
    props.isShow
      ? props.darkMode
        ? theme.COLOR.DARK.GRAY
        : theme.COLOR.LIGHT.WHITE
      : theme.COLOR.TRANSPARENT};

  color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  font-size: ${FONT_SIZE.FOUR_XL};

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
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
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
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

const BurgerButton = styled(SvgIcon)`
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
`;

const DarkModeButton = styled(MdDarkMode)`
  cursor: pointer;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-right: 10px;
    font-size: ${FONT_SIZE.TWO_XL};
  }
`;

const WhiteModeButton = styled(MdOutlineDarkMode)`
  color: ${theme.COLOR.DARK.BLACK};
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-right: 10px;
    font-size: ${FONT_SIZE.TWO_XL};
  }
`;

export {
  NavWrapper,
  LinkHome,
  NavMenuWrapper,
  LinkMenu,
  BurgerMenuWrapper,
  BurgerButton,
  DarkModeButton,
  WhiteModeButton
};
