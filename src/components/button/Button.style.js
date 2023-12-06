import styled from 'styled-components';
import theme from '../../theme';

const StyledButton = styled.button`
  width: ${props => props.width || props.fixwidth};
  height: ${props => props.height || props.fixheight};
  background: ${props => props.background};
  line-height: ${props => props.height};
  padding: ${props => props.padding || props.fixpadding};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  color: ${props => props.fontcolor};
  outline: ${props => props.outline};
  border: ${props => props.border};

  cursor: pointer;
  border-radius: 16px;
  ${theme.ALIGN.COLUMN_CENTER}

  &:hover {
    transform: scale(1.1);
  }
`;

export { StyledButton };
