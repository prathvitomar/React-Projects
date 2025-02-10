import { useState } from "react";
import Modal from "./components/Modal";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div
      className="App"
      style={{
        background: show ? "grey" : "white",
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <Modal show={show} handleShow={handleShow} />
    </div>
  );
}
