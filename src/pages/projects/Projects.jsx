import * as S from './Projects.style';
import { Button, ProjectCard } from '../../components';
import theme from '../../theme';
import { useState } from 'react';
import { PROJECTS } from '../../constants/projects';
import Pagination from '@mui/material/Pagination';

const Projects = () => {
  const buttonData = ['전체', '3기', '4기', '5기'];
  const [year, setYear] = useState(0);
  const [page, setPage] = useState(1);

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
        {buttonData.map((buttonText, idx) => (
          <Button
            key={idx}
            size='m'
            fontcolor={theme.COLOR.LIGHT.YELLOW}
            background={theme.COLOR.DARK.GRAY}
            onclick={handleChange}
          >
            {buttonText}
          </Button>
        ))}
      </S.Wrapper>
      <S.ProjectWrapper>
        {displayedProjects.map(({ name, id }) => (
          <ProjectCard key={id} size='m'></ProjectCard>
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
