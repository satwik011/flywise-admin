import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import NavSidebar from './components/NavSidebar';
import ArtistPage from './components/Artists/ArtistPage';
import UserPage from './components/Users/UserPage';
import AddArtistForm from './components/Artists/AddArtistForm';
import BlogPage from './components/Blogs/BlogPage';
import AddBlogForm from './components/Blogs/AddBlogForm';
import PaymentPage from './components/Payments/PaymentPage';
import ArtistDetails from './components/Artists/ArtistDetails';
import EmployeeDetails from './components/Blogs/EmployeeDetails';
import ArtistPayment from './components/Artists/ArtistPayment';
import Addcoursepage from './components/Artists/Addcoursepage';
import AddEmployeeAccount from './components/Blogs/AddEmployeeAccount';
import ViewCoursePage from './components/Artists/Courses/ViewCoursePage'
import Edituniversity from './components/Artists/University/Edituniversity';
import Editcourse from './components/Artists/Courses/Editcourse';
import EditBlog from './components/Blogs/allblogs/EditBlog';
import ViewSingleUser from './components/Users/ViewSingleUser';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <NavSidebar>
          <Route path='/home' exact component={DashboardPage} />
       
         {/* Universities */}

          <Route path='/Universities' exact component={ArtistPage} />
          <Route path='/Universities/add' exact component={AddArtistForm} />
          <Route path='/Universities/edit/:id' exact component={Edituniversity} />
          <Route path='/Universities/addcourse/:id' exact component={Addcoursepage} />
          <Route path='/Universities/viewcourse/:id' exact component={ ViewCoursePage } />
          <Route path='/Universities/editcourse/:id1/:id2' exact component={Editcourse} />
       

       
          <Route path='/artists/detail/:id' exact component={ArtistDetails} />
          <Route
            path='/artists/detail/:id/pay'
            exact
            component={ArtistPayment}
          />
          <Route path='/blogs' exact component={BlogPage} />
          <Route path='/blog/add' exact component={AddBlogForm} />
          <Route path='/blog/edit/:id' exact component={EditBlog} />
          <Route
            path='/employees/addaccount'
            exact
            component={AddEmployeeAccount}
          />
          <Route
            path='/employees/detail/:id'
            exact
            component={EmployeeDetails}
          />
          <Route path='/users' exact component={UserPage} />
          <Route path='/users/:id' exact component={ViewSingleUser} />
          <Route path='/payments' exact component={PaymentPage} />
        </NavSidebar>
      </Switch>
    </Router>
  );
};

export default App;
