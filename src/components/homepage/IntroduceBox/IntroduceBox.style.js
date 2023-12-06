import styled from 'styled-components';
import theme from '../../../theme';

const IntroduceBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100vw;
  height: 100%;

  background-color: ${theme.COLOR.DARK.BLACK};
  color: ${theme.COLOR.LIGHT.WHITE_GRAY};

  h1 {
    margin-top: 100px;
  }

  p {
    margin-bottom: 20px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      padding: 0 20px;
      text-align: center;
    }
  }
`;
export { IntroduceBox };
