import React, { useState,useEffect, memo } from "react";

function JobCard({ id }) {
  const [data, setData] = useState(null);
  const [timestamp, setTimestamp] = useState("");
  console.log(id);

  async function fetchJobData() {
    try {
      const allData = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const res = await allData.json();
      setData(res);
      convertDate(res.time);
      console.log(res);
    } catch (error) {
      console.log("Failed to load jobstori7es");
    }
  }

  useEffect(() => {
    if(!data){
        fetchJobData();
    }
  }, [data,id]);

  useEffect(() => {
    if (data && data.time) {
      const date = new Date(data.time * 1000);
      setTimestamp(
        date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }
  }, [data]);

  return (
    <>
      {data && (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
        <h3>{data.title}</h3>
        <p>Posted by: {data.by}</p>
        <p>Date: {timestamp}</p>
      </div>
      )}
    </>
  );
}

export default JobCard;
