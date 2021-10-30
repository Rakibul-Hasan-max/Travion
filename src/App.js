import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
// import AuthProvider from './contexts/AuthProvider';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            {/* <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
