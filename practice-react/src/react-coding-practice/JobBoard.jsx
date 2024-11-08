import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

function JobBoard() {
  const [ids, setIds] = useState([]);
  const [loadMore, setLoadMore] = useState(9);

  async function fetchJobIds() {
    try {
      const allData = await fetch(
        `https://hacker-news.firebaseio.com/v0/jobstories.json`
      );
      const res = await allData.json();
      setIds(res);
    } catch (error) {
    console.log("Failed to load jobstories")
    }
  }

  useEffect(() => {
    fetchJobIds();
  }, []);

  function handleLoadMore(){
    setLoadMore(prev=> prev + loadMore)
  }

  return (
    <>
      <div>
        <div>
          <h1>HN Jobs</h1>
          <div>
            {ids.length > 0 &&
              ids.slice(0,loadMore).map((item) => (
                <div key={item}>
                  <JobCard id={item}/>
                </div>
              ))}
          </div>
            <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default JobBoard;
