import { useState, useEffect } from "react";

export default function MainSearch2() {
  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const list = await fetch(`https://dummyjson.com/users`);
        const res = await list.json();
        console.log(res.users)
        setData(res.users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    let users = data.filter((name) => name["firstName"].toLowerCase().includes(input));
    setFilteredList(users);
  }, [input]);

  return (
    <>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {filteredList.length > 0 &&
            filteredList.map((data) => <li key={data.id}>{data.firstName}</li>)}
        </div>
    </>
  );
}
