import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';

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
  position: relative;
  gap: 100px;
  padding: 50px 0;
  animation: ${fadeInUp} 0.7s ease-in-out;
`;

const Line = styled.hr`
  display: flex;
  width: 90%;
  padding: 0 20px;
  border: 1px solid ${theme.COLOR.LIGHT.WHITE_GRAY};
`;

const MemberContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 30px;
  flex-wrap: wrap;
  padding: 10px 40px;
`;

const ChallengerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

export { MemberContainer, Container, Line, ChallengerContainer };
