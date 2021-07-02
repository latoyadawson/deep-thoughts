import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

//estabilish connection to the back-end server graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//instantiate teh apollo client instance and create connection to the API 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

});

// apolloProvier provides data to all other components. 
function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
