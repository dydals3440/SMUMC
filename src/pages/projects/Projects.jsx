import * as S from './Projects.style';
import { Button, ProjectCard } from '../../components';
import theme from '../../theme';

const Projects = () => {
  const buttonData = ['전체', '3기', '4기', '5기'];

  return (
    <S.Container>
      <S.Banner>
        <img src='../../public/images/code.webp' alt='project Image' />
        <h1>Projects</h1>
      </S.Banner>
      <S.Wrapper>
        {buttonData.map((buttonText, idx) => (
          <Button
            key={idx}
            size='m'
            fontcolor={theme.COLOR.LIGHT.YELLOW}
            background={theme.COLOR.DARK.GRAY}
          >
            {buttonText}
          </Button>
        ))}
      </S.Wrapper>
      <ProjectCard size='m'></ProjectCard>
    </S.Container>
  );
};

export default Projects;
