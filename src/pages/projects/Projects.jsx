import * as S from './Projects.style';
import { Button, ProjectCard } from '../../components';
import theme from '../../theme';
import { useState } from 'react';
import { PROJECTS } from '../../constants/projects';
import Pagination from '@mui/material/Pagination';

const Projects = () => {
  const [year, setYear] = useState(0);
  const [page, setPage] = useState(1);
  const categories = ['전체', ...new Set(PROJECTS.map(p => p.year))];
  const [data, setData] = useState(PROJECTS);
  const [activeCategories, setActiveCategories] = useState(categories);
  console.log(activeCategories);

  const handleCategory = category => {
    if (category === '전체') {
      setData(PROJECTS);
      return;
    }
    const filteredData = PROJECTS.filter(project => project.year === category);
    setData(filteredData);
  };

  console.log(data);

  const projectPerPage = 9;

  const handleChange = selectyear => {
    setYear(selectyear);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredProjects =
    year === 0 ? PROJECTS : PROJECTS.filter(item => item.year === year);
  const startIndex = (page - 1) * projectPerPage;
  const endIndex = startIndex + projectPerPage;

  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

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
      <Pagination>
        count={Math.ceil(filteredProjects.length / projectPerPage)}
        page={page}
        onChange={handlePageChange}
      </Pagination>
    </S.Container>
  );
};

export default Projects;
