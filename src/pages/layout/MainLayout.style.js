import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${theme.COLOR.DARK.NAVY};
  height: 100vdh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export { Wrapper, ContentWrapper };
