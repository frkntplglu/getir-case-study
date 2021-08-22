import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";
import ProductDetailModal from "./containers/ProductDetailModal";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <MainContainer>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Route path="/product/:slug" children={<ProductDetailModal />} />
          </MainContainer>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
