
import { hot } from 'react-hot-loader'
import React, { Component, useState, useEffect }  from 'react'
import './App.css'

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
  <table>
  <tbody> 
      {news.map((e,i)=>{
          return(
              <tr>
                  <td>
                      <h2>{i+1}</h2>
                      <h1 className="title">{e.title}</h1>
                      <img src={e.thumb} className="image"></img>
                  
        
                      <p className="data">{e.date}</p>
                      <p className="desc">{e.excerpt}</p>
                      <a href={e.url} className="url-link">{e.url}</a>
                  </td>
              </tr>
              
          )
      })}
  
  </tbody>
</table>
</>
  )
}

export default hot(module)(App)
