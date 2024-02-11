import React from 'react'
import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen'
import LoginScreenUpdate from './screens/LoginScreenUpdate'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './index.css'
import RegisterScreen from './screens/RegisterScreen';
import SpinnerScreen from './screens/SpinnerScreen';
import forgotScreen from './screens/ForgotScreen';

const App = () => {
  return (
    <>
      <Router>
        <Container>
          {/* //programmatically add header component when it route is not Homescreen 
          //check which of the defualt props has the path or url value and destructure */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/register' component={RegisterScreen}  />
          {/* <Route path='/testLogin' component={LoginScreenUpdate}  /> */}
          <Route path='/Login' component={SpinnerScreen}  />
          <Route path='/forgotpassword' component={forgotScreen}  />
        </Container>
      </Router>
    </>
  );
}

export default App;
