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
import { drawWhiteSnow, drawBlueSnow } from '../../hooks/drawSnow';
import Confetti from 'react-confetti';

const MembersLayout = () => {
  const { isOpen } = useSelector(state => state.sidebar);
  const navigate = useNavigate();
  const isClicked = useSelector(state => state.memberTab.isClicked);
  const dispatch = useDispatch();
  const height = window.innerHeight + 50;
  const width = window.innerWidth;
  const darkMode = useSelector(state => state.darkMode);

  return (
    <S.Wrapper darkMode={darkMode}>
      <Navbar />
      <Confetti
      // wind={0.01}
      // width={width}
      // height={height}
      // opacity={0.6}
      // drawShape={darkMode ? drawWhiteSnow : drawBlueSnow}
      // tweenDuration={8000}
      // numberOfPieces={200}
      // gravity={0.05}
      />
      <S.TabContainer>
        <S.TabButton
          onClick={() => {
            dispatch(clickMemberActive());
            console.log(isClicked);
            navigate(`${BROWSER_PATH.MEMBERS.ACTIVE}`);
          }}
          color={
            isClicked
              ? `${darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK}`
              : `${theme.COLOR.DARK.LIGHT_GRAY}`
          }
        >
          Active Member
        </S.TabButton>
        <S.TabButton
          onClick={() => {
            dispatch(clickMemberAll());
            navigate(`${BROWSER_PATH.MEMBERS.ALL}`);
          }}
          color={
            isClicked
              ? `${theme.COLOR.DARK.LIGHT_GRAY}`
              : `${darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK}`
          }
        >
          Member List
        </S.TabButton>
      </S.TabContainer>
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
      {isOpen && <Sidebar />}
      <Footer />
    </S.Wrapper>
  );
};

export default MembersLayout;
