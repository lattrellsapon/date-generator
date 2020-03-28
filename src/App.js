import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

import Navbar from './components/layout/Navbar';
import Dates from './components/dateIdeas/Dates';
import DateGenerated from './components/dateIdeas/DateGenerated';
import Footer from './components/layout/Footer';

import './App.css';

export default function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dates} />
            <Route exact path='/date-suggestion' component={DateGenerated} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}
