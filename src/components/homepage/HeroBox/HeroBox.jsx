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
            onClick={() => window.open('https://forms.gle/obd8mfEppcZDP7yv5')}
            disabled
          >
            6기 모집 준비중
          </S.Button>
          <p>
            2024년 초, 6기 모집 예정입니다. 자세한 일정은 NOTICES를 참고하세요.
          </p>
        </S.ApplyWrapper>
      </S.Wrapper>
    </S.Hero>
  );
};
export default HeroBox;
