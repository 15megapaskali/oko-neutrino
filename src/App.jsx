import { hot } from 'react-hot-loader';
import React, { Component, useState, useEffect }  from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Scroll from './Scroll';

const message = 'Welcome to oko-neutrino'
const App = () => {
  const [news, setNews] = useState([]);


  const url = "http://localhost:3000/posts";

  useEffect(() => {
      fetch(url,{method:'GET',
                  headers: {
                    "Content-Type": "application/json"
                  }})
      .then(resp =>resp.json())
      .then(data => {
          setNews(data);
          console.log(data);
      })
  }, [])

  return(
    <>
  <div className='App'>
    <h1>{message}</h1>
  </div>
  <Scroll/>
</>
  )
}

export default hot(module)(App)
