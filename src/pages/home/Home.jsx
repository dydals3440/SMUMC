import * as S from './Home.style';

import {
  CountUpCard,
  IntroduceBox,
  HeroBox,
  PartIntro,
  News,
  InfiniteSlider
} from '../../components';

import { MEMBERS } from '../../constants/members.js';
import { useSelector } from 'react-redux';

const Home = () => {
  const allMemberCount = MEMBERS.length;
  const currentMember = MEMBERS.filter(m => m.year === 5);
  const currentMemberCount = currentMember.length;
  const darkMode = useSelector(state => state.darkMode);

  return (
    <S.Container darkMode={darkMode}>
      <HeroBox />
      <IntroduceBox>
        <h1>About us</h1>
        <p>University MakeUs Challenge(UMC-SMU)는</p>
        <p>앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리입니다</p>
        <S.Wrapper>
          <CountUpCard
            title='역대 SMUMC 멤버수'
            endNum={allMemberCount}
            lastUnit='명'
          />
          <CountUpCard
            title='현재 회원 수'
            endNum={currentMemberCount}
            lastUnit='명'
          />
          <CountUpCard title='현재 기수' endNum='5' lastUnit='기' />
        </S.Wrapper>
      </IntroduceBox>

      <IntroduceBox>
        <h1>총 6개의 파트로 구성</h1>
        <p>2023년 하반기 기준</p>
        <PartIntro />
      </IntroduceBox>

      <IntroduceBox>
        <h1>PROJECT</h1>
        <p>University MakeUs Challenge(SMUMC) 데모데이</p>
        <p>실제로 상명대 학생이 참여한 데모데이 프로젝트입니다.</p>
        <InfiniteSlider />
      </IntroduceBox>

      <IntroduceBox>
        <h1>따끈한 최신 소식</h1>
        <p>UMC 뉴스레터</p>
        <News />
      </IntroduceBox>
    </S.Container>
  );
};

export default Home;
