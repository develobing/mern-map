import React from 'react';
import styled from 'styled-components';

// width
// height
interface DividerProps {
  width?: string;
  height?: string;
}

const StyledDivider = styled.div<DividerProps>`
  width: ${(props) => props.width ?? '1px'};
  height: ${(props) => props.height ?? '20px'};
  opacity: 0.2;
  background-color: #707070;
  margin: 0 8px;
`;

function Divider({ width, height }: DividerProps) {
  return <StyledDivider width={width} height={height} />;
}

export default Divider;
