import React, { useEffect, useState } from 'react'
import JobPosting from './JobPosting';

function MainJobBoard() {
  const API_ENDPOINT = `https://hacker-news.firebaseio.com/v0`;
  const [dataIds, setDataIds] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [itemNumber, setItemNumber] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('Component Rendered..!!!')
  useEffect(()=>{
    ;(async function firstFetch() {
      try {
        const data = await fetch(`${API_ENDPOINT}/jobstories.json`);
        const res = await data.json();
        setDataIds(res);
        console.log(res)
      } catch (error) {
        setError(error.message);
      }
    })()
  },[])

  useEffect(()=>{
    if(dataIds.length === 0) return;
    ;(async function(){
      try {
        const data =  await Promise.all(
          dataIds.map(id => 
            fetch(`${API_ENDPOINT}/item/${id}.json`)
              .then(res => res.json())
          )
        );
        setApiData(data);
      } catch (error) {
        setError(error.message);
      }finally {
        setLoading(false);
    }
  })()
  },[dataIds])

  if(loading) return (<h3>Loading...</h3>)
  if(error) return (<h3>{error}</h3>)
 
  return (
    <>
      <div>
        <h2>Job Board : </h2>
        {
          apiData.length > 0 && apiData.slice(0, itemNumber).map((data)=>(
            <div key={data.id}>
              <JobPosting url={data.url} title={data.title} time={data.time} by={data.by}/>
            </div>
          ))
        }
        <button disabled={itemNumber >= dataIds.length} onClick={()=> setItemNumber(prev => prev + 10)}>Show More</button>
      </div>
    </>
  )
}

export default MainJobBoard