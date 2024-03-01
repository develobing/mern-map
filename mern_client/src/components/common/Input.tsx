import React, { memo } from 'react';
import styled from 'styled-components';

// children
// name
// value
// onChange
// onSubmit
interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const StyledInput = styled.input<InputProps>`
  display: inline-block;
  border: none;
  width: 100%;
  min-height: 2em;
  font-size: 14px;
`;

function Input({ children, name, value, onChange, onSubmit }: InputProps) {
  const onEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterSubmit}
    >
      {children}
    </StyledInput>
  );
}

export default memo(Input);
