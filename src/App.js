import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/detail/:serviceId">
            <Detail></Detail>
          </PrivateRoute>

          <Route path="/home">
            <Home></Home>
          </Route>



          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path = "/register">
            <Register></Register>
          </Route>

          <Route path = "/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>





        </Switch>
      </Router>
       <Footer></Footer> 
      </AuthProvider>
    </div>
  );
}

export default App;
