// Node Module imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Pages imports
import Home         from './pages/Home'
import Login        from './pages/Login';
import Signup       from './pages/Signup';
import About        from './pages/About';
import Contact      from './pages/Contact';
import FAQ          from './pages/FAQ';
import Products     from "./pages/Products";
import OrderSummary from "./pages/OrderSummary";
import OrderHistory from "./pages/OrderHistory";
import Error        from "./pages/NoMatch";
import Cart         from "./pages/Cart";
import Admin        from './pages/Admin';

// Components imports
import Navbar       from "./components/Nav";
import Footer       from "./components/Footer";

// CSS imports
import './App.css';
import './assets/style.css'

// sends http requests to server at this link
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'             component={Home}/>
          <Route exact path='/products'     component={Products} />
          <Route exact path='/about'        component={About} />
          <Route exact path='/contact'      component={Contact} />
          <Route exact path='/faq'          component={FAQ} />
          <Route exact path='/admin'        component={Admin} />
          <Route exact path='/cart'         component={Cart} />
          <Route exact path='/orderhistory' component={OrderHistory} />
          <Route exact path='/ordersummary' component={OrderSummary} />
          <Route exact path='/login'        component={Login} />
          <Route exact path='/signup'       component={Signup} />

          <Route                            component={Error} />
        </Switch>
        
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
