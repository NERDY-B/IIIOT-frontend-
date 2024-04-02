import React from 'react'
import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen'
import LoginScreenUpdate from './screens/LoginScreenUpdate'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './index.css'
import RegisterScreen from './screens/RegisterScreen';
import SpinnerScreen from './screens/SpinnerScreen';
import ForgotScreen from './screens/ForgotScreen';
import Test from './screens/Test';


const App = () => {
  return (
    <>
      <Router>
        <Container>
          {/* //programmatically add header component when it route is not Homescreen 
          //check which of the defualt props has the path or url value and destructure */}
          <Routes>

              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/register' element={<RegisterScreen />}  />
              {/* <Route path='/testLogin' element={LoginScreenUpdate}  /> */}
              <Route path='/spinner' element={<SpinnerScreen />}  />
              <Route path='/forgotpassword' element={<ForgotScreen />}  />
              </Routes>
              {/* <Route path='/forgotpassword' element={Test}  /> */}
        </Container>
      </Router>
    </>
  );
}

export default App;
