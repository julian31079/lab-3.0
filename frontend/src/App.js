import NavBar from './modules/NavBar';
import {CreateUser} from'./modules/CreateUser';
import {General} from './modules/General';
import {About} from './modules/About'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavBar/>
        <div> 
          
          <Switch>
            <Route path='/' exact='true' component={General}/>
            <Route path='/createUser' component={CreateUser}/>
            <Route path='/about' component={About}/>
          </Switch>

        </div>
    </Router>
    
  );
}

export default App;
