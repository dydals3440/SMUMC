import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';
import { FONT } from '../../../constants/font';
import { FONT_SIZE } from '../../../constants/size';
import GitHubCalendar from 'react-github-calendar';

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
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  height: 100vh;
  gap: 35px;
  animation: ${fadeInUp} 0.7s ease-in-out;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  h3 {
    display: flex;
    color: ${theme.COLOR.LIGHT.WHITE};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }

  h5 {
    display: flex;
    color: ${theme.COLOR.LIGHT.WHITE};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h5 {
    display: flex;
    color: ${theme.COLOR.LIGHT.WHITE};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }
`;

const ColumnCenterContainer = styled(ColumnContainer)`
  align-items: center;
`;

const MemberImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 30px 0;
  border-radius: 10px;
`;

const GitChartImg = styled(GitHubCalendar)``;

const MemberProjectContainer = styled.div``;

const PartText = styled.p`
  display: flex;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-family: ${FONT.IBM_PLEX_SANS_KR.REGULAR};
`;

export {
  Container,
  RowContainer,
  ColumnContainer,
  MemberImg,
  GitChartImg,
  MemberProjectContainer,
  ColumnCenterContainer,
  PartText
};
