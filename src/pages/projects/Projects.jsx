import * as S from './Projects.style';

const Projects = () => {
  return (
    <>
      <S.Banner>
        <img src='../../public/images/code.webp' alt='project Image' />
        <h1>Projects</h1>
      </S.Banner>
      <S.Container>
        <S.ContentBox>
          <S.Team>
            <S.Contents>
              <h1>프로젝트 1</h1>
              <p>프로젝트 상세 소개 내용을 입력하세요.</p>
            </S.Contents>
            <S.Additional>
              <S.Stacks>
                <p>기술1</p>
                <p>기술2</p>
              </S.Stacks>
              <S.Participants>
                <p>멤버1</p>
                <p>멤버2</p>
                <p>...</p>
              </S.Participants>
            </S.Additional>
          </S.Team>
          <S.Img src='../../public/images/code.webp' alt='project Image' />
        </S.ContentBox>

        <S.ContentBox>
          <S.Team>
            <S.Contents>
              <h1>프로젝트 2</h1>
              <p>프로젝트 상세 소개 내용을 입력하세요.</p>
            </S.Contents>
            <S.Additional>
              <S.Stacks>
                <p>기술1</p>
                <p>기술2</p>
              </S.Stacks>
              <S.Participants>
                <p>멤버1</p>
                <p>멤버2</p>
                <p>...</p>
              </S.Participants>
            </S.Additional>
          </S.Team>
          <S.Img src='../../public/images/code.webp' alt='project Image' />
        </S.ContentBox>

        <S.ContentBox>
          <S.Team>
            <S.Contents>
              <h1>프로젝트 3</h1>
              <p>프로젝트 상세 소개 내용을 입력하세요.</p>
            </S.Contents>
            <S.Additional>
              <S.Stacks>
                <p>기술1</p>
                <p>기술2</p>
              </S.Stacks>
              <S.Participants>
                <p>멤버1</p>
                <p>멤버2</p>
                <p>...</p>
              </S.Participants>
            </S.Additional>
          </S.Team>
          <S.Img src='../../public/images/code.webp' alt='project Image' />
        </S.ContentBox>

        <S.ContentBox>
          <S.Team>
            <S.Contents>
              <h1>프로젝트 4</h1>
              <p>프로젝트 상세 소개 내용을 입력하세요.</p>
            </S.Contents>
            <S.Additional>
              <S.Stacks>
                <p>기술1</p>
                <p>기술2</p>
              </S.Stacks>
              <S.Participants>
                <p>멤버1</p>
                <p>멤버2</p>
                <p>...</p>
              </S.Participants>
            </S.Additional>
          </S.Team>
          <S.Img src='../../public/images/code.webp' alt='project Image' />
        </S.ContentBox>
      </S.Container>
      <S.Pagination></S.Pagination>
    </>
  );
};

export default Projects;
