import React from "react";
import Register from "./Pages/Register";
import Display from "./Pages/Display";
import Update from "./Pages/Update";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/display" component={Display} />
          <Route path="/update" component={Update} />
          <Route to="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
