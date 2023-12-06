import * as S from './MemberLayout.style';
import { Outlet, useNavigate } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../../components';
import theme from '../../theme';
import { BROWSER_PATH } from '../../constants/path';
import {
  clickMemberActive,
  clickMemberAll
} from '../../redux/slices/memberTabSlice';
import { useSelector, useDispatch } from 'react-redux';

const MembersLayout = () => {
  const { isOpen } = useSelector(state => state.sidebar);
  const navigate = useNavigate();
  const isClicked = useSelector(state => state.memberTab.isClicked);
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <Navbar />
      <S.TabContainer>
        <S.TabButton
          onClick={() => {
            dispatch(clickMemberActive());
            console.log(isClicked);
            navigate(`${BROWSER_PATH.MEMBERS.ACTIVE}`);
          }}
          color={
            isClicked
              ? `${theme.COLOR.LIGHT.WHITE}`
              : `${theme.COLOR.DARK.LIGHT_GRAY}`
          }
        >
          Active Member
        </S.TabButton>
        <S.TabButton
          onClick={() => {
            dispatch(clickMemberAll());
            console.log(isClicked);
            navigate(`${BROWSER_PATH.MEMBERS.ALL}`);
          }}
          color={
            isClicked
              ? `${theme.COLOR.DARK.LIGHT_GRAY}`
              : `${theme.COLOR.LIGHT.WHITE}`
          }
        >
          Member List
        </S.TabButton>
      </S.TabContainer>
      <Outlet />
      {isOpen && <Sidebar />}
      <Footer />
    </S.Wrapper>
  );
};

export default MembersLayout;
