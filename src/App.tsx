import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        {routes.map(route => (
          <Route path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
