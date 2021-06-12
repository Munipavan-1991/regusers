import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import UsersList from './components/usersList/UsersList';
import About from './components/about/About';
import Home from './components/home/Home';
import NavMenu from "./components/navMenu/NavMenu";

function App() {

  return (
    <div className="App">
      <img src={logo} className='App-logo' />
      <Router>
        <div>
          <NavMenu />
          <div className='pageContent'>
            <Switch>
              <Route exact path="/about-us" component={About} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/" component={Home} />
              <Route path="*">
                <h1> Page not found</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
