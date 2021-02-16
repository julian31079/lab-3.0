import React from "react";

import Header from "../components/Header";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "../assets/Styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Login} />
  </BrowserRouter>
);
export default App;
