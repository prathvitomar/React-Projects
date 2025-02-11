import { useEffect, useState } from "react";

export default function Timer({ duration }) {
  if (duration > 0) {
    const [miliseconds, setMiliSeconds] = useState(duration);

    useEffect(() => {
      let timer = setInterval(() => {
        setMiliSeconds((prev) => prev - 1000);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, [miliseconds]);

    function getCurrentTime(miliseconds) {
      const total_seconds = parseInt(miliseconds / 1000);
      const total_minutes = parseInt(total_seconds / 60);
      const total_hours = parseInt(total_minutes / 60);
      const total_days = parseInt(total_hours / 24);

      const seconds = total_seconds % 60;
      const minutes = total_minutes % 60;
      const hours = total_hours % 60;
      const days = total_days;

      return `${days} : ${hours} : ${minutes} : ${seconds}`;
    }

    return (
      <>
        <h1>{getCurrentTime(miliseconds)}</h1>
      </>
    );
  } else {
    return <h1>Please Enter Time</h1>;
  }
}
