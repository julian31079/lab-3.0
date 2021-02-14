import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const App = () => (
  <div className="App">
    <Router>
      <Header />
    <div>
        <Switch>
          {
            <Route path="/" exact="true" component={Login} />
          }
        </Switch>
      </div>
      
    </Router>
  </div>
);

export default App;
