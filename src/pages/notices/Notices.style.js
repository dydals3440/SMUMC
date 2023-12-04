import styled from 'styled-components';
import theme from '../../theme';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin-top: 100px;
  background: ${theme.COLOR.DARK.NAVY};
  width: 100%;

  h1 {
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    border: 1px solid black;
    width: 80%;
    text-align: center;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    background-color: ${theme.COLOR.PRIMARY.BLUE_LIGHT};
  }
`;

export { Wrapper };
