import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
