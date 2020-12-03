import { hot } from 'react-hot-loader';
import React, { Component, useState, useEffect }  from 'react';
import './App.css';
import Scroll from './Scroll';

const message = 'React app oko.press news'
const App = () => {
 



  return(
    <>
  
  <div className="main-content">
  <div className='App'>
    <h1>{message}</h1>
  </div>
    <Scroll/>
  </div>
  
</>
  )
}

export default hot(module)(App)
