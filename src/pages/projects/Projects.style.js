import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
import Pagination from '@mui/material/Pagination';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.DARK.NAVY};
`;

const Banner = styled.div`
  width: 100%;
  background-color: ${theme.COLOR.DARK.NAVY};
  margin: 100px 0;
  ${theme.ALIGN.COLUMN_CENTER}
  color: ${theme.COLOR.LIGHT.WHITE};
  img {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }

  h1 {
    font-size: ${FONT_SIZE.FIVE_XL};
    margin-top: 30px;
    margin-bottom: 10px;

    justify-content: center;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  gap: 10px;
  height: 80%;
  margin-bottom: 20px;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: ${RESPONSIVE_SIZE.PC}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PaginationStyle = styled(Pagination)`
  background-color: ${theme.COLOR.LIGHT.WHITE};
  padding: 5px;
  border-radius: 30px;
`;
export { Banner, Container, Wrapper, ProjectWrapper, PaginationStyle };
