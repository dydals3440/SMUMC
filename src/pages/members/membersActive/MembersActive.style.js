import styled from 'styled-components';
import theme from '../../../theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 50px;
  padding: 50px 0;
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
  padding: 10px 0px;
`;

export { MemberContainer, Container, Line };
