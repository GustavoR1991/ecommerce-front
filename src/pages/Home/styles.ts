import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme["gray-100"]};
`

export const Text = styled.h1`
  position: fixed;    
  color: ${props => props.theme["green-300"]};
  `