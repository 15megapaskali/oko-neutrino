import React, { Component, useState, useEffect }  from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';





const Scroll = () =>{
    const [items, setItems] = useState(5);
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
    setItems(items+3);
    // setData(data.slice(0,items))
  };

console.log("items: ", items);

console.log(data.slice(0,items));


return(
    <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
        }>
              <table>
                <tbody> 
                    {data.slice(0,items).map((e,i)=>{
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
    </InfiniteScroll>
)
}

export default Scroll;

