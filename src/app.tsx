import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Background, GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Background>
        <h1 className="">Hello World</h1>
      </Background>


    </ThemeProvider>
  )
}
