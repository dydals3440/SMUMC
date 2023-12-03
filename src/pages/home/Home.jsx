import * as S from '../home/Home.styled';
import HeroBox from '../../components/homepage/HeroBox/HeroBox';
import IntroduceBox from '../../components/homepage/IntroduceBox/IntroduceBox';
import EmogeBox from '../../components/homepage/EmogeBox/EmogeBox';
import ActivityIntro from '../../components/activityIntro/activityIntro';

const Home = () => {
  return (
    <S.Container>
      <HeroBox />
      <IntroduceBox
        title='About us'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 코딩 동아리입니다.'
      ></IntroduceBox>
      <EmogeBox></EmogeBox>
      <IntroduceBox
        title='PROJECT'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
        입니다.'
      ></IntroduceBox>
      <IntroduceBox
        title='ACITIVITY'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
        입니다.'
      >
        {' '}
        <ActivityIntro />
      </IntroduceBox>
      <IntroduceBox
        title='SPONSED BY'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
      입니다.'
      ></IntroduceBox>
      <IntroduceBox
        title='RECRUITMENT'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
      입니다.'
      ></IntroduceBox>
      <IntroduceBox
        title='FAQ'
        text='University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
      입니다.'
      ></IntroduceBox>
    </S.Container>
  );
};

export default Home;
