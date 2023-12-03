import { useDispatch } from 'react-redux';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';

import * as S from './Navbar.style';
import { sidebarOpen } from '../../../redux/slices/sidebarSlice';
import { useScroll } from '../../../hooks/useScroll';
import { BROWSER_PATH } from '../../../constants/path';

const Navbar = () => {
  const { y } = useScroll();
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(sidebarOpen());
  };

  return (
  );
};

export default Navbar;
