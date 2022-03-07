import './App.css';
import LandingPage from './Components/LandingPage';
import { useEffect, useState} from "react";
import Main from './Components/Main';
import Log from './Components/Log';
import { useMoralis } from "react-moralis";
import useToken from './Components/UseToken';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


/*
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

*/


/*
function App() {

  const { token, setToken } = useToken();



if(!token) {
  return <Log setToken={setToken} />
}
*/

import React from 'react'
import NonAuthenticated from './Components/NonAuthenticated';


const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  }, [isAuthenticated, isWeb3Enabled]);


  return (

    <BrowserRouter>

    <Routes> 
    <Route  path='/main' element={<Main /> }  >
      </Route>
      
      <Route  path='/nonauth' element={<NonAuthenticated />} >
      </Route>
    </Routes>
    {isAuthenticated ? <Navigate to="/main" /> : <Navigate  to="/NonAuthenticated" />}

    </BrowserRouter>


    
  );
}

export default App;
