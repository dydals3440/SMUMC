import styled from 'styled-components';

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

  border: none;
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledButton };
