import styled from "styled-components"

export const ButtonContainer = styled.a`
  padding: 10px 20px;

  border-radius: 5px;
  
  background-color: var(--green-300);
  font-size: 1.1rem;
  color: var(--white);

  transition: all 0.2s;

  &:hover {
    background-color: var(--green-600);
  }
`