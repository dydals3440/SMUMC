import * as S from '../HeroBox/HeroBox.style';

const HeroBox = () => {
  return (
    <S.Hero>
      <S.Wrapper>
        <div>UNIVERSITY</div>
        <div>MAKEUS</div>
        <div>CHALLENGE</div>
        <p> 상명대학교 코딩 동아리</p>
      </S.Wrapper>
      <S.Button>5기 지원 마감</S.Button>
      <p>2024년 초, 6기 모집 예정입니다. 자세한 일정은 NOTICES를 참고하세요.</p>
    </S.Hero>
  );
};
export default HeroBox;
