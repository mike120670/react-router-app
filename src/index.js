import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AppMain from "./AppMain";
import Users from "./components/users";
import Contact from "./components/contact";
import Notfound from "./components/notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact actvieClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink actvieClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink actvieClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={AppMain} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
