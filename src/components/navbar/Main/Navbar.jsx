import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import * as S from './Navbar.style';
import { sidebarOpen } from '../../../redux/slices/sidebarSlice';
import { useScroll } from '../../../hooks/useScroll';
import { BROWSER_PATH } from '../../../constants/path';
import { clickMemberActive } from '../../../redux/slices/memberTabSlice';
import { toggleDarkMode } from '../../../redux/slices/darkModeSlice';
import { useEffect } from 'react';

const Navbar = () => {
  const { y } = useScroll();
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(sidebarOpen());
  };

  const handleDarkmode = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    sessionStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <S.NavWrapper darkMode={darkMode} isShow={y < 100 ? true : false}>
      <S.LinkHome darkMode={darkMode} to={BROWSER_PATH.BASE}>
        SMUMC
      </S.LinkHome>
      <S.NavMenuWrapper>
        {darkMode ? (
          <S.DarkModeButton onClick={handleDarkmode} />
        ) : (
          <S.LightModeButton onClick={handleDarkmode} />
        )}
        <S.LinkMenu darkMode={darkMode} to={BROWSER_PATH.PROJECTS.BASE}>
          PROJECTS
        </S.LinkMenu>
        <S.LinkMenu
          darkMode={darkMode}
          to={BROWSER_PATH.MEMBERS.ACTIVE}
          onClick={() => {
            dispatch(clickMemberActive());
          }}
        >
          MEMBERS
        </S.LinkMenu>
        <S.LinkMenu darkMode={darkMode} to={BROWSER_PATH.NOTICES.BASE}>
          NOTICES
        </S.LinkMenu>
      </S.NavMenuWrapper>
      <S.BurgerMenuWrapper>
        {darkMode ? (
          <S.DarkModeButton onClick={handleDarkmode} />
        ) : (
          <S.LightModeButton onClick={handleDarkmode} />
        )}
        <S.BurgerButton
          darkMode={darkMode}
          component={MenuIcon}
          onClick={handleSidebar}
        />
      </S.BurgerMenuWrapper>
    </S.NavWrapper>
  );
};

export default Navbar;
