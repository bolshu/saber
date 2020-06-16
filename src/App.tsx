import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { 
  Box,
  Container,
} from '@material-ui/core';

import { AppStore } from './AppProvider';

import { Header } from './components/Header/Header';
import { ProjectList } from './components/ProjectList/ProjectList';
import { ProjectPage } from './components/ProjectPage/ProjectPage';

export const App = (): JSX.Element => (
  <Router>
    <AppStore>
      <Header />

      <Box pt={4} pb={8}>
        <Container maxWidth="md">
            <Switch>
              <Route exact path='/' component={ProjectList} />
              <Route path="/project/:id" component={ProjectPage} />
            </Switch>
        </Container>
      </Box>
    </AppStore>
  </Router>
);
