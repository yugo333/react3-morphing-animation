import { Route, Switch } from "react-router-dom";

import SceneManager from "./pages/SceneManager/SceneManager";
import PageSample from "./pages/PageSample";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">REACT THREE BASS</div>
        <SceneManager />
      </Route>
      <Route path="/pageSample">
        <PageSample />
      </Route>
    </Switch>
  );
}

export default App;
