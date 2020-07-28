import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import { Container } from '@material-ui/core';
import Header from '../../Components/Header';

const TestPage = lazy(() => import('../TestPage'));
const LandingPage = lazy(() => import('../LandingPage'));
const BarChartPage = lazy(() => import('../BarChartPage'));
const ResultPage = lazy(() => import('../ResultPage'));

export default () => {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/">
          <Suspense fallback={ <div>Loading...</div> }>
            <LandingPage/>
          </Suspense>
        </Route>


        <Route path="/test">
          <Container className="page-content">
            <Suspense fallback={ <div>Loading...</div> }>
              <TestPage/>
            </Suspense>
          </Container>
        </Route>


        <Route path="/chart">
          <Container className="page-content">
            <Suspense fallback={ <div>Loading...</div> }>
              <BarChartPage/>
            </Suspense>
          </Container>
        </Route>


        <Route path="/result">
          <Container className="page-content">
            <Suspense fallback={ <div>Loading...</div> }>
              <ResultPage/>
            </Suspense>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}