import styled from 'styled-components';
import theme from '../../../theme';

const IntroduceBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100vw;
  height: 100%;

  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.BLACK : theme.COLOR.LIGHT.WHITE};
  color: ${theme.COLOR.LIGHT.WHITE_GRAY};

  h1 {
    color: ${props =>
      props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
    margin-top: 100px;
  }

  p {
    color: ${props =>
      props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
    margin-bottom: 20px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      padding: 0 20px;
      text-align: center;
    }
  }
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;
export { IntroduceBox };
