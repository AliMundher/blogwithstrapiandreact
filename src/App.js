import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomePage from './pages/HomePage.js';
import Details from './pages/Details.js';
import Category from './pages/Category.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const client = new ApolloClient({
  url: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client} >
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
          <Footer />
        </div>
      </ApolloProvider>
    </Router >
  );
}

export default App;
