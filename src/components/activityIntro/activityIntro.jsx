import * as S from './activityIntro.style';

function ActivityIntro() {
  return (
    <S.Container>
      <S.ContentBox>
        <S.Contents>
          <h1>스터디</h1>
          <p>매 학기마다 새로운 주제를 선정해 스터디를 진행하고 있습니다.</p>
        </S.Contents>
        <S.Img src='/images/students.webp' alt='Student Image' />
      </S.ContentBox>

      <S.ContentBox>
        <S.Contents>
          <h1>해커톤</h1>
          <p>
            매년 여름 방학에 신입 구성원을 대상으로 자체 해커톤 대회를 개최하고
            있습니다.
          </p>
        </S.Contents>
        <S.Img src='/images/contest.webp' alt='Contest Image' />
      </S.ContentBox>

      <S.ContentBox>
        <S.Contents>
          <h1>워크샵</h1>
          <p>
            방학 시기에 맞춰 구성원 간의 친목을 위한 단체 워크샵을 진행하고
            있습니다.
          </p>
        </S.Contents>
        <S.Img src='/images/workshop.webp' alt='Workshop Image' />
      </S.ContentBox>

      <S.ContentBox>
        <S.Contents>
          <h1>홈커밍 데이</h1>
          <p>
            졸업한 선배님들과의 지속적인 교류를 위하여 매년 홈커밍 데이 행사를
            진행하고 있습니다.
          </p>
        </S.Contents>
        <S.Img src='/images/homecoming.webp' alt='Homecoming Image' />{' '}
      </S.ContentBox>
    </S.Container>
  );
}

export default ActivityIntro;
