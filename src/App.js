import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Details from './pages/Details.js';
import Category from './pages/Category.js';
import Header from './components/Header.js';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/details/:id" >
            <Details />
          </Route>
          <Route path="/category/:id" >
            <Category />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
