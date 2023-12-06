import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';
import { FONT } from '../../../constants/font';
import { FONT_SIZE } from '../../../constants/size';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';

const fadeInUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 50px 30px;
  gap: 45px;
`;

const Title = styled.h3`
  color: ${theme.COLOR.DARK.BLACK};
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  font-size: ${FONT_SIZE.FIVE_XL};
`;

const MemberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;

  @media ${theme.WINDOW_SIZE.PC} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }

  animation: ${fadeInUp} 0.7s ease-in-out;
`;

const FormControlStyle = styled(FormControl)`
  width: 100px;
`;

const SelectStyle = styled(Select)`
  color: ${theme.COLOR.LIGHT.WHITE} !important;
  border: 0.1px ${theme.COLOR.LIGHT.WHITE} solid !important;
`;

const PaginationStyle = styled(Pagination)`
  background-color: ${theme.COLOR.LIGHT.WHITE};
  padding: 5px;
  border-radius: 30px;
`;

export {
  Container,
  Title,
  MemberContainer,
  FormControlStyle,
  SelectStyle,
  PaginationStyle
};
