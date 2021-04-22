import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Weather defaultCity="Montreal" />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
