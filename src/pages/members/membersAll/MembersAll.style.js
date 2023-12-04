import styled from 'styled-components';
import theme from '../../../theme';
import { FONT } from '../../../constants/font';
import { FONT_SIZE } from '../../../constants/size';
import FormControl from '@mui/material/FormControl';

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
  ${theme.ALIGN.ROW_CENTER};
  gap: 15px;
  flex-wrap: wrap;
`;

const FormControlStyle = styled(FormControl)`
  width: 100px;
`;

export { Container, Title, MemberContainer, FormControlStyle };
