import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 50px;
  background-color: ${theme.COLOR.DARK.BLACK};
  width: 100%;
  padding: 10px;

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const Contents = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  position: relative;
  width: 1000px;
  height: 200px;
  border-radius: 30px;
  background-color: ${theme.COLOR.DARK.GRAY};

  h1,
  p {
    top: 100px;
    color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  }
`;

const TextBox = styled.div`
  margin: auto;
  width: 500px;
`;

const Img = styled.img`
  border-radius: 0px 30px 30px 0px;

  width: 40%;
  height: 100%;
  object-fit: cover;
`;

export { Container, ContentBox, Contents, TextBox, Img };
