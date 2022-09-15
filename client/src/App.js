import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Donate from './pages/Donate';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Team from './pages/Team';
import Nav from './components/Nav';
// import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
          
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
