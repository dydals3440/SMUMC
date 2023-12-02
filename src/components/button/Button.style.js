import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  color: ${props => props.fontcolor};
  border-radius: ${props => props.radius}px;
  border: ${props => props.border};

  align-items: center;
`;

export { StyledButton };
