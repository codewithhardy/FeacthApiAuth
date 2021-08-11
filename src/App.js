import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Challenge from "./Component/Challenge";
import Register from "./Component/Register";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div id="page-body">
            <NavLink exact activeClassName="active" to="/Login">
              Login
            </NavLink>

            <NavLink activeClassName="active" to="/Register">
              Register
            </NavLink>
            <NavLink activeClassName="active" to="/Challenge">
              Challenge
            </NavLink>
          </div>
          <div>
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Challenge" component={Challenge} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
