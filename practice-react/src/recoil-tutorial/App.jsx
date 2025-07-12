import "./styles.css";
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { CharacterCounter } from "./CharacterCounter";
// import Navbar from "../src/component/Navbar.tsx";
import AsyncNav from "./component/AsyncNav";
import {
  atomFamilyValue,
  atomSelectorFamily,
} from "../src/store/atoms/atomFamily";

export default function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      {/* <Navbar /> */}
      {/* <AsyncNav /> */}
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const atomFamValue = useRecoilValueLoadable(atomSelectorFamily(id));
  if (atomFamValue.state === "loading") {
    return <h1>Loading...</h1>;
  } else if (atomFamValue.state === "hasValue") {
    return (
      <>
        <div>
          <hr />
          <h1>{atomFamValue.contents.id}</h1>
          <h1>{atomFamValue.contents.title}</h1>
          <p>{atomFamValue.contents.description}</p>
        </div>
      </>
    );
  } else if (atomFamValue.state === "hasError") {
    return <h1>Server Error Occured</h1>;
  }
}
