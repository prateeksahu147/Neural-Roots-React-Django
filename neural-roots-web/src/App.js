import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from './pages/neural-roots-workspace/Workspace';
import LoginPage from './pages/neural-roots-workspace/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element = {<LoginPage />} path = "/login"/>  
        <Route element= {<PrivateRoute/>}>
          <Route exact path="/workspace/" element = {<Workspace />} /> 
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
