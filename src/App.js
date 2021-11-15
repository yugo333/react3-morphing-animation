import { Route, Switch } from "react-router-dom";

import Navigation from "./pages/Navigation/index";
import SceneManager1 from "./pages/Page1Canvas/SceneManager";
import SceneManager2 from "./pages/Page2Canvas/SceneManager";
import SceneManager3 from "./pages/Page3Canvas/SceneManager";
import SceneManager4 from "./pages/Page4Canvas/SceneManager";
import SceneManager5 from "./pages/Page5Canvas/SceneManager";
import SceneManager6 from "./pages/Page6Canvas/SceneManager";
import SceneManager7 from "./pages/Page7Canvas/SceneManager";
import SceneManager8 from "./pages/Page8Canvas/SceneManager";
import SceneManager9 from "./pages/Page9Canvas/SceneManager";
import SceneManager10 from "./pages/Page10Canvas/SceneManager";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <SceneManager1 />
        </Route>
        <Route path="/pageSample">
          <SceneManager2 />
        </Route>
        <Route path="/pageSample2">
          <SceneManager3 />
        </Route>
        <Route path="/pageSample3">
          <SceneManager4 />
        </Route>
        <Route path="/pageSample4">
          <SceneManager5 />
        </Route>
        <Route path="/pageSample5">
          <SceneManager6 />
        </Route>
        <Route path="/pageSample6">
          <SceneManager7 />
        </Route>
        <Route path="/pageSample7">
          <SceneManager8 />
        </Route>
        <Route path="/pageSample8">
          <SceneManager9 />
        </Route>
        <Route path="/pageSample9">
          <SceneManager10 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
