import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          {
            <Route path="/" exact="true" component={Header} />
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
