import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
import Vita from "./pages/Vita";
import TheVoice from "./pages/TheVoice";

const Routes = ({ history }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="vita" element={<Vita />} />
        <Route exact path="the_voice" element={<TheVoice />} />
        {/* <Route exact path="sift" element={<Portfolio />} />
        <Route exact path="vancouver_sun" element={<Portfolio />} />
        <Route exact path="aizenkai" element={<Portfolio />} />
        <Route exact path="weather_station" element={<Portfolio />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
