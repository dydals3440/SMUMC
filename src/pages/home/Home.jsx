import * as S from '../home/Home.styled';
import HeroBox from '../../components/homepage/HeroBox/HeroBox';
import IntroduceBox from '../../components/homepage/IntroduceBox/IntroduceBox';
import EmogeBox from '../../components/homepage/EmogeBox/EmogeBox';
import ActivityIntro from '../../components/activityIntro/ActivityIntro';
import { CountUpCard } from '../../components/countupCard/CountUpCard';
import { SliderCard } from '../../components/sliderCard/SliderCard';

const Home = () => {
  return (
    <S.Container>
      <HeroBox />
      <IntroduceBox>
        <h1>About us</h1>
        <p>
          University MakeUs Challendge(UMC-SMU)는 상명대학교 코딩 동아리입니다.
        </p>
        <S.Wrapper>
          <CountUpCard title='현재 회원 수' endNum='40' lastUnit='명' />
          <CountUpCard title='현재 기수' endNum='4' lastUnit='기' />
        </S.Wrapper>
        <EmogeBox />
      </IntroduceBox>

      <IntroduceBox>
        <h1>PROJECT</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
        <SliderCard />
      </IntroduceBox>
      <IntroduceBox>
        <h1>ACTIVITY</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
        <ActivityIntro />
      </IntroduceBox>

      <IntroduceBox>
        <h1>SPONSERED BY</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
      </IntroduceBox>
      <IntroduceBox>
        <h1>RECRUITMENT</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
      </IntroduceBox>
      <IntroduceBox>
        <h1>FAQ</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
      </IntroduceBox>
    </S.Container>
  );
};

export default Home;
