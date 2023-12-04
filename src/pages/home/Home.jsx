import * as S from './Home.style';

import {
  CountUpCard,
  EmojiBox,
  IntroduceBox,
  HeroBox,
  ActivityIntro,
  InfiniteSlider
} from '../../components';

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
          <CountUpCard title='역대 SMUMC 멤버수' endNum='185' lastUnit='명' />
          <CountUpCard title='현재 회원 수' endNum='40' lastUnit='명' />
          <CountUpCard title='현재 기수' endNum='4' lastUnit='기' />
        </S.Wrapper>
        <EmojiBox />
      </IntroduceBox>

      <IntroduceBox>
        <h1>PROJECT</h1>
        <p>
          University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리
          입니다.
        </p>
        <InfiniteSlider />
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
    </S.Container>
  );
};

export default Home;
