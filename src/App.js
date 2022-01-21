import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import NavSidebar from './components/NavSidebar';
import ArtistPage from './components/Artists/ArtistPage';
import UserPage from './components/Users/UserPage';
import AddArtistForm from './components/Artists/AddArtistForm';

export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <NavSidebar>
          <Route path='/home' exact component={DashboardPage} />
          <Route path='/artists' exact component={ArtistPage} />
          <Route path='/artists/add' exact component={AddArtistForm} />
          <Route path='/users' exact component={UserPage} />
        </NavSidebar>
      </Switch>
    </Router>
  );
};

export default App;
