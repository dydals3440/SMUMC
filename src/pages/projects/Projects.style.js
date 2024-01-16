import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
import Pagination from '@mui/material/Pagination';

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.NAVY : theme.COLOR.LIGHT.WHITE};
`;

const Banner = styled.div`
  width: 100%;
  margin-top: 130px;
  margin-bottom: 50px;
  ${theme.ALIGN.COLUMN_CENTER}
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
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

  h2 {
    padding: 20px;
    text-align: center;
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    h2 {
      margin-top: 25px;
      padding: 0;
      font-size: ${FONT_SIZE.LG};
    }
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 100%;
  gap: 10px;
  height: 100%;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
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
export {
  Banner,
  Container,
  Wrapper,
  ButtonWrapper,
  ProjectWrapper,
  PaginationStyle
};
