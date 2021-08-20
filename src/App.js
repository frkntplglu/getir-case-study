import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <MainContainer>
          <Home />
        </MainContainer>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
