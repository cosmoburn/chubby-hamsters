import React from 'react'
import styled from '@emotion/styled'

const Button = ({ children, type = 'primary' }) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--colors-action);
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  padding: .75rem 1rem;
  min-width: 8em;

  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: .95px;
  text-align: center;
  line-height: 1.1;

  transition: 220ms all ease-in-out;
  
  &:hover {
    background-color: var(--colors-hover);
  }

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 blue;
  }

  &:active {
    background-color: green;
  }
`

export default Button