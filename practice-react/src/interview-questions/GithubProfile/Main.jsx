import { useEffect, useState } from "react";
import Github from "./components/Github";

export default function Main() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e){
    if(e.key==='Enter' || e.target === 'click'){
        try {
            const data = await fetch(`https://api.github.com/users/${username}`);
            const res = await data.json();
            setData(res);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
  }

  if (loading) return <h3>Loading....</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <button onClick={handleSubmit}>Search</button>
      {
        data && <Github data={data} />
      }
    </>
  );
}
