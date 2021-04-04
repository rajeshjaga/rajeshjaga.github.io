import "./SCSS/styles.scss";
import Lazy from "./component/Lazy";
import Nav from "./component/Nav";
import { About, Blog, Work } from "./component/pages";
import Home from "./component/pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Lazy>
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </Lazy>
  );
};

export default App;
