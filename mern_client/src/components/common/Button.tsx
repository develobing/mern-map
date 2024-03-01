import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// children: props.children
// onClick: props.onClick
// type: 'link' | 'button'
// url: props.url
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'link' | 'button';
  url?: string;
}

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  padding: 0;
  cursor: pointer;
`;

function Button({ children, onClick, type, url }: ButtonProps) {
  // type에 따라서 LinkButton / DefaultButton 렌더링

  const DefaultButton = (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );

  const LinkButton = (
    <StyledButton>
      <Link to={url!}>{children}</Link>
    </StyledButton>
  );

  return type === 'link' ? LinkButton : DefaultButton;
}

export default memo(Button);
