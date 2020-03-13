import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <Switch>
      {routes.map(route => (
        <Route path={route.path} component={route.component} />
      ))}
    </Switch>
  </div>
);

export default App;
