import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const Routes = ({ history }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="portfolio" element={<Portfolio />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
