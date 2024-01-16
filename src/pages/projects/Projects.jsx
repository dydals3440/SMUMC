import * as S from './Projects.style';
import { Button, ProjectCard } from '../../components';
import theme from '../../theme';
import { useState } from 'react';
import { PROJECTS } from '../../constants/projects';
import { useSelector } from 'react-redux';

const Projects = () => {
  const categories = ['전체', ...new Set(PROJECTS.map(p => p.year))];
  const [data, setData] = useState(PROJECTS);
  const [activeCategories, setActiveCategories] = useState(categories);
  const darkMode = useSelector(state => state.darkMode);

  const handleCategory = category => {
    if (category === '전체') {
      setData(PROJECTS);
      return;
    }
    const filteredData = PROJECTS.filter(project => project.year === category);
    setData(filteredData);
  };

  return (
    <S.Container darkMode={darkMode}>
      <S.Banner darkMode={darkMode}>
        <h1>Projects</h1>
        <h2>UMC 동일 지부 내 타학교 학생과</h2>
        <h2>상명대학교 학생이 협업해서 만들어낸 프로젝트입니다.</h2>
      </S.Banner>
      <S.Wrapper>
        <S.ButtonWrapper>
          {activeCategories.map((category, idx) => (
            <Button
              key={idx}
              size='m'
              fontcolor={
                darkMode ? theme.COLOR.LIGHT.WHITE_GRAY : theme.COLOR.DARK.BLACK
              }
              background={
                darkMode ? theme.COLOR.DARK.NAVY : theme.COLOR.LIGHT.WHITE
              }
              border={`2px solid ${theme.COLOR.LIGHT.YELLOW}`}
              onclick={() => handleCategory(category)}
            >
              {category === '전체' ? '전체' : `${category}기`}
            </Button>
          ))}
        </S.ButtonWrapper>
        <S.ProjectWrapper>
          {data.map(({ id, ...props }) => (
            <ProjectCard props={props} key={id} size='m'></ProjectCard>
          ))}
        </S.ProjectWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
