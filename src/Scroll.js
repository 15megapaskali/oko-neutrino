import React, { Component, useState, useEffect }  from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';





const Scroll = () =>{
    const [items, setItems] = useState(Array.from({ length: 6 }));
    const [data, setData] = useState([]);

const url = "http://localhost:3000/posts";




useEffect(() => {
    fetch(url,{method:'GET',
                headers: {
                  "Content-Type": "application/json"
                }})
    .then(res =>res.json())
    .then(result => {
        
        console.log(result);
        setData(result);
    })
    .catch(error=>{
        console.error('Fetch Error:',error);
    })
}, [])

const fetchMoreData = () => {
    setItems(items.concat(Array.from({ length: 3 })));
  };

console.log("items: ", items);

console.log(data.slice(0,items));


return(
    <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={true}
        loader={<div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
        }>
                
                
                    {data.slice(0,items.length).map((e,i)=>{
                        return(
                            <div className="card">
                                <img src={e.thumb} className="card-img-top" alt={e.thumb}></img>
                                <div class="card-body">
                                <h5 className="card-title" onClick={e.url}>{e.title}</h5>
                                    <p className="card-text">{e.excerpt}</p>
                                    <a href={e.url} className="card-link">Czytaj więcej</a>
                                    <p className="card-text"><small className="text-muted">dodano: {e.date}</small></p>
                                </div>
                            </div>
                           
                            
                        )
                    })}
                
                
    </InfiniteScroll>
)
}

export default Scroll;

