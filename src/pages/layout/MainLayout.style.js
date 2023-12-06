import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: ${theme.COLOR.DARK.NAVY};
  height: 100%;
`;

export { Wrapper };
