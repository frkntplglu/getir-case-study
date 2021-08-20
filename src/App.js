import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ProductsList from "./containers/ProductsList";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <MainContainer>
          <ProductsList />
        </MainContainer>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
