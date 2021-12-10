import { Switch ,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/home'><Home/></Route>
            <PrivateRoute path="/appointment"><Appointment/></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
            <Route path='/login'><Login/></Route>
            <Route path='/register'><Register/></Route>
            <Route path='/'><Home/></Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
