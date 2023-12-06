import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';
import { FONT } from '../../../constants/font';
import { FONT_SIZE } from '../../../constants/size';

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
  gap: 35px;
  animation: ${fadeInUp} 0.7s ease-in-out;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  p {
    display: flex;
    color: ${theme.COLOR.DARK.LIGHT_LIGHT_GRAY};
    font-family: ${FONT.IBM_PLEX_SANS_KR.REGULAR};
  }

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

const GitChartImg = styled.img`
  width: 750px;
  padding: 20px;
  margin: 30px 0;

  @media ${theme.WINDOW_SIZE.TABLET} {
    display: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

const MemberProjectContainer = styled.div``;

export {
  Container,
  RowContainer,
  ColumnContainer,
  MemberImg,
  GitChartImg,
  MemberProjectContainer,
  ColumnCenterContainer
};
