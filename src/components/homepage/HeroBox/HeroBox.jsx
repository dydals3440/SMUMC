import { useNavigate } from 'react-router-dom';
import * as S from '../HeroBox/HeroBox.style';

const HeroBox = () => {
  const navigate = useNavigate();

  return (
    <S.Hero>
      <S.Wrapper>
        <h1>UNIVERSITY</h1>
        <h1>MAKEUS</h1>
        <h1>CHALLENGE</h1>
        <p>상명대학교 코딩 동아리</p>
        <S.ApplyWrapper>
          <S.Button
            disabled={true}
            onClick={() => window.open('https://forms.gle/Q59uy3BT63XMAYjG9')}
          >
            7기 모집 예정
          </S.Button>
          <p>현재, UMC 6기 지원 모집이 마감되었습니다.</p>
        </S.ApplyWrapper>
      </S.Wrapper>
    </S.Hero>
  );
};
export default HeroBox;
