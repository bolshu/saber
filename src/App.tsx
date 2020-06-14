import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Container } from '@material-ui/core';


import { Header } from './components/Header/Header';
import { ProjectList } from './components/ProjectList/ProjectList';
import { ProjectPage } from './components/ProjectPage/ProjectPage';

export const App = (): JSX.Element => (
  <>
    <Header />

    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route exact path='/' component={ProjectList} />
          <Route path="/project/:id" component={ProjectPage} />
        </Switch>
      </Router>
    </Container>
  </>
);
