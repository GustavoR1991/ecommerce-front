import styled from "styled-components";

// position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// pode te ajudar a centralizar uma div na tela

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme["gray-100"]};
`

export const CardLogin = styled.div`
  position: fixed;
  left: 90%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  background-color: ${props => props.theme["primary"]};
  width: 600px;
  height: 100%; 
  box-shadow: 0 4px 32px #4F709C;
  border-radius: 16px;  
`

export const CardLoginContent = styled.div`
  position: fixed;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  gap: 16px;
  display: flex;
  flex-direction: column;

  `
export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `

export const Input = styled.input`
    display: flex;
    align-items: center;
    width: 215px;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 0 16px;
    font-size: 1rem;
    outline: none;

   
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;

  `

export const ButtonLogin = styled.button`
      width: 100px;
      height: 40px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      background-color: ${props => props.theme["secondary"]};
      color: ${props => props.theme["textPrimary"]};

      &:hover {
        background-color: ${props => props.theme["textSecondary"]};

      }
  `

