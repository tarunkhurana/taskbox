import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { StoreProvider } from './store';
import HomePage from './components/HomePage';
import FavPage from './components/FavPage';
import InboxScreen from './components/InboxScreen';

const Routing: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/faves' component={FavPage} />
      <Route path='/inbox' component={InboxScreen} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <StoreProvider>
    <Routing />
    {/* <HomePage /> */}
  </StoreProvider>,
  document.getElementById('root')
);
