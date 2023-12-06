import * as S from './Projects.style';
import { Button, ProjectCard } from '../../components';
import theme from '../../theme';
import { useState } from 'react';
import { PROJECTS } from '../../constants/projects';

const Projects = () => {
  const categories = ['전체', ...new Set(PROJECTS.map(p => p.year))];
  const [data, setData] = useState(PROJECTS);
  const [activeCategories, setActiveCategories] = useState(categories);

  const handleCategory = category => {
    if (category === '전체') {
      setData(PROJECTS);
      return;
    }
    const filteredData = PROJECTS.filter(project => project.year === category);
    setData(filteredData);
  };

  return (
    <S.Container>
      <S.Banner>
        <img src='../../public/images/code.webp' alt='project Image' />
        <h1>Projects</h1>
      </S.Banner>
      <S.Wrapper>
        {activeCategories.map((category, idx) => (
          <Button
            key={idx}
            size='m'
            fontcolor={theme.COLOR.LIGHT.YELLOW}
            background={theme.COLOR.DARK.GRAY}
            onclick={() => handleCategory(category)}
          >
            {category === '전체' ? '전체' : `${category}기`}
          </Button>
        ))}
      </S.Wrapper>
      <S.ProjectWrapper>
        {data.map(({ id, ...props }) => (
          <ProjectCard props={props} key={id} size='m'></ProjectCard>
        ))}
      </S.ProjectWrapper>
    </S.Container>
  );
};

export default Projects;
