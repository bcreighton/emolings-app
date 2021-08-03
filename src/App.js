import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import './reset.css';


function App() {
  return (
    <main className='App'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Emolings</title>
          <meta name='description' content='Modern day child feelings chart with a unique spin on parent/caregiver coping skills.'/>
      </Helmet>
      <Nav />
      <main>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </main>
  );
}

export default App;